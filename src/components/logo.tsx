import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center justify-center ${className}`}>
      <span className="text-xl font-bold font-headline text-logo-1">
        PUBGSTUFF
      </span>
    </Link>
  );
}
