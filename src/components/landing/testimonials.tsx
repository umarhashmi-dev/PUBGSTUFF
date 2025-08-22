import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John D.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man portrait",
    title: "Amazing Experience!",
    rating: 5,
    review: "The process was so smooth and I got my digital items instantly. Highly recommended for any gamer out there!"
  },
  {
    name: "Sarah L.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    title: "Best Prices",
    rating: 5,
    review: "Found the best deals here for my favorite game skins. The prices are unbeatable and the service is top-notch."
  },
  {
    name: "Mike T.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "person portrait",
    title: "Fast and Reliable",
    rating: 5,
    review: "I was skeptical at first, but the delivery was instant. I'm a repeat customer now. Great job!"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What People Say About Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Real stories from satisfied customers.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <div className="flex text-primary">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                  </div>
                </div>
                <h4 className="font-headline font-semibold text-xl mb-2">{testimonial.title}</h4>
                <p className="text-muted-foreground text-sm sm:text-base">{testimonial.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
