
'use client';
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Brush, LayoutDashboard, Server, Zap, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
]

const testimonials = [
  {
    name: "Alex R.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    aiHint: "man portrait",
    review: "The RDP services are incredibly fast and reliable. My productivity has skyrocketed. Highly recommended for any serious developer or designer."
  },
  {
    name: "Samantha B.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    aiHint: "woman portrait",
    review: "The team at PubgStuff delivered a website that exceeded all my expectations. The design is modern, responsive, and simply beautiful."
  },
  {
    name: "Mike T.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
    aiHint: "person portrait",
    review: "My gaming PC was lagging, but after using Driver Booster, it's like I have a new machine. All my games run smoothly now. Thank you!"
  }
];


export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 bg-secondary/30">
            <div className="container px-4 text-center">
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
                <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-muted-foreground">
                    At PUBGSTUFF, we are a passionate team of developers, designers, and digital experts dedicated to providing top-tier services that drive growth and innovation.
                </p>
                <div className="mt-10">
                    <Button size="lg" asChild className="hover-shimmer-button">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Hero Image Section */}
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <Image 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Our Team"
                        fill
                        className="object-cover"
                        data-ai-hint="team collaboration office"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
            </div>
        </section>
        
        {/* Mission Vision Values Section */}
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
                    <div>
                        <h3 className="text-2xl font-bold font-headline text-foreground">Our Mission</h3>
                        <p className="mt-2 text-muted-foreground">To empower businesses and individuals with innovative and reliable digital solutions that drive success and foster growth in a connected world.</p>
                    </div>
                     <div>
                        <h3 className="text-2xl font-bold font-headline text-foreground">Our Vision</h3>
                        <p className="mt-2 text-muted-foreground">To be a leading provider of comprehensive digital services, recognized for our commitment to quality, customer satisfaction, and technological excellence.</p>
                    </div>
                     <div>
                        <h3 className="text-2xl font-bold font-headline text-foreground">Our Values</h3>
                        <p className="mt-2 text-muted-foreground">Innovation, Integrity, and Customer-Centricity. We are committed to pushing boundaries, operating with transparency, and putting our clients' needs first.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Features/Highlights Section */}
        <section id="services" className="py-16 md:py-24 bg-secondary/30">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <TextAnimate
                        as="h2"
                        animation={{
                        hidden: { opacity: 0, filter: "blur(4px)" },
                        show: { opacity: 1, filter: "blur(0px)" },
                        }}
                        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline"
                    >
                        What We Do
                    </TextAnimate>
                    <p className="mt-4 text-lg text-muted-foreground">We offer a wide range of services to meet your digital needs.</p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-card hover:bg-card/90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg border-border/10 text-center">
                            <CardHeader className="p-6 items-center">
                                <div className="p-4 bg-primary/10 rounded-full w-fit mb-4">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-xl font-headline">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0">
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <TextAnimate
                        as="h2"
                        animation={{
                        hidden: { opacity: 0, filter: "blur(4px)" },
                        show: { opacity: 1, filter: "blur(0px)" },
                        }}
                        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline"
                    >
                        Trusted by Creatives & Businesses
                    </TextAnimate>
                    <p className="mt-4 text-lg text-muted-foreground">Here's what some of our clients have to say about their experience.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-card flex flex-col p-6">
                            <CardContent className="p-0 flex-1">
                                <p className="text-muted-foreground italic">"{testimonial.review}"</p>
                            </CardContent>
                            <div className="flex items-center mt-6">
                                <Avatar className="h-12 w-12 mr-4">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
                    <HeartHandshake className="mx-auto h-12 w-12 mb-6" />
                    <TextAnimate
                        as="h2"
                        animation={{
                        hidden: { opacity: 0, filter: "blur(4px)" },
                        show: { opacity: 1, filter: "blur(0px)" },
                        }}
                        className="text-3xl font-bold font-headline"
                    >
                        Ready to Start a Project?
                    </TextAnimate>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                        Let's work together to bring your ideas to life. Reach out to us today to discuss your project and get a free consultation.
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
        </section>

      </main>
      <Footer />
    </div>
  );
}
