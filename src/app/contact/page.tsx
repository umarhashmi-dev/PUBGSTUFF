
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gray-50/50">
            <div className="container px-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Contact Us
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    We&apos;d love to hear from you. Whether you have a question about our products, services, or anything else, our team is ready to answer all your questions.
                </p>
            </div>
        </section>

        <section className="py-16">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="bg-card p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" type="text" placeholder="Your Name" />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Your Email Address" />
                                </div>
                            </div>
                             <div>
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" type="text" placeholder="Subject" />
                            </div>
                            <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Your message..." rows={5} />
                            </div>
                            <Button type="submit" className="w-full" size="lg">Send Message</Button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                                <MapPin className="w-6 h-6 text-primary"/>
                                Our Office
                            </h3>
                            <p className="text-muted-foreground">Shams Colony H-13 Islamabad, Pakistan</p>
                             <Button asChild variant="link" className="p-0 h-auto">
                                <Link href="https://maps.google.com?q=Shams+Colony+H-13+Islamabad" target="_blank" rel="noopener noreferrer">
                                    Get Directions
                                </Link>
                            </Button>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                                <Phone className="w-6 h-6 text-primary"/>
                                Call Us
                            </h3>
                            <div className="text-muted-foreground space-y-1">
                                <p>
                                    <Link href="https://wa.me/447532830145" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        WhatsApp: +44 7532 830145
                                    </Link>
                                </p>
                                 <p>
                                    <Link href="https://wa.me/923021550385" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        WhatsApp: +92 302 1550385
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                                <Mail className="w-6 h-6 text-primary"/>
                                Email Us
                            </h3>
                            <div className="text-muted-foreground space-y-1">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section className="py-16">
            <div className="container">
               <div className="rounded-lg overflow-hidden">
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
