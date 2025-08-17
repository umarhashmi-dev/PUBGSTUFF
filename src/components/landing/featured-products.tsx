
import { Button } from "@/components/ui/button";
import { Check, User, Wand2, Shield, Gem } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    icon: <Wand2 className="h-6 w-6 text-foreground" />,
    headerText: "30-Day Free Trial",
    price: "Free",
    priceSuffix: "",
    description: "Unlock your full potential with Stay AI—try all our tools and features absolutely free for 30 days!",
    badge: null,
    buttonVariant: "default",
    buttonText: "Try for Free",
    features: [
      "Subscription Management Tools",
      "Advanced A/B testing capabilities",
      "AI-powered cancellation",
      "Churn prevention features",
      "Branded digital punch card",
      "Integrations with top e-comm tools",
    ],
  },
  {
    name: "Pro Plan",
    icon: <Shield className="h-6 w-6 text-foreground" />,
    headerText: "Pro Plan",
    price: "$4999",
    priceSuffix: "One time Fee",
    description: "Perfect for Shopify merchants or want to scale their subscription.",
    badge: "Client Choice",
    buttonVariant: "gradient",
    buttonText: "Book a 20-min Call",
    features: [
        "1:1 Migration And Onboarding",
        "Subscription management tools",
        "Advanced A/B testing capabilities",
        "AI-powered cancellation",
        "Churn prevention features",
        "Branded digital punch card",
        "Integrations with top e-comm tools",
    ],
  },
  {
    name: "Enterprise",
    icon: <Gem className="h-6 w-6 text-foreground" />,
    headerText: "Enterprise",
    price: "Custom Pricing",
    priceSuffix: "",
    description: "For larger brands looking to supercharge their subscription program.",
    badge: null,
    buttonVariant: "default",
    buttonText: "Contact Us",
    features: [
      "Every feature we offer in Pro plus",
      "1:1 Migration And Onboarding",
      "AI-Powered Cancellation",
      "Custom development",
      "Personalized growth planning",
      "Early access to new features and tools",
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
                "flex flex-col rounded-2xl shadow-lg transition-all duration-300 border text-left",
                plan.badge && "relative bg-white/50"
              )}>
              {plan.badge && (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                        <Shield className="h-4 w-4" />
                        {plan.badge}
                    </div>
                </div>
              )}

              <CardHeader className={cn("p-8 rounded-t-2xl", plan.name === 'Pro Plan' ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10' : 'bg-card')}>
                <div className="flex items-center gap-3">
                    {plan.icon}
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">{plan.headerText}</h3>
                </div>
                <p className="text-muted-foreground text-sm min-h-[60px] pt-4">{plan.description}</p>
                
                <div className="flex items-baseline gap-2 mt-6">
                    <span className={cn(
                        "text-5xl font-extrabold tracking-tight",
                        plan.name === "Free" && "text-4xl"
                    )}>{plan.price}</span>
                  {plan.priceSuffix && <p className="text-sm text-muted-foreground">{plan.priceSuffix}</p>}
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-1 bg-card">
                <ul className="space-y-4 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-foreground rounded-full bg-primary/10 p-1 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 mt-auto bg-card rounded-b-2xl">
                 {plan.buttonVariant === 'gradient' ? (
                   <Button asChild size="lg" className="w-full text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                      <Link href="/signup">
                        <User className="mr-2 h-5 w-5 rounded-full bg-white/20 p-1" />
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
