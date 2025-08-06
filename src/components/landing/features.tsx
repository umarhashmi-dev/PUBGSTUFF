import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "AI-Powered Content Research",
    description: "Our AI Research Tool scours the web to bring you the most relevant articles, studies, and data for your topic. Say goodbye to manual searching and hello to instant insights.",
    link: "#",
    linkText: "Start Researching",
    image: "https://placehold.co/500x500.png",
    imageAlt: "AI Research illustration",
    aiHint: "research analysis"
  },
  {
    title: "Effortless Text Summarization",
    description: "Effortlessly summarize long texts. Paste your content and let our AI extract the crucial points, saving you time and effort while ensuring you grasp the core message.",
    link: "#",
    linkText: "Summarize Now",
    image: "https://placehold.co/500x500.png",
    imageAlt: "Text Summarization illustration",
    aiHint: "document summary"
  },
  {
    title: "Creative Content Idea Generation",
    description: "Stuck for ideas? Our AI generates a list of engaging topics, headlines, and angles based on your keywords, ensuring your content is always fresh and relevant.",
    link: "#",
    linkText: "Generate Ideas",
    image: "https://placehold.co/500x500.png",
    imageAlt: "Content Idea illustration",
    aiHint: "idea lightbulb"
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Complete AI Solutions for Every Content Need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Providing innovative AI tools to meet all your content creation needs.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {features.map((feature, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-10 items-center">
              <div className={`md:order-${index % 2 === 0 ? '1' : '2'}`}>
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-4 text-muted-foreground text-lg">
                  {feature.description}
                </p>
                <Button asChild size="lg" className="mt-8">
                  <Link href={feature.link}>{feature.linkText}</Link>
                </Button>
              </div>
              <div className={`md:order-${index % 2 === 0 ? '2' : '1'}`}>
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-xl"
                  data-ai-hint={feature.aiHint}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
