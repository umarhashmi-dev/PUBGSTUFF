
'use client';
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, Brush, Server, Zap, ArrowRight, Star, Briefcase, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
    {
        icon: <LayoutDashboard className="w-6 h-6 text-primary" />,
        title: "Web Development",
        description: "Building fast, responsive, and scalable websites tailored to your needs."
    },
    {
        icon: <Brush className="w-6 h-6 text-primary" />,
        title: "UI/UX Design",
        description: "Crafting intuitive and beautiful user interfaces that elevate your brand."
    },
    {
        icon: <Server className="w-6 h-6 text-primary" />,
        title: "Reliable RDP Services",
        description: "Secure and high-performance remote access for professionals."
    },
    {
        icon: <Zap className="w-6 h-6 text-primary" />,
        title: "Driver Booster",
        description: "Enhancing system performance with automatic driver updates."
    },
];

const testimonials = [
  {
    name: "Alex Rivera",
    title: "Lead Developer, TechCorp",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    aiHint: "man portrait",
    review: "The RDP services are incredibly fast and reliable. My productivity has skyrocketed. Highly recommended for any serious developer or designer."
  },
  {
    name: "Samantha Bee",
    title: "Marketing Director, Innovate Ltd.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    aiHint: "woman portrait",
    review: "The team at PubgStuff delivered a website that exceeded all my expectations. The design is modern, responsive, and simply beautiful."
  },
  {
    name: "Mike Thompson",
    title: "Pro Gamer",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    aiHint: "person portrait",
    review: "My gaming PC was lagging, but after using Driver Booster, it's like I have a new machine. All my games run smoothly now. Thank you!"
  }
];

const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Years of Experience" },
];


export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-secondary/30">
      <Header />
      <main className="flex-1">
        <div className="container py-24 sm:py-32">
            {/* Hero Section */}
            <motion.section 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center lg:text-left">
                    <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-primary/10 text-primary mb-4">
                        WHO WE ARE
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl font-headline">
                        Pioneering Digital Excellence
                    </h1>
                    <p className="mt-6 text-lg max-w-xl mx-auto lg:mx-0 leading-8 text-muted-foreground">
                        We are a passionate team of developers, designers, and strategists dedicated to delivering high-quality digital solutions that drive growth and innovation for our clients.
                    </p>
                    <div className="mt-10">
                        <Button size="lg" asChild className="hover-shimmer-button">
                            <Link href="/contact">Work With Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                    <Image 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Our Team Collaborating"
                        fill
                        className="object-cover"
                        data-ai-hint="team collaboration office"
                    />
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section 
                className="mt-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <Card className="bg-card/80 backdrop-blur-sm border-border/20 shadow-lg">
                    <CardContent className="p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <h3 className="text-4xl font-bold font-headline text-primary">{stat.value}</h3>
                                    <p className="mt-1 text-muted-foreground">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.section>

             {/* Mission & Vision Section */}
            <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
                        <Image 
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                            alt="Team planning"
                            fill
                            className="object-cover"
                            data-ai-hint="team planning meeting"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Mission & Vision</h2>
                    <p className="mt-6 text-lg text-muted-foreground">To empower businesses and individuals with innovative and reliable digital solutions that drive success and foster growth in a connected world.</p>
                    <ul className="mt-6 space-y-4 inline-block text-left">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">Commitment to quality and technological excellence.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">Focus on customer satisfaction and long-term partnerships.</span>
                        </li>
                    </ul>
                </motion.div>
            </section>

             {/* Services Section */}
            <section className="mt-24">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Core Services</h2>
                    <p className="mt-4 text-lg text-muted-foreground">We offer a wide range of services to meet your digital needs.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-card hover:bg-card/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border-border/10 h-full flex flex-col">
                            <CardHeader className="p-6 flex-row items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-lg font-headline">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 flex-1">
                                <p className="text-muted-foreground text-sm">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="mt-24">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">What Our Clients Say</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Real stories from people we've helped succeed.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                            <Card className="bg-card flex flex-col p-6 h-full border-border/10 shadow-sm">
                                <CardContent className="p-0 flex-1">
                                    <p className="text-muted-foreground italic">"{testimonial.review}"</p>
                                </CardContent>
                                <div className="flex items-center mt-6 pt-6 border-t">
                                    <Avatar className="h-12 w-12 mr-4">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="mt-24">
                <div className="bg-card text-center rounded-2xl p-8 md:p-12 border shadow-lg">
                    <h2 className="text-3xl font-bold font-headline text-foreground">Ready to Build Your Future?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Let's collaborate to bring your ideas to life. Reach out today for a free consultation and let's create something amazing together.
                    </p>
                    <div className="mt-8">
                         <Button asChild size="lg" className="hover-shimmer-button text-base">
                             <Link href="/contact">
                                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
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
