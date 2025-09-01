
'use client';
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UseCases from "@/components/landing/use-cases";
import Testimonials from "@/components/landing/testimonials";

const teamMembers = [
  {
    name: "Alex Rivera",
    title: "Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    aiHint: "man portrait",
  },
  {
    name: "Samantha Bee",
    title: "Lead Designer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    aiHint: "woman portrait",
  },
  {
    name: "Mike Thompson",
    title: "Head of Engineering",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    aiHint: "person portrait",
  },
   {
    name: "Jessica Wu",
    title: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    aiHint: "woman portrait",
  }
];

const developers = [
    {
        name: "Umar Hashmi",
        title: "Full Stack Developer",
        avatar: "https://picsum.photos/200/200",
        aiHint: "male developer",
        description: "Umar is the architect of our robust backend systems and seamless frontend experiences, ensuring performance and scalability."
    },
    {
        name: "Naveed Alam",
        title: "Full Stack Developer",
        avatar: "https://picsum.photos/200/200",
        aiHint: "male designer",
        description: "Naveed specializes in crafting pixel-perfect, intuitive user interfaces that bring our designs to life with flair and precision."
    }
]

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-50">
      <Header />
      <main className="flex-1 pt-28 md:pt-32">
        <div className="container px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white opacity-60"></div>
                 <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')] bg-repeat opacity-20"></div>

                <div className="relative z-10 p-8 md:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 font-headline leading-tight">
                                We're Crafting the Future of Digital Innovation
                            </h1>
                            <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                                We are a passionate team of creators, thinkers, and builders dedicated to delivering exceptional digital experiences that drive growth and inspire change.
                            </p>
                            <div className="mt-8">
                                <Button asChild size="lg" className="bg-primary text-primary-foreground hover-shimmer-button rounded-full text-base">
                                    <Link href="/contact">
                                        Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <p className="mt-4 text-sm text-gray-500">No commitment required • Let's talk ideas</p>
                            </div>
                        </div>

                        <div className="relative">
                           <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                     <div className="flex -space-x-2">
                                        {teamMembers.map((member) => (
                                            <Avatar key={member.name} className="h-10 w-10 border-2 border-white">
                                                <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint} />
                                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                        ))}
                                    </div>
                                    <div className="ml-auto flex items-center gap-2">
                                        <div className="h-2.5 w-2.5 bg-green-400 rounded-full animate-pulse"></div>
                                        <p className="text-sm font-medium text-gray-700">Available for projects</p>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 font-headline">Meet Our Experts</h3>
                                <p className="mt-1 text-gray-500">We respond to inquiries within a few hours.</p>

                                <div className="mt-6 space-y-4">
                                    <div className="p-4 bg-gray-50 rounded-lg border">
                                        <p className="font-semibold text-gray-700">Our Mission</p>
                                        <p className="text-sm text-gray-500">To empower businesses with transformative technology.</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg border">
                                        <p className="font-semibold text-gray-700">Our Vision</p>
                                        <p className="text-sm text-gray-500">To be a global leader in digital innovation.</p>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="container px-4 mt-16 md:mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 font-headline">Meet Our Developers</h2>
                <p className="mt-4 text-lg text-gray-600">The brilliant minds bringing our ideas to life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {developers.map((dev) => (
                    <div key={dev.name} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <Avatar className="h-24 w-24 border-4 border-gray-200">
                            <AvatarImage src={dev.avatar} alt={dev.name} data-ai-hint={dev.aiHint} />
                            <AvatarFallback>{dev.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h3 className="mt-6 text-2xl font-bold text-gray-900 font-headline">{dev.name}</h3>
                        <p className="mt-1 text-base font-medium text-primary">{dev.title}</p>
                        <p className="mt-4 text-gray-600 flex-1">{dev.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="py-16 md:py-24">
            <UseCases />
        </div>
        <div className="pb-16 md:pb-24">
            <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
}
