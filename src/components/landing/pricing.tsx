import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For individuals starting out",
    features: [
      "5 AI queries/day",
      "Basic summarization",
      "Standard research",
      "Community support",
    ],
    buttonText: "Get Started",
    variant: "outline",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For professionals and power users",
    features: [
      "Unlimited AI queries",
      "Advanced summarization",
      "In-depth AI research",
      "Priority email support",
      "Access to new features",
    ],
    buttonText: "Pick Plan",
    variant: "default",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team collaboration tools",
      "API Access",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    buttonText: "Contact Us",
    variant: "outline",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose the service that fits your needs best!
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Unlock your content potential with our flexible plans.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className={`flex flex-col shadow-lg ${plan.name === 'Pro' ? 'border-primary ring-2 ring-primary' : ''}`}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full" variant={plan.variant as any}>
                  <Link href="#cta">{plan.buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
