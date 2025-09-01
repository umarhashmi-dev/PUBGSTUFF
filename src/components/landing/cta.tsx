
'use client';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Cta() {
  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="container text-center">
        <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-xl shadow-lg">
          <TextAnimate
            as="h2"
            animation={{
              hidden: { opacity: 0, filter: "blur(4px)" },
              show: { opacity: 1, filter: "blur(0px)" },
            }}
            className="font-headline text-2xl md:text-4xl font-bold"
          >
            Witness The Magic With 50K+ People Like You!
          </TextAnimate>
          <p className="mt-4 text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join our community of satisfied gamers and digital enthusiasts. Get instant access to the best products and deals.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="text-base md:text-lg hover-shimmer-button">
              <Link href="/products">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
