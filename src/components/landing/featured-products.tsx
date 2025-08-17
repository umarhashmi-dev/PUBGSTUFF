import { Button } from "@/components/ui/button";
import { Check, Code, Briefcase, Server } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Graphic Design",
    price: "$32",
    priceSuffix: "/design",
    popular: false,
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    description: "Perfect for single design projects and proofreading tasks.",
    features: [
      "Single Access",
      "UI Limit 05/Design",
      "5 AI tools integrated",
      "10+ tools to proofread",
      "10+ languages",
    ],
    buttonText: "Get Started"
  },
  {
    name: "Web Development",
    price: "$250",
    priceSuffix: "/project",
    popular: true,
    icon: <Code className="w-6 h-6 text-primary" />,
    description: "Ideal for full-scale projects with team access and extensive tools.",
    features: [
        "5 User Access",
        "Support Limit 1K/day",
        "10 AI tools integrated",
        "200+ tools to proofread",
        "25+ languages",
    ],
    buttonText: "Get Started"
  },
  {
    name: "RDP's Service",
    price: "$32",
    priceSuffix: "/month",
    popular: false,
    icon: <Server className="w-6 h-6 text-primary" />,
    description: "Secure and reliable remote desktop access with support.",
    features: [
      "Unlimited Access",
      "Safe and secure uses",
      "Custom IP integrated",
      "4GB, 8GB & 16GB RAM",
      "24/7 WhatsApp Support",
    ],
    buttonText: "Get Started"
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hand-picked items to give you an edge. High-quality digital products to elevate your projects.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {products.map((product) => (
            <Card key={product.name} className={cn(
                "flex flex-col rounded-2xl shadow-lg transition-all duration-300", 
                product.popular ? "ring-2 ring-primary" : "border"
            )}>
              {product.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                        Most Popular
                    </div>
                </div>
              )}
              <CardHeader className="p-8">
                <div className="flex items-center gap-3">
                    {product.icon}
                    <CardTitle className="text-lg font-bold font-headline uppercase tracking-wide">{product.name}</CardTitle>
                </div>
                <CardDescription className="mt-2 text-sm text-muted-foreground">{product.description}</CardDescription>
                <div className="flex items-baseline gap-2 mt-6">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">{product.price}</span>
                  <span className="text-muted-foreground">{product.priceSuffix}</span>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-1">
                <ul className="space-y-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-foreground shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 mt-auto">
                <Button asChild size="lg" className="w-full text-lg">
                  <Link href="/signup">
                    {product.buttonText}
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
