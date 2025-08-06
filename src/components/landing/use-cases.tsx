import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, PenSquare, Megaphone, BarChart, GraduationCap, Briefcase } from "lucide-react";

const useCases = [
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: "Students & Researchers",
    description: "Accelerate academic research and writing with quick summaries and resource discovery.",
  },
  {
    icon: <PenSquare className="w-8 h-8 text-primary" />,
    title: "Content Marketers",
    description: "Craft engaging blog posts, articles, and social media content with fresh ideas.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: "Copywriters",
    description: "Create compelling ad copy and product descriptions that convert.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Business Professionals",
    description: "Quickly summarize reports and generate innovative business ideas.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "SEO Specialists",
    description: "Find relevant keywords and topic clusters to boost search rankings.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "Research Content",
    description: "Enhance your content strategy for university and professional research.",
  },
];

export default function UseCases() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Multiple Use Cases of Textify AI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A versatile AI Tool with a multitude of applications.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-3">{useCase.icon}</div>
                <CardTitle className="font-headline text-xl">{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
