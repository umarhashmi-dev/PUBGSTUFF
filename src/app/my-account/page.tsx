
'use client';
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import RequireAuth from "@/components/require-auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function MyAccountPage() {
  return (
    <RequireAuth>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="flex-1">
          <div className="container py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <TextAnimate
                as="h1"
                animation={{
                  hidden: { opacity: 0, filter: "blur(4px)" },
                  show: { opacity: 1, filter: "blur(0px)" },
                }}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground md:text-5xl"
              >
                My Account
              </TextAnimate>
              <p className="mt-4 md:mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
                Manage your account, view orders, and access your downloads.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-4">
                <h2 className="text-xl sm:text-2xl font-bold">Orders</h2>
                <p className="mt-2 text-muted-foreground text-sm sm:text-base">Check your order history.</p>
                <Button asChild variant="outline" className="mt-4 hover-shimmer-button">
                  <Link href="/my-account/orders">View Orders</Link>
                </Button>
              </div>
               <div className="text-center p-4">
                <h2 className="text-xl sm:text-2xl font-bold">Downloads</h2>
                <p className="mt-2 text-muted-foreground text-sm sm:text-base">Access your downloads.</p>
                <Button asChild variant="outline" className="mt-4 hover-shimmer-button">
                  <Link href="/my-account/downloads">View Downloads</Link>
                </Button>
              </div>
               <div className="text-center p-4">
                <h2 className="text-xl sm:text-2xl font-bold">Account Details</h2>
                <p className="mt-2 text-muted-foreground text-sm sm:text-base">Update your information.</p>
                <Button asChild variant="outline" className="mt-4 hover-shimmer-button">
                  <Link href="/my-account/account-details">Edit Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </RequireAuth>
  );
}
