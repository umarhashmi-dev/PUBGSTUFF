import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

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

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mt-12 mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

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
        <AnimatedTooltipPreview />
        <div className="mt-8 flex flex-col items-center justify-center relative overflow-hidden">
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
