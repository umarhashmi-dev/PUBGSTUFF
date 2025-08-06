import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Robert Fox",
    role: "Medical Assistant",
    text: "Textify AI has been a game-changer for my research papers. The summarization tool saves me hours of reading, and the research assistant finds sources I would have missed. Highly recommended for any student!",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    name: "Courtney Henry",
    role: "Content Creator",
    text: "As a content creator, I'm always looking for new ideas. Textify AI's idea generator is my secret weapon. The support team is also fantastic and always responsive!",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    name: "Cody Fisher",
    role: "President of Sales",
    text: "Our sales team uses Textify AI to research potential clients and summarize industry reports. It's an invaluable tool for staying ahead of the curve and preparing for meetings.",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    name: "Annette Black",
    role: "Marketing Manager",
    text: "We integrated Textify AI into our content workflow, and the results are amazing. The quality of our blog posts has improved, and our team is more productive than ever.",
    avatar: "https://placehold.co/100x100.png"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What People Say About Textify AI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from our satisfied users who have transformed their workflow.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="h-full shadow-lg">
                    <CardContent className="flex flex-col items-start gap-4 p-6 pt-6 h-full">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                      </div>
                      <p className="text-muted-foreground flex-grow">"{testimonial.text}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait"/>
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
