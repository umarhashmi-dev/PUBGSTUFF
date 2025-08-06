"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#automation", label: "Automation" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 ml-auto text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4 ml-10">
          <Link href="/login" className="text-base font-medium text-foreground transition-colors hover:text-primary">
            Login
          </Link>
          <Button asChild>
            <Link href="/register">Create free account</Link>
          </Button>
        </div>
        <div className="flex items-center md:hidden ml-auto">
          <button
            className="ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
             <Link href="/login" className="text-lg font-medium text-foreground transition-colors hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Button asChild>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>Create free account</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
