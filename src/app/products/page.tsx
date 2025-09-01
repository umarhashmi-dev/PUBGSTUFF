
'use client';
import React from "react";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Monitor, Smartphone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PinContainer } from "@/components/ui/3d-pin";

const products = [
    {
        name: "Vnhax Frozen Key",
        price: "5",
        priceSuffix: "/ Day",
        description: "Boost PUBG Gameplay | Safe & Secure for Top Ranks",
        badge: null,
        buttonVariant: "default",
        buttonText: "Buy Now",
        features: [
            "100% Safe & Secure",
            "Special Kill Effects",
            "ESP, Skins & Aimbot",
            "Integrated Emulator Bypass",
            "24/7 Dedicated Support",
        ],
    },
    {
        name: "Vnhax Week Key",
        price: "15",
        priceSuffix: "/ Week",
        description: "Boost PUBG Gameplay | Safe & Secure for Top Ranks",
        badge: null,
        buttonVariant: "default",
        buttonText: "Buy Now",
        features: [
            "100% Safe & Secure",
            "Special Kill Effects",
            "ESP, Skins & Aimbot",
            "Integrated Emulator Bypass",
            "24/7 Dedicated Support",
        ],
    },
    {
        name: "Vnhax Month Key",
        price: "30",
        priceSuffix: "/ Month",
        description: "Boost PUBG Gameplay | Safe & Secure for Top Ranks",
        badge: "POPULAR!",
        buttonVariant: "gradient",
        buttonText: "Buy Now",
        features: [
            "100% Safe & Secure",
            "Special Kill Effects",
            "ESP, Skins & Aimbot",
            "Integrated Emulator Bypass",
            "24/7 Dedicated Support",
        ],
    },
    {
        name: "Vnhax Admin Key",
        price: "190",
        priceSuffix: "/ Lifetime",
        description: "Boost PUBG Gameplay | Safe & Secure for Top Ranks",
        badge: "10% Discount",
        buttonVariant: "default",
        buttonText: "Buy Now",
        features: [
            "100% Safe & Secure",
            "Special Kill Effects",
            "ESP, Skins & Aimbot",
            "Integrated Emulator Bypass",
            "24/7 Dedicated Support",
        ],
    }
];

const categoryCards = [
    {
        title: "PC Products",
        description: "Explore our range of products for PC.",
        href: "/products/pc",
        icon: <Monitor className="w-8 h-8 text-primary" />,
    },
    {
        title: "iOS Products",
        description: "Discover exclusive tools for iOS devices.",
        href: "/products/ios",
        icon: <Smartphone className="w-8 h-8 text-primary" />,
    },
    {
        title: "Android Products",
        description: "Enhance your Android experience with our apps.",
        href: "/products/android",
        icon: <Smartphone className="w-8 h-8 text-primary" />,
    }
];

export default function ProductsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex flex-col items-center text-center">
                            <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-primary/10 text-primary mb-4">
                                OUR DIGITAL PRODUCTS
                            </span>
                            <TextAnimate
                                as="h1"
                                animation={{
                                hidden: { opacity: 0, filter: "blur(4px)" },
                                show: { opacity: 1, filter: "blur(0px)" },
                                }}
                                className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl font-headline"
                            >
                                Choose the Right Plan for You
                            </TextAnimate>
                        </div>
                        <p className="mt-6 text-lg max-w-2xl mx-auto leading-8 text-muted-foreground">
                            Discover our range of premium digital services and keys. Select the plan that suits your needs best and get started instantly with secure and reliable solutions.
                        </p>
                        <div className="mt-10">
                            <Button size="lg" asChild className="hover-shimmer-button">
                                <Link href="#products-grid">Explore Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        
        <section className="container pb-16 md:pb-24 -mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-20 max-w-5xl mx-auto">
                {categoryCards.map((card, i) => (
                    <PinContainer key={i} title={card.href} href={card.href}>
                        <div className="flex basis-full flex-col p-4 tracking-tight text-card-foreground sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <div className="flex justify-center items-center h-24 text-white">
                                {React.cloneElement(card.icon, {className: "w-8 h-8"})}
                            </div>
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-center text-white">
                                {card.title}
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal text-center">
                                <span className="text-slate-400">
                                    {card.description}
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        </div>
                    </PinContainer>
                ))}
            </div>
        </section>

        <section id="products-grid" className="container pb-16 md:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch max-w-7xl mx-auto">
                {products.map((product) => (
                    <div key={product.name} className="glowing-card">
                    <Card className={cn(
                        "flex flex-col rounded-2xl shadow-lg transition-all duration-300 text-left group h-full",
                        product.badge && "relative"
                        )}>
                        {product.badge && (
                        <div className="absolute top-0 right-6 -translate-y-1/2 z-10">
                            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                                <Shield className="h-4 w-4" />
                                {product.badge}
                            </div>
                        </div>
                        )}

                        <div className="flex flex-col flex-grow">
                        <CardHeader className={cn("p-6 rounded-t-2xl", product.name.includes('Month') ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10' : 'bg-card')}>
                            <h3 className="text-xl font-bold font-headline">{product.name.replace(' (POPULAR!)', '').replace(' (10% Discount)','')}</h3>
                            <div className="flex items-baseline gap-2 pt-2">
                                <span className="text-4xl font-extrabold tracking-tight">${product.price}</span>
                                <span className="text-sm text-muted-foreground">{product.priceSuffix}</span>
                            </div>
                            <p className="text-sm text-muted-foreground pt-2">{product.description}</p>
                        </CardHeader>
                        <CardContent className="p-6 flex-1">
                            <ul className="space-y-3 text-left">
                            {product.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-white rounded-full bg-black p-1 shrink-0 mt-0.5" />
                                <span className="text-foreground text-sm sm:text-base">{feature}</span>
                                </li>
                            ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="p-6 mt-auto">
                           <Button asChild size="lg" className={cn("w-full text-base rounded-full hover-shimmer-button", product.buttonVariant === 'gradient' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow' : 'bg-primary text-primary-foreground')}>
                                <Link href="#">
                                    <span>{product.buttonText}</span>
                                </Link>
                            </Button>
                        </CardFooter>
                        </div>
                    </Card>
                    </div>
                ))}
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
