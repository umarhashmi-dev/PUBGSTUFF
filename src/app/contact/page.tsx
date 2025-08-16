
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1 bg-white pt-24 md:pt-32">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Get in Touch</h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Have a question or need help? Reach out to our team at PUBGStuff, and we’ll assist you as soon as possible!
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground mt-2">Find us at the following locations and channels.</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-muted-foreground">Shams Colony H-13 Islamabad, Pakistan</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">WhatsApp</h3>
                    <p className="text-muted-foreground">+44 7532 830145</p>
                    <p className="text-muted-foreground">+92 302 1550385</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email Support</h3>
                    <p className="text-muted-foreground">contact@pubgstuff.store</p>
                    <p className="text-muted-foreground">contact@umarhashmi.dev</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50/50 p-8 rounded-lg border">
               <h2 className="text-2xl font-bold">Send us a Message</h2>
                <p className="text-muted-foreground mt-2 mb-8">Fill out the form below and we'll get back to you.</p>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" name="name" required placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" name="email" required placeholder="Enter your email address"/>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} required placeholder="How can we help you?"/>
                </div>
                <Button type="submit" className="w-full" size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
