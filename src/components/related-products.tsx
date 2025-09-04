// src/components/related-products.tsx
"use client";

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, Plus } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { useCurrency } from '@/hooks/use-currency';
import type { Product } from '@/lib/products';
import { pcProducts, iosProducts, androidProducts } from '@/lib/products';

interface RelatedProductsProps {
  category: 'pc' | 'ios' | 'android';
  currentProduct: string;
}

export function RelatedProducts({ category, currentProduct }: RelatedProductsProps) {
  const { formatPrice } = useCurrency();
  const [addedProducts, setAddedProducts] = useState<string[]>([]);
  
  const handleAddProduct = (productName: string) => {
    setAddedProducts(prev => 
        prev.includes(productName) 
            ? prev.filter(name => name !== productName)
            : [...prev, productName]
    );
  }

  let products: Product[] = [];
  switch (category) {
    case 'pc':
      products = pcProducts;
      break;
    case 'ios':
      products = iosProducts;
      break;
    case 'android':
      products = androidProducts;
      break;
  }

  const relatedProducts = products.filter(p => p.name !== currentProduct);

  if (relatedProducts.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-16 md:mt-24">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 font-headline mb-8">You Might Also Like</h2>
      <Carousel
          opts={{
              align: "start",
              loop: relatedProducts.length > 3,
          }}
          plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
          ]}
          className="w-full"
      >
          <CarouselContent>
              {relatedProducts.map((product, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="p-1">
                          <Card className="group overflow-hidden rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                              <Link href={product.href}>
                                  <div className="aspect-square relative">
                                      <Image
                                          src={product.imageUrl}
                                          alt={product.name}
                                          fill
                                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                                          data-ai-hint={product.aiHint}
                                      />
                                  </div>
                              </Link>
                              <div className="p-4 relative">
                                  <h3 className="font-semibold font-headline text-gray-800 group-hover:text-primary transition-colors text-sm">{product.name}</h3>
                                  <p className="mt-1 font-bold text-base text-gray-900">{formatPrice(product.price)}</p>
                                  <Button 
                                      size="icon" 
                                      variant={addedProducts.includes(product.name) ? 'default' : 'outline'}
                                      className={cn(
                                          "absolute bottom-2 right-2 h-8 w-8 rounded-full transition-all duration-300",
                                          !addedProducts.includes(product.name) && "opacity-0 group-hover:opacity-100"
                                      )}
                                      onClick={() => handleAddProduct(product.name)}
                                  >
                                      {addedProducts.includes(product.name) ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                  </Button>
                              </div>
                          </Card>
                      </div>
                  </CarouselItem>
              ))}
          </CarouselContent>
      </Carousel>
    </div>
  );
}
