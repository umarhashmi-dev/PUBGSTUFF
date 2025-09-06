
'use client';
import React from 'react';
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import RequireAuth from "@/components/require-auth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
    PanelLeft, 
    LayoutDashboard, 
    ShoppingCart, 
    Download, 
    User, 
    CreditCard, 
    LogOut 
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "@/components/logo";

const navItems = [
  { href: "/my-account", label: "Dashboard", icon: <LayoutDashboard /> },
  { href: "/my-account/orders", label: "Orders", icon: <ShoppingCart /> },
  { href: "/my-account/downloads", label: "Downloads", icon: <Download /> },
  { href: "/my-account/account-details", label: "Account Details", icon: <User /> },
  { href: "/my-account/billing", label: "Billing Address", icon: <CreditCard /> },
];

function SidebarNav() {
    const pathname = usePathname();
    const { user } = useAuth();
    const { toast } = useToast();
    const router = useRouter();

    const handleLogout = async () => {
        try {
          await supabase.auth.signOut();
          toast({
            title: "Success!",
            description: "You have successfully logged out.",
          });
          router.push("/");
        } catch (error: any) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        }
    };
    
    return (
        <aside className="hidden md:flex flex-col w-64 border-r bg-white">
            <div className="p-4 border-b">
                <Logo />
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-md font-medium text-gray-600 transition-colors",
                             pathname === item.href
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-gray-100 hover:text-gray-900"
                        )}
                    >
                        {React.cloneElement(item.icon, { className: "h-5 w-5" })}
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
            <div className="p-4 border-t">
                <div className="flex items-center gap-3">
                     <Avatar className="h-10 w-10">
                        <AvatarImage src={user?.user_metadata.avatar_url ?? ""} alt={user?.user_metadata.full_name ?? ""} />
                        <AvatarFallback>{user?.email?.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 truncate">
                        <p className="font-semibold text-sm text-gray-800 truncate">{user?.user_metadata.full_name || user?.email}</p>
                        <p className="text-xs text-gray-500 truncate">Logged In</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={handleLogout} className="text-gray-500 hover:text-red-500 hover:bg-red-50">
                        <LogOut className="h-5 w-5" />
                      </Button>
                </div>
            </div>
      </aside>
    )
}


export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Success!",
        description: "You have successfully logged out.",
      });
      router.push("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };


  return (
    <RequireAuth>
      <div className="flex min-h-[100dvh] flex-col bg-gray-50">
        <Header />
        <main className="flex-1 pt-24 md:pt-32">
          <div className="container py-12">
            <div className="md:hidden mb-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <PanelLeft className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pt-12 w-72 bg-gray-50/80 backdrop-blur-sm">
                        <div className="p-4 flex flex-col items-center text-center">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src={user?.user_metadata.avatar_url ?? ""} alt={user?.user_metadata.full_name ?? ""} />
                                <AvatarFallback>{user?.email?.charAt(0).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <h3 className="mt-4 font-bold font-headline">{user?.user_metadata.full_name || user?.email}</h3>
                        </div>
                        <nav className="grid gap-2 p-4">
                            {navItems.map((item) => (
                                <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-base",
                                    pathname === item.href
                                    ? "bg-primary text-primary-foreground font-semibold"
                                    : "text-muted-foreground hover:bg-gray-200 hover:text-foreground"
                                )}
                                >
                                {React.cloneElement(item.icon, { className: "h-5 w-5" })}
                                {item.label}
                                </Link>
                            ))}
                        </nav>
                        <div className="p-4 mt-auto">
                           <Button variant="ghost" className="w-full justify-start gap-3" onClick={handleLogout}>
                                <LogOut className="h-5 w-5" />
                                Log Out
                           </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="bg-white rounded-xl border flex">
                <SidebarNav />
                <div className="flex-1 p-6 md:p-8">
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
