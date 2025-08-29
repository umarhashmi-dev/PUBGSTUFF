
'use client';
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Mail, MapPin, Phone } from "lucide-react";
import Faq from "@/components/landing/faq";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function ContactPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1 pt-24 md:pt-40">
        <section className="py-12 md:py-16 text-center">
          <div className="container">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-foreground/10 text-foreground">
              Contact Us
            </span>
            <TextAnimate
              as="h1"
              animation={{
                hidden: { opacity: 0, filter: "blur(4px)" },
                show: { opacity: 1, filter: "blur(0px)" },
              }}
              className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground md:text-5xl font-headline"
            >
              Get in touch with our team
            </TextAnimate>
            <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-muted-foreground">
              We have the team and know-how to help you scale 10x faster.
            </p>
          </div>
        </section>

        <section className="container pb-16 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="text-left p-6 flex flex-col items-start transform hover:-translate-y-1 transition-transform duration-300">
                <div className="p-3 bg-foreground/10 text-foreground rounded-lg w-fit mb-4">
                    <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-headline">Chat to sales</h3>
                <p className="text-muted-foreground mt-2 mb-4 text-sm sm:text-base">Speak to our friendly team.</p>
                <Button asChild variant="outline" className="w-full justify-start mt-auto hover-shimmer-button text-xs sm:text-sm">
                    <a href="mailto:contact@pubgstuff.store">contact@pubgstuff.store</a>
                </Button>
            </Card>
            <Card className="text-left p-6 flex flex-col items-start transform hover:-translate-y-1 transition-transform duration-300">
                <div className="p-3 bg-foreground/10 text-foreground rounded-lg w-fit mb-4">
                    <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-headline">Chat to support</h3>
                <p className="text-muted-foreground mt-2 mb-4 text-sm sm:text-base">We're here to help.</p>
                 <Button asChild variant="outline" className="w-full justify-start mt-auto hover-shimmer-button text-xs sm:text-sm">
                    <a href="mailto:contact@umarhashmi.dev">contact@umarhashmi.dev</a>
                </Button>
            </Card>
            <Card className="text-left p-6 flex flex-col items-start transform hover:-translate-y-1 transition-transform duration-300">
                <div className="p-3 bg-foreground/10 text-foreground rounded-lg w-fit mb-4">
                    <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-headline">Visit us</h3>
                <p className="text-muted-foreground mt-2 mb-4 text-sm sm:text-base">Visit our office HQ.</p>
                <Button variant="outline" asChild className="w-full mt-auto hover-shimmer-button text-xs sm:text-sm">
                    <a href="https://maps.google.com?q=Shams+Colony+H-13+Islamabad" target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </a>
                </Button>
            </Card>
             <Card className="text-left p-6 flex flex-col items-start transform hover:-translate-y-1 transition-transform duration-300">
                <div className="p-3 bg-foreground/10 text-foreground rounded-lg w-fit mb-4">
                    <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-headline">Call us</h3>
                <p className="text-muted-foreground mt-2 mb-4 text-sm sm:text-base">Mon-Fri from 8am to 5pm.</p>
                 <div className="space-y-2 w-full mt-auto">
                    <Button variant="outline" asChild className="w-full justify-start hover-shimmer-button text-xs sm:text-sm">
                        <a href="https://wa.me/447532830145" target="_blank" rel="noopener noreferrer">+44 7532 830145</a>
                    </Button>
                    <Button variant="outline" asChild className="w-full justify-start hover-shimmer-button text-xs sm:text-sm">
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
