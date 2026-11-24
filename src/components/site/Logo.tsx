import Image from "next/image";
import Link from "next/link";

/** Horizontal lockup. Switches to the reversed (white) version in dark theme via CSS, no hydration flash. */
export function Logo({ height = 34 }: { height?: number }) {
  const width = Math.round((1740 / 400) * height);
  return (
    <Link href="/" aria-label="BellReserve home" className="flex items-center">
      <Image src="/brand/bellreserve-logo.png" alt="BellReserve" width={width} height={height} priority className="show-light block" style={{ height, width: "auto" }} />
      <Image src="/brand/bellreserve-logo-white.png" alt="BellReserve" width={width} height={height} priority className="show-dark" style={{ height, width: "auto" }} />
    </Link>
  );
}
