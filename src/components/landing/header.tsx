"use client"
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "../logo";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { BookOpen, Palette, Code, Film, ShoppingCart, DollarSign, Bot, Search, Wind, Tv, Briefcase, LayoutTemplate, School } from 'lucide-react';

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
  {
    title: 'Dropshipping',
    href: '/courses/dropshipping',
    icon: <ShoppingCart className="h-5 w-5" />,
    description: 'Launch an online store without inventory.',
  },
  {
    title: 'Online Business',
    href: '/courses/online-business',
    icon: <Briefcase className="h-5 w-5" />,
    description: 'Start and grow your digital business.',
  },
  {
    title: 'Web Animations',
    href: '/courses/web-animations',
    icon: <Wind className="h-5 w-5" />,
    description: 'Animate your web creations.',
  },
  {
    title: 'Web Development',
    href: '/courses/web-development',
    icon: <LayoutTemplate className="h-5 w-5" />,
    description: 'Become a full-stack web developer.',
  },
  {
    title: 'Premiere',
    href: '/courses/premiere',
    icon: <School className="h-5 w-5" />,
    description: 'Beginner-friendly video editing.',
  },
];

export default function Header() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <header className="relative z-10 py-4 md:py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="flex md:hidden">
            <button type="button" className="text-gray-900" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
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

          <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
            <NavigationMenu>
              <NavigationMenuList>
                 <NavigationMenuItem>
                  <Link href="/" passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                        {courseLinks.map((course) => (
                          <ListItem
                            key={course.title}
                            title={course.title}
                            href={course.href}
                            icon={course.icon}
                          >
                            {course.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                 <NavigationMenuItem>
                  <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                   <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-[1fr_2fr] gap-4 p-4">
                      <div>
                        <NavigationMenuLink asChild>
                            <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/about"
                            >
                                <div className="mb-2 mt-4 text-lg font-medium">
                                Textify AI
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                Your one-stop shop for digital gaming products.
                                </p>
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
                                >
                                {component.description}
                                </ListItem>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <h3 className="font-medium text-sm text-foreground px-3">Policies</h3>
                            <ul className="grid grid-cols-2 gap-2 mt-2">
                               {policyLinks.slice(0, 4).map((component) => (
                                    <ListItem key={component.title} title={component.title} href={component.href} className="text-xs" />
                                ))}
                            </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>My Account</NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {accountLinks.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex">
            <Button asChild>
              <Link href="/products">Get Started</Link>
            </Button>
          </div>
        </div>
        {expanded && (
          <nav>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">
                <Link
                    href="/"
                    onClick={() => setExpanded(false)}
                    title="Home"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Home
                </Link>
                <Link
                    href="/courses"
                    onClick={() => setExpanded(false)}
                    title="Courses"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Courses
                </Link>
                 <Link
                    href="/about"
                    onClick={() => setExpanded(false)}
                    title="About Us"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    About Us
                </Link>
                 <Link
                    href="/contact"
                    onClick={() => setExpanded(false)}
                    title="Contact Us"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Contact Us
                </Link>
                 <Link
                    href="/my-account"
                    onClick={() => setExpanded(false)}
                    title="My Account"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    My Account
                </Link>
                <Button asChild>
                  <Link href="/products">Get Started</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <div className="text-accent-foreground/80">{icon}</div>}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem"
