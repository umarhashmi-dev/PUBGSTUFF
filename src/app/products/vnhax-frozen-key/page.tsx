
'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Star, Check, Minus, Plus, RefreshCw, ChevronLeft, ChevronRight, Share, Heart, Maximize } from 'lucide-react';
import Image from 'next/image';
import { useCurrency } from '@/hooks/use-currency';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { ProductLayout } from '@/components/product-layout';

const images = [
    { id: 1, src: 'https://i.postimg.cc/4KDxDs7Y/Vnhax-Frozen-Key.webp', alt: 'Main product image', aiHint: 'gaming character cinematic' },
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

const features = [
    "100% Safe & Secure",
    "Special Kill Effects",
    "Best Recoil Control",
    "ESP, Skins & Aimbot",
    "Integrated emulator bypass",
    "24/7 Dedicated Support",
    "Aimbot FOV value",
    "Skip Knocked Enemies",
];

const BASE_PRICE = 5;
const EXTRA_PRICE = 5;

export default function SingleProductPage() {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [quantity, setQuantity] = useState(1);
    const { formatPrice, currency } = useCurrency();
    const [currentThumbnailPage, setCurrentThumbnailPage] = useState(0);
    const [extras, setExtras] = useState({
        windows: false,
        drivers: false,
        extras: false
    });
    const [totalPrice, setTotalPrice] = useState(BASE_PRICE);

    const thumbnailsPerPage = 4;
    const thumbnailPages = Math.ceil(images.length / thumbnailsPerPage);

    useEffect(() => {
        const extrasCount = Object.values(extras).filter(Boolean).length;
        const newTotal = (BASE_PRICE * quantity) + (extrasCount * EXTRA_PRICE);
        setTotalPrice(newTotal);
    }, [quantity, extras]);

    const handleExtraChange = (extra: keyof typeof extras) => {
        setExtras(prev => ({...prev, [extra]: !prev[extra]}));
    }

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
        <ProductLayout>
            <div className="flex min-h-screen flex-col bg-gray-50">
                <Header />
                <main className="flex-1 pt-24 md:pt-32">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 lg:grid-cols-[6fr,5fr] gap-8 md:gap-12 max-w-5xl mx-auto">
                            {/* Image Gallery */}
                            <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
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
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="text-xs text-gray-500">Product Name</p>
                                                    <h2 className="text-lg font-bold text-gray-900">Vnhax Frozen Key</h2>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex text-yellow-500">
                                                        <Star className="w-4 h-4 fill-current" />
                                                        <Star className="w-4 h-4 fill-current" />
                                                        <Star className="w-4 h-4 fill-current" />
                                                        <Star className="w-4 h-4 fill-current" />
                                                        <Star className="w-4 h-4 fill-current" />
                                                    </div>
                                                    <span className="text-xs text-gray-600">(13k+)</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="border border-gray-200 rounded-lg p-4 mt-4">
                                            <p className="text-2xl font-bold">{formatPrice(totalPrice)}</p>
                                            <p className="text-green-600 font-semibold">{currency === 'PKR' ? 'Rs (Pakistani Rupees)' : '$ (United States Dollar)'}</p>
                                            <div className="mt-4">
                                                <p className="text-sm text-gray-500 mb-2">Add Extra Support ( {formatPrice(EXTRA_PRICE)} each )</p>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                                    <label htmlFor="windows" className="flex items-center space-x-2 border rounded-md p-2 hover:bg-gray-50 cursor-pointer has-[input:checked]:bg-primary/5 has-[input:checked]:border-primary transition-all">
                                                        <Checkbox id="windows" checked={extras.windows} onCheckedChange={() => handleExtraChange('windows')} />
                                                        <span className="text-sm font-medium">Windows</span>
                                                    </label>
                                                    <label htmlFor="drivers" className="flex items-center space-x-2 border rounded-md p-2 hover:bg-gray-50 cursor-pointer has-[input:checked]:bg-primary/5 has-[input:checked]:border-primary transition-all">
                                                        <Checkbox id="drivers" checked={extras.drivers} onCheckedChange={() => handleExtraChange('drivers')} />
                                                        <span className="text-sm font-medium">Drivers</span>
                                                    </label>
                                                    <label htmlFor="extras" className="flex items-center space-x-2 border rounded-md p-2 hover:bg-gray-50 cursor-pointer has-[input:checked]:bg-primary/5 has-[input:checked]:border-primary transition-all">
                                                        <Checkbox id="extras" checked={extras.extras} onCheckedChange={() => handleExtraChange('extras')} />
                                                        <span className="text-sm font-medium">Extras</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-gray-200 rounded-lg p-4 mt-4">
                                            <ul className="space-y-3">
                                                {features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <Check className="h-5 w-5 text-white rounded-full bg-black p-1 shrink-0 mt-0.5" />
                                                        <span className="text-foreground text-sm sm:text-base">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6">
                                        <div className="flex justify-between items-center gap-4">
                                            <div className="flex items-center border rounded-md p-1">
                                                <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="h-8 w-8"><Minus className="w-4 h-4" /></Button>
                                                <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                                                <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)} className="h-8 w-8"><Plus className="w-4 h-4" /></Button>
                                            </div>
                                            <Button size="lg" className="flex-1 hover-shimmer-button bg-black text-white hover:bg-gray-800 rounded-lg">
                                                Buy Now
                                            </Button>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>

                        {/* Long Description */}
                        <div className="mt-16 md:mt-24 max-w-5xl mx-auto bg-white p-6 md:p-8 rounded-xl border border-gray-200">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-headline mb-6">Long Description</h2>
                            <div className="prose prose-gray max-w-none">
                                <p>VNHAX Frozen Key is a premium PUBG Mobile booster and ESP tool designed for players who want to gain a professional advantage in every match. With more than 13,000 satisfied users and a 4.9 rating, this product is proven to be safe, secure, and effective.</p>
                                <p>Built with advanced Antiban protection, VNHAX ensures your main account stays safe while you enjoy features like Wall ESP, Loot ESP, Aimbot, Magic options, special kill effects, and recoil control. It also comes with an integrated emulator bypass for smooth performance on PC.</p>
                                <p>Whether you want to spot enemies faster, improve shooting precision, or customize your gameplay with skins and kill messages, VNHAX Frozen Key delivers it all. This is the ultimate solution for PUBG Mobile players who want a reliable, secure, and long-term booster.</p>
                                
                                <h3 className="font-headline font-bold text-xl mt-6 mb-4">Key Features:</h3>
                                <ul className="space-y-2">
                                    <li>100% Safe & Secure – Advanced Antiban technology keeps your PUBG Mobile main account safe.</li>
                                    <li>Booster & ESP – Includes Wall ESP and Loot ESP to detect enemies and items easily.</li>
                                    <li>Aimbot & Magic – Improve accuracy and dominate gunfights.</li>
                                    <li>Special Kill Effects – Unique kill messages and animations.</li>
                                    <li>Best Recoil Control – Shoot with unmatched stability.</li>
                                    <li>Integrated Emulator Bypass – Optimized for smooth PC gameplay.</li>
                                    <li>Trusted Worldwide – Over 13,000 gamers rated it 4.9/5.</li>
                                </ul>

                                <h3 className="font-headline font-bold text-xl mt-6 mb-4">Why Choose VNHAX Frozen Key?</h3>
                                <p>Unlike ordinary cheats or hacks, VNHAX Frozen Key is a professional PUBG Mobile booster built with long-term account safety in mind. It combines powerful features like ESP, Aimbot, recoil control, and skins with a guaranteed Antiban system. For serious players who want to stay safe while improving their gameplay, this is the best choice.</p>
                                
                                <p className="font-semibold mt-4">✅ This version is now:</p>
                                <ul className="space-y-1 text-sm">
                                    <li>Keyword-optimized for PUBG Mobile, booster, ESP, Aimbot, Antiban, Frozen Key.</li>
                                    <li>Structured with clear headings for better Google indexing.</li>
                                    <li>AdSense-safe (no spammy wording, professional tone).</li>
                                    <li>Ready to rank in search engines.</li>
                                </ul>
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
        </ProductLayout>
    );
}

    