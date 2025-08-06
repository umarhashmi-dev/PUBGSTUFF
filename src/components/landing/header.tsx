
"use client"
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "../logo";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { BookOpen, Palette, Code, Film, ShoppingCart, DollarSign, Bot, Search, Wind, Tv, Briefcase, LayoutTemplate, School, PencilRuler, Paintbrush, Plane, Video, Tv2, Cable, Repeat, Lightbulb, BrainCircuit, BarChart, Settings, Users, GitBranch, Waypoints, Workflow, Layers, Component, Box, Package, ShoppingBag, Truck, HeartHandshake, FileText, Shield, FileQuestion, Info, LifeBuoy, LogOut } from 'lucide-react';
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

const accountLinks = [
  {
    title: "My Account",
    href: "/my-account",
    description: "View your account details and manage your settings.",
  },
  {
    title: "Orders",
    href: "/my-account/orders",
    description: "Check the status of your recent orders.",
  },
  {
    title: "Downloads",
    href: "/my-account/downloads",
    description: "Access your downloadable products.",
  },
  {
    title: "Account Details",
    href: "/my-account/account-details",
    description: "Update your account information.",
  }
];

const pageLinks = [
    {
        title: "About Us",
        href: "/about",
        description: "Learn more about our company, mission, and values.",
    },
    {
        title: "Contact Us",
        href: "/contact",
        description: "Get in touch with our team for support or inquiries.",
    }
]

const policyLinks = [
    {
        title: "Terms of Use",
        href: "/policies/terms-of-use",
        description: "Read the terms and conditions of using our site.",
    },
    {
        title: "Privacy Policy",
        href: "/policies/privacy-policy",
        description: "Understand how we handle your personal data.",
    },
    {
        title: "Refund Policy",
        href: "/policies/refund-policy",
        description: "Learn about our policy on refunds and returns.",
    },
     {
        title: "User Agreement",
        href: "/policies/user-agreement",
        description: "Read our user agreement.",
    },
    {
        title: "Disclaimer",
        href: "/policies/disclaimer",
        description: "Read our disclaimer.",
    },
    {
        title: "Cookies Policy",
        href: "/policies/cookies-policy",
        description: "Learn about our use of cookies.",
    },
    {
        title: "Shipping Policy",
        href: "/policies/shipping-policy",
        description: "Learn about our shipping policy.",
    },
]

const courseLinks = [
  {
    title: 'CSS',
    href: '/courses/css',
    icon: <Palette className="h-5 w-5" />,
    description: 'Master the art of styling web pages.',
  },
  {
    title: 'HTML',
    href: '/courses/html',
    icon: <Code className="h-5 w-5" />,
    description: 'Learn the fundamental structure of the web.',
  },
  {
    title: 'Gen AI',
    href: '/courses/gen-ai',
    icon: <Bot className="h-5 w-5" />,
    description: 'Explore the world of generative AI.',
  },
  {
    title: 'TikTok',
    href: '/courses/tiktok',
    icon: <Film className="h-5 w-5" />,
    description: 'Create engaging short-form video content.',
  },
  {
    title: 'Shopify',
    href: '/courses/shopify',
    icon: <ShoppingCart className="h-5 w-5" />,
    description: 'Build your own e-commerce empire.',
  },
  {
    title: 'AI Money',
    href: '/courses/ai-money',
    icon: <DollarSign className="h-5 w-5" />,
    description: 'Monetize your AI skills and projects.',
  },
  {
    title: 'AI Coding',
    href: '/courses/ai-coding',
    icon: <Bot className="h-5 w-5" />,
    description: 'Leverage AI to accelerate your coding.',
  },
  {
    title: 'Deepseek',
    href: '/courses/deepseek',
    icon: <Search className="h-5 w-5" />,
    description: 'Advanced search and data analysis.',
  },
  {
    title: 'JavaScript',
    href: '/courses/javascript',
    icon: <Code className="h-5 w-5" />,
    description: 'Bring interactivity to your websites.',
  },
  {
    title: 'After Effects',
    href: '/courses/after-effects',
    icon: <Film className="h-5 w-5" />,
    description: 'Create stunning motion graphics.',
  },
  {
    title: 'Premiere Pro',
    href: '/courses/premiere-pro',
    icon: <Tv className="h-5 w-5" />,
    description: 'Professional video editing mastery.',
  },
];

