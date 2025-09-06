
'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function BillingPage() {
  return (
      <div>
        <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-foreground font-headline">
                Billing Address
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
                Update your billing address here.
            </p>
        </div>
        
        <form>
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <Label htmlFor="country" className="md:text-right">Country / Region</Label>
                    <div className="md:col-span-2">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <Label className="md:text-right">Address</Label>
                    <div className="md:col-span-2 space-y-4">
                        <Input id="address" placeholder="Street address" />
                        <Input id="address-2" placeholder="Apartment, suite, etc. (optional)" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <Label className="md:text-right">City & ZIP Code</Label>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input id="city" placeholder="Town / City" />
                        <Input id="zip" placeholder="ZIP Code" />
                    </div>
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <Label htmlFor="phone" className="md:text-right">Phone</Label>
                    <div className="md:col-span-2">
                        <Input id="phone" type="tel" />
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t flex justify-end gap-4">
                <Button type="button" variant="outline" size="lg">Cancel</Button>
                <Button type="submit" size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Save changes</Button>
            </div>
        </form>
      </div>
  );
}
