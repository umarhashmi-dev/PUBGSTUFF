import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <span className="text-xl font-bold font-headline text-foreground">
        Textify AI
      </span>
    </Link>
  );
}

    