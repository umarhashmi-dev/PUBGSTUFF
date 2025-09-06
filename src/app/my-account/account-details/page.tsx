
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AccountDetailsPage() {
  return (
      <div>
        <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
                Account Details
            </h1>
            <p className="mt-2 text-muted-foreground">
                Update your account details and password below.
            </p>
        </div>
        <form className="space-y-8">
            <Card className="bg-gray-50/50 border-gray-200">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" defaultValue="Doe" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-gray-50/50 border-gray-200">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Password Change</CardTitle>
                    <CardDescription>Leave fields blank to keep your current password.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="current-password">Current password</Label>
                        <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new-password">New password</Label>
                        <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm new password</Label>
                        <Input id="confirm-password" type="password" />
                    </div>
                </CardContent>
            </Card>

            <div>
                <Button type="submit" className="hover-shimmer-button" size="lg">Save changes</Button>
            </div>
        </form>
      </div>
  );
}
