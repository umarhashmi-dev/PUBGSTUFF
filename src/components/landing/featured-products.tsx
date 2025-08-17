import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Graphic Design",
    price: "$32",
    originalPrice: "$48",
    priceSuffix: "/design",
    popular: false,
    features: [
      "Single Access",
      "UI Limit 05/Design",
      "5 AI tools integrated",
      "10+ tools to proofread",
      "10+ languages",
    ],
  },
  {
    name: "Web Development",
    price: "$250",
    originalPrice: "$322",
    priceSuffix: "/project",
    popular: true,
    features: [
        "5 User Access",
        "Support Limit 1K/day",
        "10 AI tools integrated",
        "200+ tools to proofread",
        "25+ languages",
    ],
  },
  {
    name: "RDP's Service",
    price: "$32",
    originalPrice: "$48",
    priceSuffix: "/month",
    popular: false,
    features: [
      "Unlimited Access",
      "Safe and secure uses",
      "Custom IP integrated",
      "4GB, 8GB & 16GB RAM",
      "24/7 WhatsApp Support",
    ],
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-20 md:py-28 bg-primary/5">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hand-picked items to give you an edge. High-quality digital products to elevate your projects.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {products.map((product) => (
            <Card key={product.name} className={cn("flex flex-col h-full rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2", product.popular ? "border-primary ring-2 ring-primary" : "border-border")}>
              {product.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                        Most Popular
                    </div>
                </div>
              )}
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold font-headline">{product.name}</CardTitle>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-4xl font-extrabold tracking-tight text-foreground">{product.price}</span>
                  <span className="text-muted-foreground line-through">{product.originalPrice}</span>
                  <span className="text-muted-foreground">{product.priceSuffix}</span>
                </div>
                <CardDescription className="mt-2 text-base">Perfect for getting started.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-1">
                <ul className="space-y-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8">
                <Button asChild size="lg" className={cn("w-full text-lg", product.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-primary text-primary-foreground hover:bg-primary/90")}>
                  <Link href="/signup">
                    Get Started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
