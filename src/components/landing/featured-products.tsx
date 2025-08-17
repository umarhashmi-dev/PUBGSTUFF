import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "1",
    name: "Glacier M416 Skin",
    price: "$49.99",
    image: "https://placehold.co/400x400.png",
    aiHint: "gaming skin weapon"
  },
  {
    id: "2",
    name: "Golden Pharaoh X-Suit",
    price: "$99.99",
    image: "https://placehold.co/400x400.png",
    aiHint: "gaming suit armor"
  },
  {
    id: "3",
    name: "Godzilla AWM Skin",
    price: "$39.99",
    image: "https://placehold.co/400x400.png",
    aiHint: "gaming skin weapon"
  },
  {
    id: "4",
    name: "10,000 G-Coin Pack",
    price: "$89.99",
    image: "https://placehold.co/400x400.png",
    aiHint: "gaming currency coins"
  },
  {
    id: "5",
    name: "Graphic Design",
    price: "$32",
    image: "https://placehold.co/400x400.png",
    aiHint: "graphic design abstract"
  },
  {
    id: "6",
    name: "Web Development",
    price: "$250/project",
    image: "https://placehold.co/400x400.png",
    aiHint: "web development code"
  },
  {
    id: "7",
    name: "RDP's Service",
    price: "$32/month",
    image: "https://placehold.co/400x400.png",
    aiHint: "remote desktop server"
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hand-picked items to give you an edge.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={product.aiHint}
                />
              </div>
              <CardContent className="p-4 bg-background">
                <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                <p className="font-bold text-lg text-primary mt-1">{product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 bg-background">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/products/${product.id}`}>
                    View Product
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
