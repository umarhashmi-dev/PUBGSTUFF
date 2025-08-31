
'use client';
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, Brush, Server, Zap, HeartHandshake, ArrowRight, Star, Briefcase, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

const features = [
    {
        icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
        title: "Web Development",
        description: "We build fast, responsive, and scalable websites tailored to your business needs."
    },
    {
        icon: <Brush className="w-8 h-8 text-primary" />,
        title: "UI/UX & Graphic Design",
        description: "Our team crafts intuitive and beautiful user interfaces that elevate your brand."
    },
    {
        icon: <Server className="w-8 h-8 text-primary" />,
        title: "Reliable RDP Services",
        description: "Secure and high-performance RDP services for reliable remote access."
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Driver Booster",
        description: "Enhance your system's performance with our automatic driver update solutions."
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
    { value: "150+", label: "Projects Completed", icon: <Briefcase className="w-10 h-10 text-primary" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Star className="w-10 h-10 text-primary" /> },
    { value: "50+", label: "Happy Clients", icon: <Users className="w-10 h-10 text-primary" /> },
];

const teamMembers = [
    { name: "John Doe", role: "Lead Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop", aiHint: "male portrait" },
    { name: "Jane Smith", role: "UI/UX Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop", aiHint: "female portrait" },
    { name: "Sam Wilson", role: "DevOps Engineer", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=250&auto=format&fit=crop", aiHint: "man face" },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1 overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-primary/10 text-primary mb-4">
                            ABOUT US
                        </span>
                        <TextAnimate
                            as="h1"
                            animation={{
                            hidden: { opacity: 0, filter: "blur(4px)" },
                            show: { opacity: 1, filter: "blur(0px)" },
                            }}
                            className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl font-headline"
                        >
                            We're Building the Future of Digital Services.
                        </TextAnimate>
                        <p className="mt-6 text-lg max-w-2xl mx-auto leading-8 text-muted-foreground">
                            At PubgStuff, we are a passionate team of developers, designers, and digital experts dedicated to providing top-tier services that drive growth and innovation.
                        </p>
                        <div className="mt-10">
                            <Button size="lg" asChild className="hover-shimmer-button">
                                <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Image Showcase */}
         <section className="pb-16 md:pb-24">
            <div className="container px-4">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                         <Image 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Our Team Collaborating"
                            fill
                            className="object-cover"
                            data-ai-hint="team collaboration office"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                         <motion.div 
                            key={index} 
                            className="bg-card p-8 rounded-xl shadow-lg flex items-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-4 bg-primary/10 rounded-full">{stat.icon}</div>
                            <div>
                                <h3 className="text-4xl font-bold font-headline text-foreground">{stat.value}</h3>
                                <p className="mt-1 text-muted-foreground">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Mission & Vision</h2>
                        <p className="mt-6 text-lg text-muted-foreground">To empower businesses and individuals with innovative and reliable digital solutions that drive success and foster growth in a connected world.</p>
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                                <span className="text-muted-foreground">Commitment to quality and technological excellence.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                                <span className="text-muted-foreground">Focus on customer satisfaction and long-term partnerships.</span>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                         initial={{ opacity: 0, scale: 0.9 }}
                         whileInView={{ opacity: 1, scale: 1 }}
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
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-secondary/30">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">What We Do Best</h2>
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
                        <Card className="bg-card hover:bg-card/90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border-border/10 text-center h-full flex flex-col">
                            <CardHeader className="p-6 items-center">
                                <div className="p-4 bg-primary/10 rounded-full w-fit mb-4">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-xl font-headline">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 flex-1">
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Trusted by Creatives & Businesses</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Here's what our happy clients have to say about their experience.</p>
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
                            <Card className="bg-secondary/30 flex flex-col p-6 h-full border-border/10 shadow-sm">
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
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_70%)]"></div>
                    <div className="relative">
                        <HeartHandshake className="mx-auto h-12 w-12 mb-6" />
                        <h2 className="text-3xl font-bold font-headline">Ready to Start Your Project?</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                            Let's collaborate to bring your ideas to life. Reach out today for a free consultation and let's build something amazing together.
                        </p>
                        <div className="mt-8">
                             <Button asChild size="lg" variant="secondary" className="hover-shimmer-button text-base">
                                 <Link href="/contact">
                                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                                 </Link>
                             </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

    