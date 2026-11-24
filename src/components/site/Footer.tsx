import Link from "next/link";
import { industries } from "@/lib/industries";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = 2026;
  return (
    <footer data-theme="dark" className="dark-band relative !mx-0 overflow-x-clip !rounded-none px-6 pb-10 pt-[72px]">
      <div className="wrap flex flex-col gap-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div className="flex min-w-0 flex-col gap-4">
            <Logo height={36} />
            <p className="body-text max-w-[320px] text-[15px]">
              The AI calling agent that answers every call for restaurants, HVAC, dental, real estate and front-desk teams.
            </p>
          </div>
          <FooterCol title="Product">
            <Link href="/#features">Features</Link>
            <Link href="/#how">How it works</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/#faq">FAQ</Link>
          </FooterCol>
          <FooterCol title="Industries">
            {industries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`}>
                {i.navLabel}
              </Link>
            ))}
          </FooterCol>
          <FooterCol title="Contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.contactPhone.href}>{site.contactPhone.display}</a>
            <Link href="/book-demo" className="font-semibold text-[var(--accent-text)]">
              Book a demo
            </Link>
          </FooterCol>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-[var(--border)] pt-6 text-sm text-[var(--faint)]">
          <span>© {year} BellReserve. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 text-[15px] [&_a:hover]:text-[var(--accent-text)]">
      <span className="mono text-xs uppercase tracking-[0.1em] text-[var(--faint)]">{title}</span>
      {children}
    </div>
  );
}
