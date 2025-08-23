
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Github, Instagram, Twitter, Code, Search, BarChart, Settings, Bot, PencilRuler, Users, Headset, Briefcase, Webhook, BrainCircuit, Lightbulb, PenTool, Blend } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Textify AI",
  description: "Meet the team behind Textify AI. Learn about our mission, our skills in AI and content creation, and our commitment to providing top-tier AI-powered tools.",
};

const teamMembers = [
  {
    name: "M.Bilal",
    role: "Founder & AI Strategist",
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

const skills = [
    { icon: <BrainCircuit className="w-6 h-6 text-primary" />, name: "AI/ML Integration" },
    { icon: <Code className="w-6 h-6 text-primary" />, name: "Full-Stack Development" },
    { icon: <PenTool className="w-6 h-6 text-primary" />, name: "Content Strategy" },
    { icon: <Blend className="w-6 h-6 text-primary" />, name: "UI/UX Design" },
    { icon: <Webhook className="w-6 h-6 text-primary" />, name: "API Development" },
    { icon: <Headset className="w-6 h-6 text-primary" />, name: "User Support" },
];

const services = [
    {
        icon: <Search className="w-8 h-8 text-foreground" />,
        title: "AI Research Tool",
        description: "Use AI as a tool to analyze a topic and find useful resources for writing."
    },
    {
        icon: <Bot className="w-8 h-8 text-foreground" />,
        title: "Text Summarization",
        description: "AI-powered text summarization. Users provide a text excerpt, and the AI summarizes the key points."
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-foreground" />,
        title: "Content Ideas",
        description: "AI-powered content suggestions. Based on user input, the tool generates writing ideas."
    },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="pt-24 md:pt-32 pb-12 md:pb-20 text-center bg-secondary/50">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl font-headline">
              Powering Content Creation with AI
            </h1>
            <p className="mt-4 md:mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-8 text-muted-foreground">
             At Textify AI, we are dedicated to building intelligent tools that empower writers, researchers, and creators to produce their best work, faster.
            </p>
          </div>
        </section>

        <section id="team" className="py-12 md:py-24">
            <div className="container">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Meet Our Team</h2>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">The innovative minds behind Textify AI.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="relative group overflow-hidden rounded-2xl">
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

        <section id="mission" className="py-12 md:py-24 bg-secondary/50">
            <div className="container max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Mission & Skills</h2>
                <p className="mt-4 md:mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our mission is to democratize content creation by providing powerful, intuitive, and accessible AI tools. We combine creative vision with technical expertise to deliver outstanding results.
                </p>
                <div className="mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center gap-3 p-4 md:p-6 rounded-lg bg-background shadow-sm border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                             <div className="p-3 bg-primary/10 rounded-full">
                                {skill.icon}
                            </div>
                            <span className="text-sm sm:text-base font-medium text-center text-muted-foreground">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="why-us" className="py-12 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Core Features of Textify AI</h2>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">A versatile AI tool with a multitude of use cases.</p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((useCase) => (
                        <Card key={useCase.title} className="bg-card/50 hover:bg-card transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg border-transparent hover:border-border">
                            <CardHeader className="p-6">
                                <div className="p-3 bg-foreground/10 rounded-lg w-fit mb-4">
                                    {useCase.icon}
                                </div>
                                <CardTitle className="text-lg sm:text-xl font-headline">{useCase.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0">
                                <p className="text-muted-foreground text-sm sm:text-base">{useCase.description}</p>
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
