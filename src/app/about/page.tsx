
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Github, Instagram, Twitter, Code, ShieldCheck, Server, Palette, Briefcase, Webhook, PenTool, LayoutDashboard, Brush, Layers } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | PUBGSTUFF",
  description: "Meet the team behind PUBGSTUFF. Learn about our mission and our commitment to providing the best digital services.",
};

const teamMembers = [
  {
    name: "M.Bilal",
    role: "Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80",
    aiHint: "man portrait",
    socials: {
      twitter: "https://x.com/bilalhashim98?",
      instagram: "https://www.instagram.com/bilal.hashim.3",
      facebook: "https://www.facebook.com/bilal.hashim.3",
    },
  },
  {
    name: "Umar Hashmi",
    role: "Lead Developer",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80",
    aiHint: "person portrait",
    socials: {
      twitter: "https://x.com/dev_umar9",
      instagram: "https://www.instagram.com/umarhashmi.dev/",
      github: "https://github.com/umarhashmi-dev",
    },
  },
];

const services = [
    {
        icon: <LayoutDashboard className="w-8 h-8 text-foreground" />,
        title: "Custom Web Solutions",
        description: "We build fast, responsive, and scalable websites tailored to your business needs, from stunning landing pages to complex web applications."
    },
    {
        icon: <Brush className="w-8 h-8 text-foreground" />,
        title: "Creative UI/UX Design",
        description: "Our design team crafts intuitive and beautiful user interfaces that provide an exceptional user experience and elevate your brand's digital presence."
    },
    {
        icon: <Palette className="w-8 h-8 text-foreground" />,
        title: "Graphic Design",
        description: "From logos and branding to marketing materials, our graphic design services help you create a strong and cohesive visual identity."
    },
    {
        icon: <Server className="w-8 h-8 text-foreground" />,
        title: "Reliable RDP Services",
        description: "We offer secure and high-performance RDP services, ensuring you have reliable remote access to your digital workspace whenever you need it."
    },
    {
        icon: <Webhook className="w-8 h-8 text-foreground" />,
        title: "API Integration",
        description: "We seamlessly integrate third-party APIs to extend the functionality of your applications and streamline your business processes."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-foreground" />,
        title: "Digital Security",
        description: "Protect your digital assets with our robust security solutions. We help safeguard your data and applications from potential threats."
    },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl font-headline">
                        Your Partner in Digital Excellence
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        At PUBGSTUFF, we are a passionate team of developers, designers, and digital experts dedicated to providing top-tier services that drive growth and innovation.
                    </p>
                </div>
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image 
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974"
                        alt="Team working in an office"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="team collaboration"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Who We Are</h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                   We are a collective of creative minds and technical experts committed to delivering high-quality digital solutions. Our mission is to combine our passion for technology with creative problem-solving to build exceptional digital experiences for our clients worldwide.
                </p>
            </div>
        </section>

        <section id="team" className="py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Meet Our Team</h2>
                    <p className="mt-4 text-lg text-muted-foreground">The dedicated minds behind PUBGSTUFF.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="relative group overflow-hidden rounded-2xl shadow-lg border border-border/10">
                            <Image 
                                src={member.avatar} 
                                alt={member.name} 
                                width={500} 
                                height={500} 
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                data-ai-hint={member.aiHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-2xl font-bold text-white font-headline">{member.name}</h3>
                                <p className="text-primary-foreground/80 font-medium mb-4">{member.role}</p>
                                <div className="flex space-x-3">
                                    {member.socials.twitter && <Link href={member.socials.twitter} target="_blank" className="text-white/70 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>}
                                    {member.socials.instagram && <Link href={member.socials.instagram} target="_blank" className="text-white/70 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>}
                                    {member.socials.facebook && <Link href={member.socials.facebook} target="_blank" className="text-white/70 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>}
                                    {member.socials.github && <Link href={member.socials.github} target="_blank" className="text-white/70 hover:text-white transition-colors"><Github className="h-5 w-5" /></Link>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-secondary/50">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Services</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Comprehensive digital solutions to power your success.</p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service) => (
                        <Card key={service.title} className="bg-card hover:bg-card/90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg border-border/10">
                            <CardHeader className="p-6">
                                <div className="p-3 bg-foreground/10 rounded-lg w-fit mb-4">
                                    {service.icon}
                                </div>
                                <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0">
                                <p className="text-muted-foreground">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
