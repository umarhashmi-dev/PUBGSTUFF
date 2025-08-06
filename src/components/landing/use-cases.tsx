import { ShieldCheck, Zap, PackageCheck, Headset, Lock, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const useCases = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Secure Transactions",
    description: "All payments and deliveries are encrypted and secured.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Blazing Fast",
    description: "Instant delivery of digital codes and assets after purchase.",
  },
  {
    icon: <PackageCheck className="w-8 h-8 text-primary" />,
    title: "Guaranteed Delivery",
    description: "We ensure you receive what you paid for, every time.",
  },
  {
    icon: <Headset className="w-8 h-8 text-primary" />,
    title: "Live Support",
    description: "Our support team is available to help you with any issues.",
  },
  {
    icon: <Lock className="w-8 h-8 text-primary" />,
    title: "Privacy Focused",
    description: "We respect your privacy and don't share your data.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "24/7 Assistance",
    description: "Our services and support are available around the clock.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Multiple Use Cases Of PUBGSTUFF
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Providing you with the best digital product experience.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-card/50 hover:bg-card transition-colors duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                {useCase.icon}
                <div>
                  <CardTitle>{useCase.title}</CardTitle>
                  <CardDescription className="mt-1">{useCase.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
