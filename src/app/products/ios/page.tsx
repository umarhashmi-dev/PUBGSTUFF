
"use client";
import React from "react";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ShimmeringText } from "@/components/ui/shimmering-text";

const vnhaxProducts = [
    {
        name: "Vnhax iOS Key",
        price: "5",
        priceSuffix: "/ Day",
        description: "Premium keys with safe and secure gameplay features for iOS users.",
        buttonVariant: "default",
        buttonText: "Buy Now",
        features: [
            "100% Safe & Secure",
            "Special Kill Effects",
            "Best Recoil Control",
            "ESP, Skins & Aimbot",
            "Integrated Emulator Bypass",
        ],
    },
    {
        name: "Vnhax iOS Key",
        price: "15",
        priceSuffix: "/ Week",
        description: "Premium keys with safe and secure gameplay features for iOS users.",
        buttonVariant: "default",
        buttonText: "Buy Now",
        features: [
            "100% Safe & Secure",
            "Special Kill Effects",
            "Best Recoil Control",
            "ESP, Skins & Aimbot",
            "Integrated Emulator Bypass",
        ],
    },
    {
        name: "Vnhax iOS Key",
        price: "30",
        priceSuffix: "/ Month",
        badge: "POPULAR!",
        description: "Premium keys with safe and secure gameplay features for iOS users.",
        buttonVariant: "gradient",
        buttonText: "Buy Now",
        features: [
            "100% Safe & Secure",
            "Special Kill Effects",
            "Best Recoil Control",
            "ESP, Skins & Aimbot",
            "Integrated Emulator Bypass",
        ],
    },
];

const starProducts = [
    {
        name: "Star iOS Key",
        price: "5",
        priceSuffix: "/ Day",
        description: "Enhance your gameplay with reliable ESP and aimbot solutions.",
        buttonVariant: "default",
        buttonText: "Buy Now",
        features: [
            "Players, Bots & Airdrop ESP",
            "HWID Spoofer & Emulator Bypass",
            "Aimbot & Recoil Control",
            "Radar & Item Visuals",
            "24/7 Dedicated Support",
        ],
    },
    {
        name: "Star iOS Key",
        price: "15",
        priceSuffix: "/ Week",
        description: "Enhance your gameplay with reliable ESP and aimbot solutions.",
        buttonVariant: "default",
        buttonText: "Buy Now",
        features: [
            "Players, Bots & Airdrop ESP",
            "HWID Spoofer & Emulator Bypass",
            "Aimbot & Recoil Control",
            "Radar & Item Visuals",
            "24/7 Dedicated Support",
        ],
    },
    {
        name: "Star iOS Key",
        price: "30",
        priceSuffix: "/ Month",
        badge: "POPULAR!",
        description: "Enhance your gameplay with reliable ESP and aimbot solutions.",
        buttonVariant: "gradient",
        buttonText: "Buy Now",
        features: [
            "Players, Bots & Airdrop ESP",
            "HWID Spoofer & Emulator Bypass",
            "Aimbot & Recoil Control",
            "Radar & Item Visuals",
            "24/7 Dedicated Support",
        ],
    }
];

const tornadoProducts = [
    {
        name: "Tornado iOS Key",
        price: "17",
        priceSuffix: "/ Week",
        description: "Advanced silent aimbot and FOV controls designed for maximum performance.",
        buttonVariant: "default",
        buttonText: "Buy Now",
        features: [
            "Silent Aimbot",
            "Aimbot FOV Value",
            "Draw FOV as Circle",
            "Show Current Aim Position",
            "Skip Knocked Enemies",
            "Draw Line to Target Bone",
        ],
    },
    {
        name: "Tornado iOS Key",
        price: "35",
        priceSuffix: "/ Month",
        badge: "POPULAR!",
        description: "Advanced silent aimbot and FOV controls designed for maximum performance.",
        buttonVariant: "gradient",
        buttonText: "Buy Now",
        features: [
            "Silent Aimbot",
            "Aimbot FOV Value",
            "Draw FOV as Circle",
            "Show Current Aim Position",
            "Skip Knocked Enemies",
            "Draw Line to Target Bone",
        ],
    },
]

export default function IosProductsPage() {
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
                                IOS PRODUCTS
                            </span>
                            <TextAnimate
                                as="h1"
                                animation={{
                                hidden: { opacity: 0, filter: "blur(4px)" },
                                show: { opacity: 1, filter: "blur(0px)" },
                                }}
                                className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl font-headline"
                            >
                                iOS Gaming Products
                            </TextAnimate>
                        </div>
                        <p className="mt-6 text-lg max-w-2xl mx-auto leading-8 text-muted-foreground">
                            Explore our exclusive range of iOS keys designed to deliver smooth, secure, and enhanced PUBG gameplay. Choose the plan that fits your needs and unlock premium features with ease.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>

        <section id="vnhax-products" className="container pb-16 md:pb-24 -mt-12">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl font-headline">Vnhax iOS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
                {vnhaxProducts.map((product) => (
                    <div key={product.name + product.price} className="glowing-card">
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
                        <CardHeader className={cn("p-6 rounded-t-2xl", product.buttonVariant === 'gradient' ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10' : 'bg-card')}>
                            <h3 className="text-xl font-bold font-headline">{product.name}</h3>
                            <div className="flex items-baseline gap-2 pt-2">
                                <div className="text-4xl font-extrabold tracking-tight">
                                    <span className="group-hover:hidden">${product.price}</span>
                                    <div className="hidden group-hover:block">
                                        <ShimmeringText text={`$${product.price}`} duration={2} />
                                    </div>
                                </div>
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

        <section id="star-products" className="container pb-16 md:pb-24">
             <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl font-headline">Star iOS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
                {starProducts.map((product) => (
                    <div key={product.name + product.price} className="glowing-card">
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
                        <CardHeader className={cn("p-6 rounded-t-2xl", product.buttonVariant === 'gradient' ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10' : 'bg-card')}>
                            <h3 className="text-xl font-bold font-headline">{product.name}</h3>
                             <div className="flex items-baseline gap-2 pt-2">
                                <div className="text-4xl font-extrabold tracking-tight">
                                    <span className="group-hover:hidden">${product.price}</span>
                                    <div className="hidden group-hover:block">
                                        <ShimmeringText text={`$${product.price}`} duration={2} />
                                    </div>
                                </div>
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

        <section id="tornado-products" className="container pb-16 md:pb-24">
             <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl font-headline">Tornado iOS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-3xl mx-auto">
                {tornadoProducts.map((product) => (
                    <div key={product.name + product.price} className="glowing-card">
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
                        <CardHeader className={cn("p-6 rounded-t-2xl", product.buttonVariant === 'gradient' ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10' : 'bg-card')}>
                            <h3 className="text-xl font-bold font-headline">{product.name}</h3>
                             <div className="flex items-baseline gap-2 pt-2">
                                <div className="text-4xl font-extrabold tracking-tight">
                                    <span className="group-hover:hidden">${product.price}</span>
                                    <div className="hidden group-hover:block">
                                        <ShimmeringText text={`$${product.price}`} duration={2} />
                                    </div>
                                </div>
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
