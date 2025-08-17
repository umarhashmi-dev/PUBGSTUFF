import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Courses</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore our range of courses designed to help you master new skills and advance your career.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="hover-shimmer-button">
                <Link href="#">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
