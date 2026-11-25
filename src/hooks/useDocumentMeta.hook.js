import { useEffect } from "react";
import { site } from "../utils/Site.config.js";

const DEFAULT_TITLE = "BellReserve · AI calling agent that answers every call";

const setMetaTag = (selector, attribute, value) => {
  const tag = document.head.querySelector(selector);

  if (tag) {
    tag.setAttribute(attribute, value);
  }
};

/**
 * Sets the page title, description and canonical URL for the current page.
 * `title` is shown as "Title · BellReserve"; leave it empty for the home page.
 */
export const useDocumentMeta = ({ title, description, path }) => {
  useEffect(() => {
    document.title = title ? `${title} · BellReserve` : DEFAULT_TITLE;

    setMetaTag('meta[name="description"]', "content", description || site.description);
    setMetaTag('link[rel="canonical"]', "href", `${site.url}${path || "/"}`);
  }, [title, description, path]);
};