export default function Header() {
  const [expanded, setExpanded] = React.useState(false);
  const { user, loading: authLoading } = useAuth();
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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="relative flex items-center justify-between h-16 bg-white/80 backdrop-blur-sm rounded-2xl px-6 border">
        
        <div className="flex items-center">
            <Logo />
        </div>

        <div className="hidden md:flex items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
               <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-700 hover:bg-gray-100 focus:bg-gray-100")}>
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:bg-gray-100 data-[state=open]:bg-gray-100 focus:bg-gray-100">Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 lg:w-[800px] lg:grid-cols-2 bg-white">
                      {courseLinks.map((course) => (
                         <ListItem
                          key={course.title}
                          title={course.title}
                          href={course.href}
                          icon={course.icon}
                          className="text-gray-700"
                        >
                          {course.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>
               <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:bg-gray-100 data-[state=open]:bg-gray-100 focus:bg-gray-100">Pages</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-[1fr_2fr] gap-4 p-4 bg-white">
                      <div className="relative">
                        <NavigationMenuLink asChild>
                            <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                                href="/my-account"
                            >
                              <Image 
                                src="https://exeyxlrneqxfsxjprrdu.supabase.co/storage/v1/object/public/assets/BUY%20ACCOUNTS_11zon.png" 
                                alt="Header promotion" 
                                layout="fill" 
                                className="object-cover w-full h-full rounded-md"
                                data-ai-hint="gaming items abstract" 
                              />
                            </Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="flex flex-col">
                        <ul className="flex flex-col gap-3">
                            {pageLinks.map((component) => (
                                <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                                className="text-gray-700"
                                >
                                {component.description}
                                </ListItem>
                            ))}

                        </ul>
                        <div className="mt-4">
                            <h3 className="font-medium text-sm text-gray-900 px-3">Policies</h3>
                            <ul className="grid grid-cols-2 gap-2 mt-2">
                               {policyLinks.slice(0, 4).map((component) => (
                                    <ListItem key={component.title} title={component.title} href={component.href} className="text-xs text-gray-700" />
                                ))}
                            </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex md:hidden">
          <button type="button" className="text-gray-700" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
            {!expanded ? (
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center justify-end gap-4">
          <NavigationMenu>
              <NavigationMenuList>
                {user && (
                  <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:bg-gray-100 data-[state=open]:bg-gray-100 focus:bg-gray-100">My Account</NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ul className="grid w-auto gap-3 p-4 bg-white">
                      {accountLinks.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          className="text-gray-700"
                        >
                          {component.description}
                        </ListItem>
                      ))}
                      <ListItem
                          onClick={handleLogout}
                          title="Logout"
                          icon={<LogOut className="h-4 w-4" />}
                           className="text-gray-700"
                        >
                          Log out of your account.
                        </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                )}
              </NavigationMenuList>
          </NavigationMenu>
          {!authLoading && !user && (
            <>
              <Button asChild variant="ghost" className="text-gray-700 hover:bg-gray-100">
                <Link href="/login" prefetch={false}>Login</Link>
              </Button>
              <Button asChild className="bg-black text-white hover:bg-gray-800 rounded-lg">
                <Link href="/signup" prefetch={false}>Sign up</Link>
              </Button>
            </>
          )}
          {!authLoading && user && (
             <Avatar>
                <AvatarImage src={user.user_metadata.avatar_url ?? ""} alt={user.user_metadata.full_name ?? ""} />
                <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
          )}
        </div>

      </div>
      {expanded && (
        <nav className="bg-white/80 backdrop-blur-sm rounded-2xl mt-2 p-4 border">
          <div className="grid gap-y-2">
            <Link
                href="/"
                onClick={() => setExpanded(false)}
                title="Home"
                className="flex items-center p-3 text-base font-medium transition-all duration-200 rounded-md hover:bg-gray-100 text-gray-700"
              >
                Home
            </Link>
            <Link
                href="/courses"
                onClick={() => setExpanded(false)}
                title="Courses"
                className="flex items-center p-3 text-base font-medium transition-all duration-200 rounded-md hover:bg-gray-100 text-gray-700"
              >
                Courses
            </Link>
             <Link
                href="/about"
                onClick={() => setExpanded(false)}
                title="About Us"
                className="flex items-center p-3 text-base font-medium transition-all duration-200 rounded-md hover:bg-gray-100 text-gray-700"
              >
                About Us
            </Link>
             <Link
                href="/contact"
                onClick={() => setExpanded(false)}
                title="Contact Us"
                className="flex items-center p-3 text-base font-medium transition-all duration-200 rounded-md hover:bg-gray-100 text-gray-700"
              >
                Contact Us
            </Link>
            {!authLoading && user ? (
              <>
                <Link
                  href="/my-account"
                  onClick={() => setExpanded(false)}
                  title="My Account"
                  className="flex items-center p-3 text-base font-medium transition-all duration-200 rounded-md hover:bg-gray-100 text-gray-700"
                >
                  My Account
                </Link>
                <Button onClick={() => { handleLogout(); setExpanded(false); }} className="bg-black text-white hover:bg-gray-800 w-full mt-2">Logout</Button>
              </>
            ) : (
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                 <Button asChild variant="ghost" className="w-full text-gray-700 hover:bg-gray-100">
                    <Link href="/login" onClick={() => setExpanded(false)} prefetch={false}>Login</Link>
                 </Button>
                 <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                  <Link href="/signup" onClick={() => setExpanded(false)} prefetch={false}>Sign up</Link>
                </Button>
              </div>
            )}

          </div>
        </nav>
      )}
    </header>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && (
                <div className="p-2 bg-gray-100 rounded-lg shadow-inner text-gray-900">
                    {icon}
                </div>
            )}
            <div className="text-sm font-medium leading-none text-gray-900">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem"
