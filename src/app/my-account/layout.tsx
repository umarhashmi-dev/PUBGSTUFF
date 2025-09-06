
'use client';
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import RequireAuth from "@/components/require-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PanelLeft } from "lucide-react";

const navItems = [
  { href: "/my-account", label: "Dashboard" },
  { href: "/my-account/orders", label: "Orders" },
  { href: "/my-account/downloads", label: "Downloads" },
  { href: "/my-account/account-details", label: "Account Details" },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <RequireAuth>
      <div className="flex min-h-[100dvh] flex-col bg-gray-50">
        <Header />
        <main className="flex-1 pt-24 md:pt-32">
          <div className="container py-12">
            <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] gap-10">
              <aside className="hidden md:flex flex-col gap-2">
                 <nav className="grid gap-1 text-sm text-muted-foreground">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "px-3 py-2 rounded-md font-medium transition-colors",
                        pathname === item.href
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </aside>
              <div className="flex flex-col">
                <div className="flex items-center justify-between md:hidden mb-6">
                    <h1 className="text-2xl font-bold font-headline">My Account</h1>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <PanelLeft className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pt-12">
                             <nav className="grid gap-2 text-lg font-medium">
                                {navItems.map((item) => (
                                    <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "px-3 py-2 rounded-md transition-colors",
                                        pathname === item.href
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-muted"
                                    )}
                                    >
                                    {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
                {children}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </RequireAuth>
  );
}
