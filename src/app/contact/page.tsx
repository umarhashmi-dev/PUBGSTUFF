import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Have a question or want to work with us? Drop us a line.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-xl">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit" className="w-full" size="lg">Send Message</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
