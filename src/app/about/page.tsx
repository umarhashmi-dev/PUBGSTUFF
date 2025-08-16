
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Github, Instagram, Twitter, Code, Search, BarChart, Settings, Bot, PencilRuler, Users, Headset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "M.Bilal",
    role: "Founder",
    avatar: "https://placehold.co/200x200.png",
    aiHint: "man portrait professional",
    socials: {
      twitter: "https://x.com/bilalhashim98?",
      instagram: "https://www.instagram.com/bilal.hashim.3",
      facebook: "https://www.facebook.com/bilal.hashim.3",
    },
  },
  {
    name: "Umar Hashmi",
    role: "Developer",
    avatar: "https://placehold.co/200x200.png",
    aiHint: "man portrait developer",
    socials: {
      twitter: "https://x.com/dev_umar9",
      instagram: "https://www.instagram.com/umarhashmi.dev/",
      github: "https://github.com/umarhashmi-dev",
    },
  },
];

const services = [
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "Web Development",
        description: "At PubgStuff, we offer comprehensive web development services to create your web-based product."
    },
    {
        icon: <PencilRuler className="w-8 h-8 text-primary" />,
        title: "Web Design",
        description: "At PubgStuff, we offer comprehensive web Designing services to create your online appearance."
    },
    {
        icon: <Bot className="w-8 h-8 text-primary" />,
        title: "SMM Service",
        description: "At PubgStuff, we offer comprehensive SMM services to manage your social appearance."
    },
    {
        icon: <BarChart className="w-8 h-8 text-primary" />,
        title: "Ads & Marketing Tools",
        description: "At PubgStuff, we offer Ads & Marketing Tools & services to create your achive your social goals."
    },
    {
        icon: <Settings className="w-8 h-8 text-primary" />,
        title: "Website SEO",
        description: "At PubgStuff, we provide SEO services to boost your SEO score with optimized metadata for social ranking."
    },
    {
        icon: <Search className="w-8 h-8 text-primary" />,
        title: "Research Content",
        description: "At PubgStuff, we offer content research tools to enhance your content strategy for university and researches."
    }
]

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 text-center bg-primary/5">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-muted-foreground">
             Have a question or need help? Reach out to our team at PUBGStuff, and we’ll assist you as soon as possible!
            </p>
          </div>
        </section>

        <section id="team" className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Meet Our Team</h2>
                    <p className="mt-4 text-lg text-muted-foreground">The minds behind the magic.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {teamMembers.map((member) => (
                        <Card key={member.name} className="text-center group overflow-hidden">
                            <div className="h-48 bg-primary/10 relative">
                                <Image 
                                    src={member.avatar} 
                                    alt={member.name} 
                                    width={150} 
                                    height={150}
                                    data-ai-hint={member.aiHint}
                                    className="rounded-full w-36 h-36 border-4 border-white absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-lg group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardContent className="pt-24 pb-8">
                                <h3 className="text-2xl font-bold">{member.name}</h3>
                                <p className="text-primary font-medium">{member.role}</p>
                                <div className="flex justify-center space-x-4 mt-6">
                                    {member.socials.twitter && <Link href={member.socials.twitter} target="_blank"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>}
                                    {member.socials.instagram && <Link href={member.socials.instagram} target="_blank"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>}
                                    {member.socials.facebook && <Link href={member.socials.facebook} target="_blank"><Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>}
                                    {member.socials.github && <Link href={member.socials.github} target="_blank"><Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="mission" className="py-20 md:py-28 bg-primary/5">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <Image src="https://placehold.co/600x600.png" alt="Our Mission" layout="fill" className="rounded-lg shadow-lg" data-ai-hint="team collaboration abstract" />
                    </div>
                    <div className="text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Mission &amp; Skills</h2>
                        <p className="mt-6 text-lg text-muted-foreground">
                            As a 25-year-old Web Designer, Content Writer, YouTuber, and Graphic Designer, our founder's mission is to provide the best services in the industry. We specialize in:
                        </p>
                        <ul className="mt-6 space-y-4 text-lg text-muted-foreground">
                            <li className="flex items-center gap-3"><BarChart className="w-6 h-6 text-primary" /> Search Engine Optimization (SEO)</li>
                            <li className="flex items-center gap-3"><Users className="w-6 h-6 text-primary" /> Social Media Marketing (SMM)</li>
                            <li className="flex items-center gap-3"><Settings className="w-6 h-6 text-primary" /> Social Media Optimization (SMO)</li>
                            <li className="flex items-center gap-3"><Code className="w-6 h-6 text-primary" /> Full Stack Web Design</li>
                            <li className="flex items-center gap-3"><Headset className="w-6 h-6 text-primary" /> 24/7 WhatsApp Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="why-us" className="py-20 md:py-28">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Multiple Use Cases Of PubgStuff</h2>
                    <p className="mt-4 text-lg text-muted-foreground">A versatile AI Tool with a multitude of use cases.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((useCase) => (
                    <Card key={useCase.title} className="bg-card/50 hover:bg-card transition-colors duration-300 transform hover:-translate-y-1">
                        <CardHeader className="flex flex-row items-start gap-4 p-6">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                {useCase.icon}
                            </div>
                            <div>
                                <CardTitle>{useCase.title}</CardTitle>
                                <p className="text-muted-foreground mt-2">{useCase.description}</p>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
