
'use client';
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
                            Vnhax VIP - Bypass
                        </TextAnimate>
                        <p className="mt-6 text-lg max-w-2xl mx-auto leading-8 text-muted-foreground">
                            VNHAX VIP provides exclusive features for advanced gameplay, offering top-tier security, enhanced performance, and priority support for a premium gaming experience.
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

        <section id="products-grid" className="container pb-16 md:pb-24 -mt-12">
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
