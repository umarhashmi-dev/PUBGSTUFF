import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    name: "Alex R.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man portrait",
    title: "A Game Changer!",
    rating: 5,
    review: "The RDP services are incredibly fast and reliable. My productivity has skyrocketed. Highly recommended for any serious developer or designer."
  },
  {
    name: "Samantha B.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    title: "Stunning Web Design",
    rating: 5,
    review: "The team at PubgStuff delivered a website that exceeded all my expectations. The design is modern, responsive, and simply beautiful."
  },
  {
    name: "Mike T.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "person portrait",
    title: "Driver Booster is a Must-Have",
    rating: 5,
    review: "My gaming PC was lagging, but after using Driver Booster, it's like I have a new machine. All my games run smoothly now. Thank you!"
  },
  {
    name: "Jessica W.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    title: "Top-Notch Graphic Design",
    rating: 5,
    review: "I needed a new logo and branding for my startup, and the graphic design service was phenomenal. The results were creative and professional."
  },
  {
    name: "David L.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man portrait",
    title: "Reliable and Secure",
    rating: 5,
    review: "I've been using their RDP for months without a single issue. It's secure, fast, and the support team is always there to help."
  },
  {
    name: "Emily C.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "person portrait",
    title: "Effortless Web Development",
    rating: 5,
    review: "Getting my website developed was a breeze. The process was transparent, and the final product was delivered on time and on budget."
  }
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
        <div className="mt-16 flex flex-col items-center justify-center relative overflow-hidden">
           <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
           <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  )
}
