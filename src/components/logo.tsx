import { Bot } from "lucide-react";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Bot className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline text-foreground">
        Textify AI
      </span>
    </Link>
  );
}
