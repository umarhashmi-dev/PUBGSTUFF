
'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SuggestionsPage() {
  return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
                    Share a Suggestion
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Have an idea to improve our service? We'd love to hear it!
                </p>
            </div>
            
            <form>
                <div className="space-y-6">
                     <div>
                        <Label htmlFor="suggestion-title">Suggestion Title</Label>
                        <Input id="suggestion-title" placeholder="e.g., Add a new product category" className="mt-2" />
                    </div>
                     <div>
                        <Label htmlFor="suggestion-details">Details</Label>
                        <Textarea id="suggestion-details" placeholder="Please describe your suggestion in detail..." className="mt-2 min-h-32" />
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Submit Suggestion</Button>
                </div>
            </form>
        </div>
  );
}
