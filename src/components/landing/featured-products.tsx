import { Button } from "@/components/ui/button";
import { Check, User } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: null,
    priceSuffix: "",
    description: "Perfect for individuals and small projects.",
    badge: null,
    bgColor: "bg-background",
    buttonVariant: "default",
    buttonText: "Try for Free",
    features: [
      "Single Access",
      "UI Limit 05/Design",
      "5 AI tools integrated",
      "10+ tools to proofread",
      "10+ languages",
      "Basic Support",
    ],
  },
  {
    name: "Pro Plan",
    price: "$4999",
    priceSuffix: "One-time Fee",
    description: "Ideal for businesses and professional use.",
    badge: "Client Choice",
    bgColor: "bg-gradient-to-br from-purple-500 to-blue-500",
    buttonVariant: "gradient",
    buttonText: "Book a 20-min Call",
    features: [
        "Single Access",
        "UI Limit 05/Design",
        "5 AI tools integrated",
        "10+ tools to proofread",
        "10+ languages",
        "Basic Support",
        "1:1 Migration and Onboarding"
    ],
  },
  {
    name: "Enterprise",
    price: null,
    priceSuffix: "Custom Pricing",
    description: "For large-scale applications and custom needs.",
    badge: null,
    bgColor: "bg-background",
    buttonVariant: "default",
    buttonText: "Contact Us",
    features: [
      "Single Access",
      "UI Limit 05/Design",
      "5 AI tools integrated",
      "10+ tools to proofread",
      "10+ languages",
      "Basic Support",
      "1:1 Migration and Onboarding",
      "Custom development",
      "Personalized growth planning",
      "Early access to new features and tools"
    ],
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple, transparent pricing for teams of all sizes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn(
                "flex flex-col rounded-2xl shadow-lg transition-all duration-300 border text-center",
                plan.badge && "relative"
              )}>
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                        {plan.badge}
                    </div>
                </div>
              )}

              <CardHeader className={cn("p-8 rounded-t-2xl", plan.name === 'Pro Plan' ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-primary-foreground' : 'bg-card')}>
                <CardTitle className={cn(
                    "text-2xl font-bold font-headline uppercase tracking-wide",
                     plan.name === 'Pro Plan' ? 'text-white' : 'text-foreground'
                )}>{plan.name}</CardTitle>
                
                <div className="flex items-baseline justify-center gap-2 mt-6">
                  {plan.price ? (
                    <>
                      <span className={cn(
                          "text-5xl font-extrabold tracking-tight",
                          plan.name === 'Pro Plan' ? 'text-white' : 'text-foreground'
                      )}>{plan.price}</span>
                    </>
                  ) : <span className="text-2xl font-bold tracking-tight h-[56px] flex items-center">{plan.priceSuffix}</span> }
                </div>
                 {plan.price && <p className={cn(
                    "text-sm",
                    plan.name === 'Pro Plan' ? 'text-blue-100' : 'text-muted-foreground'
                  )}>{plan.priceSuffix}</p>}
                
              </CardHeader>
              <CardContent className="p-8 pt-6 flex-1 bg-card">
                 <p className="text-muted-foreground mb-8">{plan.description}</p>
                <ul className="space-y-4 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-foreground shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 mt-auto bg-card rounded-b-2xl">
                 {plan.buttonVariant === 'gradient' ? (
                   <Button asChild size="lg" className="w-full text-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                      <Link href="/signup">
                        <User className="mr-2 h-5 w-5 rounded-full" />
                        {plan.buttonText}
                      </Link>
                    </Button>
                 ) : (
                    <Button asChild size="lg" className="w-full text-lg bg-black text-white rounded-full hover:bg-gray-800">
                        <Link href="/signup">
                            {plan.buttonText}
                        </Link>
                    </Button>
                 )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
