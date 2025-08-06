import Cta from "@/components/landing/cta";
import Faq from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Pricing from "@/components/landing/pricing";
import Testimonials from "@/components/landing/testimonials";
import UseCases from "@/components/landing/use-cases";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <UseCases />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
