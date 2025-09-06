
'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ReportingPage() {
  return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
                    Submit a Report
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Have an issue? Let us know by filling out the form below.
                </p>
            </div>
            
            <form>
                <div className="space-y-6">
                     <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="e.g., Issue with a recent order" className="mt-2" />
                    </div>
                     <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Please describe the issue in detail..." className="mt-2 min-h-32" />
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Submit Report</Button>
                </div>
            </form>
        </div>
  );
}
