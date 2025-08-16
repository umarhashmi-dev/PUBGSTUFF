
import Faq from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

const contactMethods = [
    {
        icon: <MessageSquare className="w-6 h-6 text-primary" />,
        title: "Chat to sales",
        description: "Speak to our friendly team.",
        link: "mailto:contact@pubgstuff.store",
        linkText: "contact@pubgstuff.store"
    },
    {
        icon: <MessageSquare className="w-6 h-6 text-primary" />,
        title: "Chat to support",
        description: "We're here to help.",
        link: "mailto:contact@umarhashmi.dev",
        linkText: "contact@umarhashmi.dev"
    },
    {
        icon: <MapPin className="w-6 h-6 text-primary" />,
        title: "Visit us",
        description: "Visit our office HQ.",
        link: "https://maps.google.com?q=Shams+Colony+H-13+Islamabad",
        linkText: "View on Google Maps"
    },
    {
        icon: <Phone className="w-6 h-6 text-primary" />,
        title: "Call us",
        description: "Mon-Fri from 8am to 5pm.",
        link: "tel:+923021550385",
        linkText: "+92 302 1550385"
    }
]

export default function ContactPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-24 bg-gray-50/50">
            <div className="container px-4 text-center">
                <Badge variant="outline" className="mb-4">Contact</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Contact our friendly team
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Let us know how we can help.
                </p>
            </div>
        </section>

        <section className="py-24">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactMethods.map((method, index) => (
                        <Card key={index} className="text-center p-6">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    {method.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                            <p className="text-muted-foreground mb-4">{method.description}</p>
                            <Button asChild variant="link" className="text-primary">
                                <Link href={method.link} target={method.link.startsWith('http') ? '_blank' : undefined}>{method.linkText}</Link>
                            </Button>
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
