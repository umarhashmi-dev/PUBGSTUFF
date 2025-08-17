import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/my-account", label: "My account" },
];

const policyLinks = [
  { href: "/policies/disclaimer", label: "Disclaimer" },
  { href: "/policies/privacy-policy", label: "Privacy Policy" },
  { href: "/policies/terms-of-use", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-muted-foreground text-sm sm:text-base">
              Your one-stop shop for digital gaming products.
            </p>
            <div className="flex space-x-4">
              <Link href="https://x.com/dev_umar9" target="_blank" aria-label="Twitter"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="https://www.instagram.com/umarhashmi.dev/" target="_blank" aria-label="Instagram"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="https://github.com/umarhashmi-dev" target="_blank" aria-label="Github"><Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="https://www.facebook.com/bilal.hashim.3" target="_blank" aria-label="Facebook"><Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-headline font-semibold text-foreground">Newsletter</h3>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your Email Address" className="flex-1" />
              <Button type="submit" className="hover-shimmer-button">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm sm:text-base">
          <p>
            &copy; {new Date().getFullYear()} PUBGSTUFF. All rights reserved. Developed by{' '}
            <a
              href="https://umarhashmi.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              Umar Hashmi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
