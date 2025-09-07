
'use client';
import React, { useState, useMemo } from 'react';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCurrency } from '@/hooks/use-currency';
import { useCart } from '@/hooks/use-cart';

const EXTRA_SERVICE_FEE = 5;

export default function CartPage() {
    const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
    const [hasExtraService, setHasExtraService] = useState(false);
    const { formatPrice } = useCurrency();

    const handleQuantityChange = (id: number, delta: number) => {
        const item = cartItems.find(item => item.id === id);
        if (item) {
            const newQuantity = item.quantity + delta;
            if (newQuantity > 0) {
                updateQuantity(id, newQuantity);
            } else {
                removeFromCart(id);
            }
        }
    };

    const handleRemoveItem = (id: number) => {
        removeFromCart(id);
    };

    const handleClearCart = () => {
        clearCart();
    };
    
    const toggleExtraService = () => {
        setHasExtraService(prev => !prev);
    }

    const subtotal = useMemo(() =>
        cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
        [cartItems]
    );

    const total = useMemo(() =>
        subtotal + (hasExtraService ? EXTRA_SERVICE_FEE : 0),
        [subtotal, hasExtraService]
    );

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="flex-1 pt-28 md:pt-32">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Cart Items & Banner */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border">
                                <div className="flex justify-between items-center mb-6">
                                    <h1 className="text-xl sm:text-2xl font-bold font-headline text-gray-800">
                                        Cart <span className="text-gray-500 font-normal">({cartItems.length} products)</span>
                                    </h1>
                                    <Button variant="ghost" size="sm" onClick={handleClearCart} className="text-red-500 hover:text-red-600 hover:bg-red-50 text-xs sm:text-sm">
                                        <X className="mr-1 h-4 w-4" /> Clear cart
                                    </Button>
                                </div>
                                <div className="space-y-4">
                                    {cartItems.length > 0 ? (
                                        cartItems.map(item => (
                                            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b pb-4 last:border-b-0">
                                                <div className="flex items-start gap-4 w-full">
                                                    <div className="w-20 h-20 bg-gray-100 rounded-lg p-2 relative shrink-0">
                                                        <Image src={item.imageUrl} alt={item.name} fill className="object-contain" data-ai-hint={item.aiHint}/>
                                                    </div>
                                                    <div className="flex-1">
                                                        <Link href={item.href} className="font-semibold text-gray-800 hover:text-primary">{item.name}</Link>
                                                        <p className="text-sm text-gray-500">{item.category}</p>
                                                        <p className="sm:hidden font-semibold mt-1">{formatPrice(item.price * item.quantity)}</p>
                                                    </div>
                                                    <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)} className="h-8 w-8 text-gray-400 hover:text-red-500 sm:hidden shrink-0">
                                                        <X className="w-4 w-4" />
                                                    </Button>
                                                </div>
                                                <div className="flex items-center justify-between w-full sm:w-auto mt-2 sm:mt-0">
                                                    <div className="flex items-center border rounded-md">
                                                        <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(item.id, -1)} className="h-8 w-8 text-gray-500"><Minus className="w-4 h-4" /></Button>
                                                        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                                                        <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(item.id, 1)} className="h-8 w-8 text-gray-500"><Plus className="w-4 h-4" /></Button>
                                                    </div>
                                                    <p className="hidden sm:block font-semibold w-24 text-center">{formatPrice(item.price * item.quantity)}</p>
                                                    <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)} className="h-8 w-8 text-gray-400 hover:text-red-500 hidden sm:inline-flex">
                                                        <X className="w-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-12">
                                            <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
                                            <h3 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h3>
                                            <p className="mt-2 text-sm text-gray-500">Looks like you haven't added anything to your cart yet.</p>
                                            <Button asChild className="mt-6">
                                                <Link href="/products">Browse Products</Link>
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="bg-gray-800 text-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl font-bold font-headline">Need Help?</h3>
                                    <p className="text-gray-300 mt-1 text-sm sm:text-base">Add extra setup & personal assistant to your order.</p>
                                </div>
                                <Button 
                                    onClick={toggleExtraService}
                                    variant={hasExtraService ? "secondary" : "default"}
                                    className="bg-white text-black hover:bg-gray-200 hover-shimmer-button shrink-0"
                                >
                                    {hasExtraService ? 'Service Added!' : `Add Service for ${formatPrice(EXTRA_SERVICE_FEE)}`}
                                </Button>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border sticky top-28">
                                <h2 className="text-lg font-semibold font-headline text-gray-800">Promo code</h2>
                                <div className="flex gap-2 mt-4">
                                    <Input placeholder="Type here..." className="flex-1" />
                                    <Button className="bg-black text-white hover:bg-gray-800">Apply</Button>
                                </div>
                                <Separator className="my-6" />
                                <div className="space-y-4">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-gray-900">{formatPrice(subtotal)}</span>
                                    </div>
                                    {hasExtraService && (
                                         <div className="flex justify-between text-gray-600">
                                            <span>Extra Service</span>
                                            <span className="font-medium text-gray-900">{formatPrice(EXTRA_SERVICE_FEE)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-gray-600">
                                        <span>Discount</span>
                                        <span className="font-medium text-green-600">-{formatPrice(0)}</span>
                                    </div>
                                    <Separator />
                                    <div className="flex justify-between text-xl font-bold text-gray-900">
                                        <span>Total</span>
                                        <span>{formatPrice(total)}</span>
                                    </div>
                                </div>
                                <Button size="lg" className="w-full mt-6 bg-black text-white hover:bg-gray-800 text-base">
                                    Continue to checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
