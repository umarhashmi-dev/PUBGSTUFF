
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function AccountDetailsPage() {
  return (
      <div>
        <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
                Settings
            </h1>
            <p className="mt-2 text-muted-foreground">
                Manage your account settings and preferences.
            </p>
        </div>
        <Separator />
        
        <form className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold font-headline">Personal Info</h3>
                    <p className="text-sm text-muted-foreground mt-1">Update your photo and personal details here.</p>
                </div>
                <div className="md:col-span-2 space-y-6">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" defaultValue="Julija" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" defaultValue="Jelicanin" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="julijajelicanin@gmail.com" />
                    </div>
                </div>
            </div>

            <Separator className="my-8" />
            
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold font-headline">Password</h3>
                    <p className="text-sm text-muted-foreground mt-1">Update your password here. Leave blank to keep the current one.</p>
                </div>
                <div className="md:col-span-2 space-y-6">
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
                </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
                <Button type="button" variant="outline" size="lg">Cancel</Button>
                <Button type="submit" size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Save changes</Button>
            </div>
        </form>
      </div>
  );
}
