
'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UploadCloud } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AccountDetailsPage() {
  return (
      <div>
        <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-foreground font-headline">
                Personal Info
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
                Update your photo and personal details here.
            </p>
        </div>
        
        <form>
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <Label className="md:text-right">Name</Label>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input id="first-name" defaultValue="Julija" />
                        <Input id="last-name" defaultValue="Jelicanin" />
                    </div>
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <Label htmlFor="email" className="md:text-right">Email</Label>
                    <div className="md:col-span-2">
                        <Input id="email" type="email" defaultValue="julijajelicanin@gmail.com" />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <div className="md:text-right">
                        <Label>Your Photo</Label>
                        <p className="text-xs text-muted-foreground mt-1">This will be displayed on your profile.</p>
                    </div>
                    <div className="md:col-span-2 flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                           <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80" />
                           <AvatarFallback>JJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <label htmlFor="photo-upload" className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <UploadCloud className="w-6 h-6 mb-2 text-gray-500" />
                                    <p className="mb-1 text-sm text-gray-500 font-semibold">Click to upload or drag and drop</p>
                                    <p className="text-xs text-gray-500">SVG, PNG or JPG (max. 800x400px)</p>
                                </div>
                                <input id="photo-upload" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <Label htmlFor="role" className="md:text-right">Role</Label>
                    <div className="md:col-span-2">
                        <Input id="role" defaultValue="Customer" readOnly className="bg-gray-100 cursor-not-allowed" />
                    </div>
                </div>

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

            </div>

            <div className="mt-8 pt-6 border-t flex justify-end gap-4">
                <Button type="button" variant="outline" size="lg">Cancel</Button>
                <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Save changes</Button>
            </div>
        </form>
      </div>
  );
}
