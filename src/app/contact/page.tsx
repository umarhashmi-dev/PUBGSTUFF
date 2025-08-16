
import Faq from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const contactMethods = [
    {
        icon: <MapPin className="w-8 h-8 text-primary" />,
        title: "Location",
        details: [
            { text: "Shams Colony H-13 Islamabad, Pakistan", href: "https://maps.google.com?q=Shams+Colony+H-13+Islamabad" }
        ]
    },
    {
        icon: <Phone className="w-8 h-8 text-primary" />,
        title: "WhatsApp",
        details: [
            { text: "+44 7532 830145", href: "https://wa.me/447532830145" },
            { text: "+92 302 1550385", href: "https://wa.me/923021550385" }
        ]
    },
    {
        icon: <Mail className="w-8 h-8 text-primary" />,
        title: "Email Support",
        details: [
            { text: "contact@pubgstuff.store", href: "mailto:contact@pubgstuff.store" },
            { text: "contact@umarhashmi.dev", href: "mailto:contact@umarhashmi.dev" }
        ]
    }
]

export default function ContactPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-24 bg-gray-50/50">
            <div className="container px-4 text-center">
                <Badge variant="outline" className="mb-4 text-sm">Contact</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Contact our friendly team
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Let us know how we can help. We are always here for you.
                </p>
            </div>
        </section>

        <section className="py-24">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contactMethods.map((method, index) => (
                        <Card key={index} className="text-center p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-primary/10 rounded-full">
                                    {method.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-foreground">{method.title}</h3>
                            <div className="space-y-2">
                                {method.details.map((detail, i) => (
                                    <Button key={i} asChild variant="link" className="text-muted-foreground text-base p-0 h-auto block">
                                        <Link href={detail.href} target="_blank" rel="noopener noreferrer">
                                            {detail.text}
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </div>
  );
}
