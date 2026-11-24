import Link from "next/link";
import { Cube } from "@/components/vectors";

export default function NotFound() {
  return (
    <section className="sec relative flex min-h-[70vh] items-center">
      <div className="glow" style={{ width: 600, height: 500, left: "50%", marginLeft: -300, top: 0, background: "var(--glow)" }} />
      <div className="wrap flex flex-col items-center gap-6 text-center">
        <Cube size={130} className="fl" />
        <span className="eyebrow center">404</span>
        <h1 className="h2">This line isn&apos;t connected.</h1>
        <p className="lead max-w-[480px]">The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to a number that answers.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Go home
          </Link>
          <Link href="/book-demo" className="btn btn-ghost">
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
