
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-50/50">
      <Header />
      <main className="flex-1 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Have a question or need help? Reach out to our team at PUBGStuff, and we’ll assist you as soon as possible!
            </p>
          </div>

          <div className="mx-auto mt-20 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            <Card className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center pb-4">
                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                  <MapPin className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Our Office</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Shams Colony H-13
                  <br />
                  Islamabad, Pakistan
                </p>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center pb-4">
                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                  <Phone className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">+44 7532 830145</p>
                <p className="text-muted-foreground">+92 302 1550385</p>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center pb-4">
                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                  <Mail className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">contact@pubgstuff.store</p>
                <p className="text-muted-foreground">contact@umarhashmi.dev</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
