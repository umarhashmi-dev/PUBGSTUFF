import Cta from "@/components/landing/cta";
import Faq from "@/components/landing/faq";
import FeaturedProducts from "@/components/landing/featured-products";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Testimonials from "@/components/landing/testimonials";
import UseCases from "@/components/landing/use-cases";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-50">
      <div className="flex-1">
        <Header />
        <main>
          <Hero />
          <div className="bg-background">
            <FeaturedProducts />
            <HowItWorks />
            <UseCases />
            <Testimonials />
            <Faq />
            <Cta />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}