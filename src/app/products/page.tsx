
'use client';
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Gem, Shield, Wand2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
    {
        title: "Glacier M416 Skin",
        description: "A legendary ice-themed skin for the M416. A must-have for serious collectors.",
        price: "$29.99",
        icon: <Gem className="w-8 h-8 text-primary" />,
        imageUrl: "https://picsum.photos/600/400",
        aiHint: "ice shards abstract",
    },
    {
        title: "Golden Pharaoh X-Suit",
        description: "Unlock the ultimate ancient power with this exclusive and majestic X-Suit.",
        price: "$99.99",
        icon: <Shield className="w-8 h-8 text-primary" />,
        imageUrl: "https://picsum.photos/600/400",
        aiHint: "gold pharaoh",
    },
    {
        title: "UC (Unknown Cash)",
        description: "Get in-game currency to purchase crates, skins, and other exclusive items.",
        price: "From $4.99",
        icon: <ShoppingCart className="w-8 h-8 text-primary" />,
        imageUrl: "https://picsum.photos/600/400",
        aiHint: "digital currency",
    },
    {
        title: "Driver Booster Pro",
        description: "Enhance your gaming performance by automatically updating your system drivers.",
        price: "$19.99/year",
        icon: <Wand2 className="w-8 h-8 text-primary" />,
        imageUrl: "https://picsum.photos/600/400",
        aiHint: "computer hardware",
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
                            Elevate Your Digital Experience
                        </TextAnimate>
                        <p className="mt-6 text-lg max-w-2xl mx-auto leading-8 text-muted-foreground">
                            Browse our curated collection of premium digital goods, from exclusive in-game items to powerful software solutions designed to give you the edge.
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

        {/* CAT Section (Products Grid) */}
        <section id="products-grid" className="container pb-16 md:pb-24 -mt-12">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card hover:bg-card/90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border-border/10 text-left h-full flex flex-col group overflow-hidden">
                    <div className="relative aspect-video">
                         <Image 
                            src={product.imageUrl}
                            alt={product.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={product.aiHint}
                        />
                    </div>
                    <CardHeader className="p-6">
                        <div className="flex items-center gap-4">
                             <div className="p-3 bg-primary/10 rounded-lg w-fit">
                                {product.icon}
                            </div>
                             <CardTitle className="text-xl font-headline flex-1">{product.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-1">
                      <p className="text-muted-foreground">{product.description}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex items-center justify-between">
                        <p className="text-lg font-bold font-headline">{product.price}</p>
                        <Button asChild className="hover-shimmer-button">
                            <Link href="#">Buy Now</Link>
                        </Button>
                    </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
