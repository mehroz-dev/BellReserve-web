import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Serves the Vercel function in api/demo.js during local development,
 * so the demo form works with `npm run dev` exactly like it does on Vercel.
 */
const localApiPlugin = () => {
  return {
    name: "bellreserve-local-api",

    configureServer: (server) => {
      server.middlewares.use("/api/demo", async (nodeRequest, nodeResponse) => {
        const chunks = [];

        for await (const chunk of nodeRequest) {
          chunks.push(chunk);
        }

        const request = new Request("http://localhost/api/demo", {
          method: nodeRequest.method,
          headers: {
            "Content-Type": nodeRequest.headers["content-type"] || "application/json",
          },
          body: nodeRequest.method === "POST" ? Buffer.concat(chunks) : undefined,
        });

        const handlerModule = await server.ssrLoadModule("/api/demo.js");
        const handler = handlerModule[nodeRequest.method];

        if (!handler) {
          nodeResponse.statusCode = 405;
          nodeResponse.end();

          return;
        }

        const response = await handler(request);

        nodeResponse.statusCode = response.status;
        nodeResponse.setHeader("Content-Type", response.headers.get("Content-Type") || "application/json");
        nodeResponse.end(await response.text());
      });
    },
  };
};

export default defineConfig({
  plugins: [
    react(),
    localApiPlugin(),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
