
'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function BillingPage() {
  return (
      <div>
        <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
                Billing
            </h1>
            <p className="mt-2 text-muted-foreground">
                Manage your billing information and address.
            </p>
        </div>
        <Separator />
        
        <form className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold font-headline">Billing Address</h3>
                    <p className="text-sm text-muted-foreground mt-1">Update your billing address here.</p>
                </div>
                <div className="md:col-span-2 space-y-6">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" />
                        </div>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="company">Company name (optional)</Label>
                        <Input id="company" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="country">Country / Region</Label>
                        <Select>
                            <SelectTrigger id="country">
                                <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="us">United States</SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                                <SelectItem value="pk">Pakistan</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address">Street address</Label>
                        <Input id="address" placeholder="House number and street name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="city">Town / City</Label>
                        <Input id="city" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" />
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
