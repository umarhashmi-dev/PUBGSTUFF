
'use client';

import React, { useState } from 'react';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Star, Check, Minus, Plus, ShoppingCart, Heart, RefreshCw, ChevronLeft, ChevronRight, Share, Info, Maximize, Pencil, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useCurrency } from '@/hooks/use-currency';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { RadioGroupCards, RadioCard } from '@/components/ui/radio-group-cards';
import { Separator } from '@/components/ui/separator';

const images = [
    { id: 1, src: 'https://i.postimg.cc/0QQKJN90/Vnhax-Frozen-Key.webp', alt: 'Main product image', aiHint: 'gaming character cinematic' },
    { id: 2, src: 'https://picsum.photos/1000/1000?random=1', alt: 'Product feature view', aiHint: 'gaming action screenshot' },
    { id: 3, src: 'https://picsum.photos/1000/1000?random=2', alt: 'Product in-game', aiHint: 'futuristic weapon' },
    { id: 4, src: 'https://picsum.photos/1000/1000?random=3', alt: 'Product details', aiHint: 'glowing abstract' },
    { id: 5, src: 'https://picsum.photos/1000/1000?random=4', alt: 'Product usage', aiHint: 'gamer setup' },
];

const relatedProducts = [
    {
        name: "Redeye Month Key",
        price: 30,
        imageUrl: "https://picsum.photos/600/600?random=5",
        aiHint: "abstract red",
        href: "#"
    },
    {
        name: "Anubis Month Key",
        price: 40,
        imageUrl: "https://picsum.photos/600/600?random=6",
        aiHint: "abstract gold",
        href: "#"
    },
    {
        name: "Vnhax Admin Key",
        price: 190,
        imageUrl: "https://picsum.photos/600/600?random=7",
        aiHint: "abstract blue",
        href: "#"
    }
]

