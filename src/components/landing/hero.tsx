import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Amplify Your Content
          <span className="text-primary"> With AI</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Textify AI offers AI-powered tools for content research, text
          summarization, and idea generation. Transform your writing process
          today.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#cta">Try Textify AI Free</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
        <div className="mt-16">
          <div className="inline-flex items-center">
            <span className="font-semibold text-muted-foreground">
              Trusted & Rated By 1,000+ Teams Globally
            </span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="col-span-1 flex justify-center lg:col-span-1">
                <Image
                  className="h-12"
                  src={`https://placehold.co/158x48.png?text=Logo${i}`}
                  alt={`Logo ${i}`}
                  width={158}
                  height={48}
                  data-ai-hint="logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
