
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What services does PUBGSTUFF offer?",
    answer: "PUBGSTUFF provides AI-powered tools for content research, text summarization, and generating content ideas to streamline your writing process."
  },
  {
    question: "Is the interface user-friendly?",
    answer: "Yes, PUBGSTUFF is designed with an intuitive UI for easy navigation and seamless interaction with all our AI-powered tools."
  },
  {
    question: "How can I use the AI Research Tool?",
    answer: "You can input a topic, and our AI will analyze it to find useful resources, key insights, and relevant information to aid your writing."
  },
  {
    question: "How does the Content Ideas generator work?",
    answer: "Based on your input or selected parameters, our AI will generate a list of creative and relevant writing ideas to kickstart your content creation."
  },
  {
    question: "What kind of text can I summarize?",
    answer: "You can import or copy-paste long excerpts of text, and our AI will generate a concise summary of the key points for you."
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Quick answers to questions you may have.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg p-1 transition-all duration-300 data-[state=open]:shadow-lg">
                <AccordionTrigger className="text-lg text-left font-semibold px-6 py-4 hover:no-underline">
                    {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground px-6">
                    {faq.answer}
                </AccordionContent>
            </AccordionItem>
          ))}
            <div className="bg-background border rounded-lg p-6 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold">Can't find an answer?</h3>
                    <p className="text-muted-foreground mt-1">Contact us for more information.</p>
                </div>
                <Button asChild>
                    <Link href="/contact">
                        Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </Accordion>
      </div>
    </section>
  )
}
