
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container px-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Contact Us
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    We&apos;d love to hear from you. Whether you have a question about our products, services, or anything else, our team is ready to answer all your questions.
                </p>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="text-center group hover:bg-card/95 transition-all duration-300 transform hover:-translate-y-2">
                        <CardHeader>
                             <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit group-hover:scale-110 transition-transform">
                                <MapPin className="w-8 h-8"/>
                            </div>
                            <CardTitle className="mt-4">Our Office</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Shams Colony H-13 Islamabad, Pakistan
                            </p>
                             <Button asChild variant="link" className="mt-2">
                                <Link href="https://maps.google.com?q=Shams+Colony+H-13+Islamabad" target="_blank" rel="noopener noreferrer">
                                    Get Directions
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="text-center group hover:bg-card/95 transition-all duration-300 transform hover:-translate-y-2">
                        <CardHeader>
                             <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit group-hover:scale-110 transition-transform">
                                <Phone className="w-8 h-8"/>
                            </div>
                            <CardTitle className="mt-4">Call Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-muted-foreground space-y-2">
                                <p>
                                    <Link href="https://wa.me/447532830145" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        +44 7532 830145
                                    </Link>
                                </p>
                                 <p>
                                    <Link href="https://wa.me/923021550385" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        +92 302 1550385
                                    </Link>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                     <Card className="text-center group hover:bg-card/95 transition-all duration-300 transform hover:-translate-y-2">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit group-hover:scale-110 transition-transform">
                                <Mail className="w-8 h-8"/>
                            </div>
                            <CardTitle className="mt-4">Email Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-muted-foreground space-y-2">
                               <p>
                                    <Link href="mailto:contact@pubgstuff.store" className="hover:text-primary transition-colors">
                                        contact@pubgstuff.store
                                    </Link>
                                </p>
                                <p>
                                    <Link href="mailto:contact@umarhashmi.dev" className="hover:text-primary transition-colors">
                                        contact@umarhashmi.dev
                                    </Link>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

         <section className="pb-16 md:pb-24">
            <div className="container">
               <div className="rounded-lg overflow-hidden shadow-lg">
                 <Image 
                    src="https://placehold.co/1200x400.png"
                    alt="Our Location"
                    width={1200}
                    height={400}
                    className="w-full h-full object-cover"
                    data-ai-hint="world map"
                 />
               </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
