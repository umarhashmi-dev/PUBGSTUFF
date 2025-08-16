
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageSquare, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/components/landing/faq";

export default function ContactPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 text-center">
          <div className="container">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-primary/10 text-primary">
              Contact Us
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in touch with our team
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
              We have the team and know-how to help you scale 10x faster.
            </p>
          </div>
        </section>

        <section className="container pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-left p-6">
                <div className="p-2 bg-primary/10 text-primary rounded-lg w-fit mb-4">
                    <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Chat to sales</h3>
                <p className="text-muted-foreground mt-2 mb-4">Speak to our friendly team.</p>
                <div className="space-y-2">
                    <Button asChild variant="outline" className="w-full justify-start">
                        <a href="mailto:contact@pubgstuff.store">contact@pubgstuff.store</a>
                    </Button>
                     <Button asChild variant="outline" className="w-full justify-start">
                        <a href="mailto:contact@umarhashmi.dev">contact@umarhashmi.dev</a>
                    </Button>
                </div>
            </Card>
            <Card className="text-left p-6">
                <div className="p-2 bg-primary/10 text-primary rounded-lg w-fit mb-4">
                    <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Visit us</h3>
                <p className="text-muted-foreground mt-2 mb-4">Visit our office HQ.</p>
                <Button variant="outline" asChild>
                    <a href="https://maps.google.com?q=Shams+Colony+H-13+Islamabad" target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </a>
                </Button>
            </Card>
             <Card className="text-left p-6">
                <div className="p-2 bg-primary/10 text-primary rounded-lg w-fit mb-4">
                    <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Call us</h3>
                <p className="text-muted-foreground mt-2 mb-4">Mon-Fri from 8am to 5pm.</p>
                 <div className="space-y-2">
                    <Button variant="outline" asChild className="w-full justify-start">
                        <a href="https://wa.me/447532830145" target="_blank" rel="noopener noreferrer">+44 7532 830145</a>
                    </Button>
                    <Button variant="outline" asChild className="w-full justify-start">
                         <a href="https://wa.me/923021550385" target="_blank" rel="noopener noreferrer">+92 302 1550385</a>
                    </Button>
                 </div>
            </Card>
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </div>
  );
}
