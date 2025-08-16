import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Github, Instagram, Twitter, Code, Search, BarChart, Settings, Bot, PencilRuler, Users, Headset } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Textify AI",
  description: "Meet the team behind Textify AI. Learn about our mission, our skills in web development, design, and our commitment to providing top-tier AI-powered tools.",
};

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

const skills = [
    { icon: <BarChart className="w-5 h-5 text-foreground" />, name: "Search Engine Optimization (SEO)" },
    { icon: <Users className="w-5 h-5 text-foreground" />, name: "Social Media Marketing (SMM)" },
    { icon: <Settings className="w-5 h-5 text-foreground" />, name: "Social Media Optimization (SMO)" },
    { icon: <Code className="w-5 h-5 text-foreground" />, name: "Full Stack Web Design" },
    { icon: <Headset className="w-5 h-5 text-foreground" />, name: "24/7 WhatsApp Support" },
];

const services = [
    {
        icon: <Code className="w-8 h-8 text-foreground" />,
        title: "Web Development",
        description: "At PubgStuff, we offer comprehensive web development services to create your web-based product."
    },
    {
        icon: <PencilRuler className="w-8 h-8 text-foreground" />,
        title: "Web Design",
        description: "At PubgStuff, we offer comprehensive web Designing services to create your online appearance."
    },
    {
        icon: <Bot className="w-8 h-8 text-foreground" />,
        title: "SMM Service",
        description: "At PubgStuff, we offer comprehensive SMM services to manage your social appearance."
    },
    {
        icon: <BarChart className="w-8 h-8 text-foreground" />,
        title: "Ads & Marketing Tools",
        description: "At PubgStuff, we offer Ads & Marketing Tools & services to create your achive your social goals."
    },
    {
        icon: <Settings className="w-8 h-8 text-foreground" />,
        title: "Website SEO",
        description: "At PubgStuff, we provide SEO services to boost your SEO score with optimized metadata for social ranking."
    },
    {
        icon: <Search className="w-8 h-8 text-foreground" />,
        title: "Research Content",
        description: "At PubgStuff, we offer content research tools to enhance your content strategy for university and researches."
    }
]

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 text-center bg-secondary/50">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
              About Textify AI
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-muted-foreground">
             Have a question or need help? Reach out to our team, and we’ll assist you as soon as possible!
            </p>
          </div>
        </section>

        <section id="team" className="py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Meet Our Team</h2>
                    <p className="mt-4 text-lg text-muted-foreground">The minds behind the magic.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {teamMembers.map((member) => (
                        <Card key={member.name} className="text-center overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                            <CardContent className="p-8">
                                <Image
                                    src={member.avatar}
                                    alt={member.name}
                                    width={120}
                                    height={120}
                                    data-ai-hint={member.aiHint}
                                    className="rounded-full w-32 h-32 mx-auto mb-6 border-4 border-background shadow-lg"
                                />
                                <h3 className="text-2xl font-bold font-headline">{member.name}</h3>
                                <p className="text-primary font-medium">{member.role}</p>
                                <div className="flex justify-center space-x-4 mt-6">
                                    {member.socials.twitter && <Link href={member.socials.twitter} target="_blank"><Twitter className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" /></Link>}
                                    {member.socials.instagram && <Link href={member.socials.instagram} target="_blank"><Instagram className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" /></Link>}
                                    {member.socials.facebook && <Link href={member.socials.facebook} target="_blank"><Facebook className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" /></Link>}
                                    {member.socials.github && <Link href={member.socials.github} target="_blank"><Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" /></Link>}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="mission" className="py-16 md:py-24 bg-secondary/50">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full aspect-video max-w-lg mx-auto">
                        <Image src="https://placehold.co/600x400.png" alt="Our Mission" layout="fill" className="rounded-lg shadow-lg object-cover" data-ai-hint="team brainstorming office" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Mission & Skills</h2>
                        <p className="mt-6 text-lg text-muted-foreground">
                            As a 25-year-old Web Designer, Content Writer, YouTuber, and Graphic Designer, our founder's mission is to provide the best services in the industry. We combine creative design with technical expertise to deliver outstanding results.
                        </p>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {skills.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-3">
                                    <div className="p-2 bg-foreground/10 rounded-full">
                                        {skill.icon}
                                    </div>
                                    <span className="text-base font-medium text-muted-foreground">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="why-us" className="py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Multiple Use Cases Of Textify AI</h2>
                    <p className="mt-4 text-lg text-muted-foreground">A versatile AI Tool with a multitude of use cases.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((useCase) => (
                    <Card key={useCase.title} className="bg-card/50 hover:bg-card transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg border-transparent hover:border-border">
                        <CardHeader className="p-6">
                            <div className="p-3 bg-foreground/10 rounded-lg w-fit mb-4">
                                {useCase.icon}
                            </div>
                            <CardTitle className="text-xl font-headline">{useCase.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 pt-0">
                            <p className="text-muted-foreground">{useCase.description}</p>
                        </CardContent>
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
