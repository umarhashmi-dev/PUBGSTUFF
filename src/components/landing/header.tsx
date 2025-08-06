"use client"
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Logo } from "../logo";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/courses" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Courses
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                 <NavigationMenuItem>
                  <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/about"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              About Us
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Learn more about our company, mission, and values.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/contact" title="Contact Us">
                        Get in touch with our team for support or inquiries.
                      </ListItem>
                      <ListItem href="/policies/privacy-policy" title="Privacy Policy">
                         Understand how we handle your personal data.
                      </ListItem>
                       <ListItem href="/policies/terms-of-use" title="Terms of Use">
                        Read the terms and conditions of using our site.
                      </ListItem>
                    </ul>
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
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
