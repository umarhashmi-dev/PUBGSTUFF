import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Get Your Game On
          <span className="text-primary"> With Digital Goods</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Your one-stop shop for the best digital products for your favorite games. Instant delivery, secure checkout.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/products">Browse Products</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
        <div className="mt-16">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="Hero Image"
            width={1200}
            height={600}
            className="rounded-lg shadow-xl mx-auto"
            data-ai-hint="gaming items"
          />
        </div>
      </div>
    </section>
  );
}
