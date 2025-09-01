
'use client';
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Zap, Target, Eye, Users, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const values = [
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Innovation",
        description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
        icon: <Target className="w-8 h-8 text-primary" />,
        title: "Excellence",
        description: "We are committed to the highest standards of quality in everything we do."
    },
    {
        icon: <Eye className="w-8 h-8 text-primary" />,
        title: "Transparency",
        description: "We believe in open communication and building trust with our clients and partners."
    },
];

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

const timeline = [
    {
        year: "2020",
        icon: <Lightbulb className="w-6 h-6 text-primary" />,
        title: "Idea & Foundation",
        description: "The journey began with a simple idea to revolutionize the digital landscape. The foundations of our company were laid with a small, passionate team."
    },
    {
        year: "2022",
        icon: <Users className="w-6 h-6 text-primary" />,
        title: "First 100 Clients",
        description: "We celebrated a major milestone by onboarding our 100th client, proving our commitment to delivering exceptional value and building lasting relationships."
    },
    {
        year: "2024",
        icon: <TrendingUp className="w-6 h-6 text-primary" />,
        title: "Expanding Horizons",
        description: "We expanded our service offerings, embraced new technologies, and grew our team to meet the evolving needs of the digital world."
    }
];

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
            <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Our Team Collaborating"
                fill
                className="object-cover"
                data-ai-hint="team collaboration office"
                priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <motion.div 
                className="relative z-20 text-white px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-7xl font-headline">
                    We're Building the Future of Digital
                </h1>
                <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-white/90">
                    We are a collective of thinkers, creators, and innovators dedicated to crafting exceptional digital experiences that drive progress and inspire change.
                </p>
            </motion.div>
        </section>

        <div className="container py-16 sm:py-24">
            
            {/* Our Story Section */}
            <section className="mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-4">Our Story</h2>
                        <p className="text-lg text-muted-foreground">
                            Founded on the principles of innovation and excellence, our mission is to empower businesses and individuals with transformative digital solutions. We believe in the power of technology to create opportunities and solve complex challenges. Our journey is one of continuous learning, adaptation, and a relentless pursuit of perfection. We're not just a company; we're a partner in your success.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-card"
                    >
                         <Image 
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                            alt="Team planning"
                            fill
                            className="object-cover"
                            data-ai-hint="team planning meeting"
                        />
                    </motion.div>
                </div>
            </section>
            
            {/* Our Values Section */}
            <section className="mb-24 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-12">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-card hover:bg-card/90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border-border/10 p-6 h-full">
                                <div className="p-4 bg-primary/10 rounded-lg w-fit mb-4 mx-auto">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold font-headline">{value.title}</h3>
                                <p className="mt-2 text-muted-foreground">{value.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
            
            {/* Meet Our Team Section */}
            <section className="mb-24 text-center">
                 <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-12">Meet Our Team</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center group"
                        >
                            <Avatar className="h-24 w-24 mb-4 border-4 border-card group-hover:border-primary transition-all duration-300">
                                <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
                            <p className="text-sm text-primary">{member.title}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Our Journey Section */}
            <section className="mb-24">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-12 text-center">Our Journey</h2>
                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative flex items-center mb-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className={`flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="p-4 bg-card rounded-lg border shadow-sm">
                                        <h3 className="font-bold text-lg font-headline">{item.title}</h3>
                                        <p className="text-muted-foreground mt-1">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-background rounded-full border-2 border-primary flex items-center justify-center">
                               <div className="text-lg font-bold font-headline">{item.year}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section>
                <div className="bg-card text-center rounded-2xl p-8 md:p-12 border shadow-lg">
                    <h2 className="text-3xl font-bold font-headline text-foreground">Join Us on Our Mission</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        We're always looking for passionate people to join our team and partners to collaborate with. Let's build the future together.
                    </p>
                    <div className="mt-8">
                         <Button asChild size="lg" className="hover-shimmer-button text-base">
                             <Link href="/contact">
                                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                             </Link>
                         </Button>
                    </div>
                </div>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    