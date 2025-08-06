import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We are a passionate team dedicated to providing the best digital products and services.
            </p>
          </div>
          <div className="mt-16">
            <Image 
              src="https://placehold.co/1200x400.png"
              alt="About us"
              width={1200}
              height={400}
              className="rounded-lg"
              data-ai-hint="team business"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
