
'use client';

import React, { useState } from 'react';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Star, Check, Minus, Plus, ShoppingCart, Heart } from 'lucide-react';
import Image from 'next/image';
import { useCurrency } from '@/hooks/use-currency';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const images = [
    { id: 1, src: 'https://i.postimg.cc/0QQKJN90/Vnhax-Frozen-Key.webp', alt: 'Main product image', aiHint: 'gaming character cinematic' },
    { id: 2, src: 'https://picsum.photos/1000/1000', alt: 'Product feature view', aiHint: 'gaming action screenshot' },
    { id: 3, src: 'https://picsum.photos/1000/1000', alt: 'Product in-game', aiHint: 'futuristic weapon' },
    { id: 4, src: 'https://picsum.photos/1000/1000', alt: 'Product details', aiHint: 'glowing abstract' },
];

const relatedProducts = [
    {
        name: "Redeye Month Key",
        price: 30,
        imageUrl: "https://picsum.photos/600/600",
        aiHint: "abstract red",
        href: "#"
    },
    {
        name: "Anubis Month Key",
        price: 40,
        imageUrl: "https://picsum.photos/600/600",
        aiHint: "abstract gold",
        href: "#"
    },
    {
        name: "Vnhax Admin Key",
        price: 190,
        imageUrl: "https://picsum.photos/600/600",
        aiHint: "abstract blue",
        href: "#"
    }
]

export default function SingleProductPage() {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [quantity, setQuantity] = useState(1);
    const { formatPrice } = useCurrency();

    return (
        <div className="flex min-h-[100dvh] flex-col bg-white">
            <Header />
            <main className="flex-1 pt-24 md:pt-32">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Image Gallery */}
                        <div className="flex flex-col gap-4">
                            <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg border">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                    data-ai-hint={selectedImage.aiHint}
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {images.map((image) => (
                                    <button
                                        key={image.id}
                                        onClick={() => setSelectedImage(image)}
                                        className={`aspect-square relative rounded-lg overflow-hidden border-2 transition-all ${selectedImage.id === image.id ? 'border-primary ring-2 ring-primary/50' : 'border-gray-200 hover:border-primary/50'}`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={image.aiHint}
                                        />
                                        {selectedImage.id === image.id && <div className="absolute inset-0 bg-white/40"></div>}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-headline">VNHAX Frozen Key</h1>
                            
                            <div className="mt-4 flex items-center gap-4">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                </div>
                                <p className="text-sm text-gray-600">(4.9/5.0 from 13,000+ ratings)</p>
                            </div>

                            <div className="mt-6">
                                <span className="text-4xl font-bold text-gray-900">{formatPrice(5)}</span>
                                <span className="text-lg text-gray-500 ml-2">/ Day</span>
                            </div>

                            <div className="mt-6 prose prose-sm text-gray-700">
                                <p>100% Safe & Secure Special Kill Effects Best Recoil Control ESP, Skins & Aimbot Integrated emulator bypass</p>
                            </div>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex items-center border border-gray-200 rounded-lg">
                                    <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus className="w-4 h-4" /></Button>
                                    <span className="w-12 text-center font-semibold">{quantity}</span>
                                    <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)}><Plus className="w-4 h-4" /></Button>
                                </div>
                                <Button size="lg" className="flex-1 hover-shimmer-button"><ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart</Button>
                                <Button size="lg" variant="outline" className="hover-shimmer-button"><Heart className="w-5 h-5" /></Button>
                            </div>
                            
                            <div className="mt-8 border-t pt-6">
                                <Accordion type="single" collapsible defaultValue="description">
                                    <AccordionItem value="description">
                                        <AccordionTrigger className="text-lg font-semibold">Product Description</AccordionTrigger>
                                        <AccordionContent className="prose prose-sm max-w-none text-gray-600">
                                            <p>VNHAX Frozen Key is a premium PUBG Mobile booster and ESP tool designed for players who want to gain a professional advantage in every match. With more than 13,000 satisfied users and a 4.9 rating, this product is proven to be safe, secure, and effective.</p>
                                            <p>Buy VNHAX Frozen Key, the most trusted PUBG Mobile VIP booster with ESP, Aimbot, recoil control, skins, and Antiban protection. Safe for main accounts and rated 4.9 by 13k+ satisfied gamers.</p>
                                            <p>Built with advanced Antiban protection, VNHAX ensures your main account stays safe while you enjoy features like Wall ESP, Loot ESP, Aimbot, Magic options, special kill effects, and recoil control. It also comes with an integrated emulator bypass for smooth performance on PC.</p>
                                            <p>Whether you want to spot enemies faster, improve shooting precision, or customize your gameplay with skins and kill messages, VNHAX Frozen Key delivers it all. This is the ultimate solution for PUBG Mobile players who want a reliable, secure, and long-term booster.</p>
                                            
                                            <h3 className="font-headline font-bold mt-4">Key Features:</h3>
                                            <ul className="list-disc pl-5">
                                                <li><strong>100% Safe & Secure</strong> – Advanced Antiban technology keeps your PUBG Mobile main account safe.</li>
                                                <li><strong>Booster & ESP</strong> – Includes Wall ESP and Loot ESP to detect enemies and items easily.</li>
                                                <li><strong>Aimbot & Magic</strong> – Improve accuracy and dominate gunfights.</li>
                                                <li><strong>Special Kill Effects</strong> – Unique kill messages and animations.</li>
                                                <li><strong>Best Recoil Control</strong> – Shoot with unmatched stability.</li>
                                                <li><strong>Integrated Emulator Bypass</strong> – Optimized for smooth PC gameplay.</li>
                                                <li><strong>Trusted Worldwide</strong> – Over 13,000 gamers rated it 4.9/5.</li>
                                            </ul>

                                            <h3 className="font-headline font-bold mt-4">Why Choose VNHAX Frozen Key?</h3>
                                            <p>Unlike ordinary cheats or hacks, VNHAX Frozen Key is a professional PUBG Mobile booster built with long-term account safety in mind. It combines powerful features like ESP, Aimbot, recoil control, and skins with a guaranteed Antiban system. For serious players who want to stay safe while improving their gameplay, this is the best choice.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                     {/* Related Products */}
                    <div className="mt-16 md:mt-24">
                        <h2 className="text-3xl font-extrabold text-center text-gray-900 font-headline mb-8">You Might Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedProducts.map((product) => (
                                <Link href={product.href} key={product.name}>
                                    <Card className="group overflow-hidden rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300">
                                        <div className="aspect-square relative">
                                            <Image
                                                src={product.imageUrl}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                data-ai-hint={product.aiHint}
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold font-headline text-gray-800 group-hover:text-primary transition-colors">{product.name}</h3>
                                            <p className="mt-2 font-bold text-lg text-gray-900">{formatPrice(product.price)}</p>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
