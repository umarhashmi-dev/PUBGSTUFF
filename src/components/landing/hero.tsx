import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="container grid md:grid-cols-2 gap-12 items-center py-20 md:py-32">
        <div className="text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Elevate Your Gameplay
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Discover exclusive digital gear and assets to dominate the competition. Instant delivery, unbeatable value.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="#featured-products">Explore Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 md:h-full w-full">
          <Image
            src="https://placehold.co/800x600.png"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-2xl"
            data-ai-hint="gaming cinematic"
          />
        </div>
      </div>
    </section>
  );
}
