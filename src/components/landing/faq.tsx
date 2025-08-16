import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does Textify AI offer?",
    answer: "Textify AI provides AI-powered tools for content research, text summarization, and generating content ideas to streamline your writing process."
  },
  {
    question: "How can I use the AI Research Tool?",
    answer: "You can input a topic, and our AI will analyze it to find useful resources, key insights, and relevant information to aid your writing."
  },
  {
    question: "What kind of text can I summarize?",
    answer: "You can import or copy-paste long excerpts of text, and our AI will generate a concise summary of the key points for you."
  },
  {
    question: "How does the Content Ideas generator work?",
    answer: "Based on your input or selected parameters, our AI will generate a list of creative and relevant writing ideas to kickstart your content creation."
  },
  {
    question: "Is the interface user-friendly?",
    answer: "Yes, Textify AI is designed with an intuitive UI for easy navigation and seamless interaction with all our AI-powered tools."
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-primary/5">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

    