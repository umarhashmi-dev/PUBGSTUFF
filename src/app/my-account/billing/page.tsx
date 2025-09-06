
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function BillingPage() {
  return (
      <div>
        <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
                Billing Address
            </h1>
            <p className="mt-2 text-muted-foreground">
                Update your billing information below.
            </p>
        </div>
        <form className="space-y-8">
            <Card className="bg-gray-50/50 border-gray-200">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Billing Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </CardContent>
            </Card>

            <div>
                <Button type="submit" className="hover-shimmer-button" size="lg">Save address</Button>
            </div>
        </form>
      </div>
  );
}
