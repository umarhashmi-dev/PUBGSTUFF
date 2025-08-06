import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, FileText, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: "AI Research",
    description: "Instantly gather resources and insights on any topic to supercharge your writing.",
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Summarize Text",
    description: "Condense long documents and articles into key points with our powerful summarizer.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    title: "Generate Ideas",
    description: "Spark creativity and overcome writer's block with fresh, AI-generated content ideas.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How Textify AI Works: Easy & Simple
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Follow simple steps to complete your writing tasks within clicks.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{step.title}</CardTitle>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
