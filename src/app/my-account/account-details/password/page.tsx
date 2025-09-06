
'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PasswordPage() {
  return (
      <div>
        <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-foreground font-headline">
                Password
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
                Update your password here. Leave blank to keep the current one.
            </p>
        </div>
        
        <form>
             <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <Label htmlFor="current-password" className="md:text-right">Current password</Label>
                    <div className="md:col-span-2">
                        <Input id="current-password" type="password" />
                    </div>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <Label htmlFor="new-password" className="md:text-right">New password</Label>
                    <div className="md:col-span-2">
                        <Input id="new-password" type="password" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <Label htmlFor="confirm-password" className="md:text-right">Confirm new password</Label>
                    <div className="md:col-span-2">
                        <Input id="confirm-password" type="password" />
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
