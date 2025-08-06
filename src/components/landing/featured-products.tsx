import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Check out our most popular items.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-64"
                  data-ai-hint={product.aiHint}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                </CardTitle>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 pt-0">
                <span className="font-bold text-lg text-primary">{product.price}</span>
                <Button asChild>
                  <Link href={`/products/${product.id}`}>View</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
