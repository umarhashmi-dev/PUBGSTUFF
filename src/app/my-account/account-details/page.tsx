import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import RequireAuth from "@/components/require-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AccountDetailsPage() {
  return (
    <RequireAuth>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="flex-1">
          <div className="container py-12 md:py-24 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Account Details</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Update your account details below.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input type="text" id="first-name" name="first-name" defaultValue="John" required />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input type="text" id="last-name" name="last-name" defaultValue="Doe" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" name="email" defaultValue="john.doe@example.com" required />
                </div>
                <fieldset>
                  <legend className="text-lg font-semibold mb-4">Password change</legend>
                   <div className="space-y-6">
                      <div>
                        <Label htmlFor="current-password">Current password (leave blank to leave unchanged)</Label>
                        <Input type="password" id="current-password" name="current-password" />
                      </div>
                      <div>
                        <Label htmlFor="new-password">New password (leave blank to leave unchanged)</Label>
                        <Input type="password" id="new-password" name="new-password" />
                      </div>
                      <div>
                        <Label htmlFor="confirm-password">Confirm new password</Label>
                        <Input type="password" id="confirm-password" name="confirm-password" />
                      </div>
                   </div>
                </fieldset>
                <Button type="submit" className="w-full hover-shimmer-button" size="lg">Save changes</Button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </RequireAuth>
  );
}