export default function SingleProductPage() {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [quantity, setQuantity] = useState(1);
    const { formatPrice } = useCurrency();
    const [currentThumbnailPage, setCurrentThumbnailPage] = useState(0);
    const thumbnailsPerPage = 4;
    const thumbnailPages = Math.ceil(images.length / thumbnailsPerPage);

    const nextThumbnails = () => {
        setCurrentThumbnailPage((prev) => (prev + 1) % thumbnailPages);
    };

    const prevThumbnails = () => {
        setCurrentThumbnailPage((prev) => (prev - 1 + thumbnailPages) % thumbnailPages);
    };

    const visibleThumbnails = images.slice(
        currentThumbnailPage * thumbnailsPerPage,
        (currentThumbnailPage + 1) * thumbnailsPerPage
    );


    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="flex-1 pt-24 md:pt-32">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[6fr,5fr] gap-8 md:gap-12">
                        {/* Image Gallery */}
                        <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200">
                             <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-sm text-gray-500">SKU: VN-FRZ-KEY-01</p>
                                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-headline mt-1">VNHAX Frozen Key</h1>
                                     <div className="mt-2 flex items-center gap-2">
                                        <div className="flex items-center gap-0.5 text-yellow-500">
                                            <Star className="w-5 h-5 fill-current" />
                                            <Star className="w-5 h-5 fill-current" />
                                            <Star className="w-5 h-5 fill-current" />
                                            <Star className="w-5 h-5 fill-current" />
                                            <Star className="w-5 h-5 fill-current" />
                                        </div>
                                        <p className="text-sm text-gray-600">(4.9/5.0 from 13,000+ ratings)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                     <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100"><Share className="w-5 h-5" /></Button>
                                     <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100"><Heart className="w-5 h-5" /></Button>
                                </div>
                            </div>

                            <div className="aspect-square relative rounded-xl overflow-hidden shadow-inner bg-gray-50">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    fill
                                    className="object-contain transition-transform duration-300"
                                    data-ai-hint={selectedImage.aiHint}
                                />
                                <Button variant="ghost" size="icon" className="absolute top-3 left-3 bg-white/50 backdrop-blur-sm hover:bg-white/80 text-gray-700">
                                    <Maximize className="w-5 h-5"/>
                                </Button>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <Button variant="outline" size="sm" className="bg-white"><RefreshCw className="w-4 h-4 mr-2"/> Reset</Button>
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" size="icon" onClick={prevThumbnails} className="h-8 w-8 bg-white"><ChevronLeft className="w-4 h-4"/></Button>
                                    <div className="grid grid-cols-4 gap-2">
                                        {visibleThumbnails.map((image) => (
                                            <button
                                                key={image.id}
                                                onClick={() => setSelectedImage(image)}
                                                className={`aspect-square w-16 relative rounded-md overflow-hidden border-2 transition-all ${selectedImage.id === image.id ? 'border-primary' : 'border-gray-200 hover:border-primary/50'}`}
                                            >
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover"
                                                    data-ai-hint={image.aiHint}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                    <Button variant="outline" size="icon" onClick={nextThumbnails} className="h-8 w-8 bg-white"><ChevronRight className="w-4 h-4"/></Button>
                                </div>
                            </div>
                        </div>

                        {/* Product Configuration */}
                        <div className="flex flex-col">
                           <div className="bg-white p-6 rounded-xl border border-gray-200 flex-1 flex flex-col justify-between">
                             <div>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                    <div className="flex justify-between items-center">
                                       <div>
                                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Choose Variant</p>
                                            <p className="font-semibold text-gray-800 mt-1">VNHAX Frozen Key</p>
                                       </div>
                                        <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100"><Pencil className="w-4 h-4" /></Button>
                                    </div>
                                </div>

                                <Accordion type="single" collapsible defaultValue="item-1" className="w-full mt-2">
                                    <AccordionItem value="item-1" className="border rounded-lg">
                                        <AccordionTrigger className="px-4 py-3 font-semibold hover:no-underline">Choose Options</AccordionTrigger>
                                        <AccordionContent className="px-4 pb-4">
                                           <div className="space-y-4">
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-600 mb-2">SUBSCRIPTION</h4>
                                                    <RadioGroupCards defaultValue="day">
                                                        <RadioCard value="day" label="1 Day Access" price={formatPrice(5)} />
                                                        <RadioCard value="week" label="1 Week Access" price={formatPrice(15)} />
                                                        <RadioCard value="month" label="1 Month Access" price={formatPrice(30)} />
                                                    </RadioGroupCards>
                                                </div>
                                                 <div className="flex items-center p-3 rounded-lg bg-blue-50 border border-blue-200">
                                                    <Info className="w-5 h-5 text-blue-600 mr-3 shrink-0"/>
                                                    <p className="text-xs text-blue-800">
                                                        This is a digital product. An activation key will be delivered to your email instantly after purchase.
                                                    </p>
                                                </div>
                                           </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="description" className="border rounded-lg mt-2">
                                        <AccordionTrigger className="px-4 py-3 font-semibold hover:no-underline">Description</AccordionTrigger>
                                        <AccordionContent className="px-4 pb-4 prose prose-sm max-w-none text-gray-600">
                                           <p>VNHAX Frozen Key is a premium PUBG Mobile booster and ESP tool designed for players who want to gain a professional advantage in every match. With more than 13,000 satisfied users and a 4.9 rating, this product is proven to be safe, secure, and effective.</p>
                                            <h3 className="font-headline font-bold mt-4">Key Features:</h3>
                                            <ul className="list-disc pl-5">
                                                <li><strong>100% Safe & Secure</strong> – Advanced Antiban technology keeps your PUBG Mobile main account safe.</li>
                                                <li><strong>Booster & ESP</strong> – Includes Wall ESP and Loot ESP to detect enemies and items easily.</li>
                                                <li><strong>Aimbot & Magic</strong> – Improve accuracy and dominate gunfights.</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                             </div>
                                
                             <div className="mt-6 border-t pt-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center border rounded-md">
                                        <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="h-9 w-9"><Minus className="w-4 h-4" /></Button>
                                        <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                                        <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)} className="h-9 w-9"><Plus className="w-4 h-4" /></Button>
                                    </div>
                                    <Button size="lg" className="flex-1 ml-4 hover-shimmer-button bg-gray-800 hover:bg-gray-900 text-white rounded-lg">
                                        Add to Cart <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                             </div>
                           </div>
                        </div>
                    </div>

                     {/* Related Products */}
                    <div className="mt-16 md:mt-24">
                        <h2 className="text-3xl font-extrabold text-center text-gray-900 font-headline mb-8">You Might Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedProducts.map((product) => (
                                <Link href={product.href} key={product.name}>
                                    <Card className="group overflow-hidden rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
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
