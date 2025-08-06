import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="cta" className="py-20 md:py-28 bg-primary/10">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Witness The AI Magic With 55K+ People Like You!
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Embrace your AI assistant with a single click & elevate your content creation.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="#">Get Started, It’s FREE!</Link>
        </Button>
      </div>
    </section>
  );
}
