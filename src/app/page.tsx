import FeaturedProducts from "@/components/landing/featured-products";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}
