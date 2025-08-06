import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import RequireAuth from "@/components/require-auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MyAccountPage() {
  return (
    <RequireAuth>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="flex-1">
          <div className="container py-12 md:py-24 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">My Account</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Manage your account, view orders, and access your downloads.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Orders</h2>
                <p className="mt-2 text-muted-foreground">Check your order history.</p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/my-account/orders">View Orders</Link>
                </Button>
              </div>
               <div className="text-center">
                <h2 className="text-2xl font-bold">Downloads</h2>
                <p className="mt-2 text-muted-foreground">Access your downloads.</p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/my-account/downloads">View Downloads</Link>
                </Button>
              </div>
               <div className="text-center">
                <h2 className="text-2xl font-bold">Account Details</h2>
                <p className="mt-2 text-muted-foreground">Update your information.</p>
                <Button asChild variant="outline" className="mt-4">
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
