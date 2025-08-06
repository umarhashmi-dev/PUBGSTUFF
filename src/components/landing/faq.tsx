import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Textify AI offer?",
    answer: "Textify AI provides a suite of AI-powered tools including content research, text summarization, and content idea generation to help you streamline your writing and content creation process.",
  },
  {
    question: "How can I enhance my writing with Textify AI?",
    answer: "You can use our tools to research topics faster, summarize long articles to get key insights, and generate creative ideas to overcome writer's block. This helps improve the quality and efficiency of your writing.",
  },
  {
    question: "How secure is my data with Textify AI?",
    answer: "We take data security very seriously. All your data is encrypted and handled with strict privacy protocols. We do not share your data with third parties. Please refer to our Privacy Policy for more details.",
  },
  {
    question: "Can Textify AI help with my website’s SEO?",
    answer: "Absolutely! Our content research and idea generation tools can help you discover relevant keywords, topic clusters, and content angles that are optimized for search engines, boosting your site's SEO performance.",
  },
  {
    question: "Is there a free trial or free plan?",
    answer: "Yes, we offer a free plan with limited access to our tools, which is perfect for trying out our services. For more advanced features and unlimited access, you can upgrade to our Pro plan.",
  },
  {
    question: "What are the benefits of the Pro plan?",
    answer: "The Pro plan offers unlimited access to all AI tools, advanced features, priority support, and early access to new functionalities, making it ideal for professionals and power users.",
  },
];

export default function Faq() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Want to know more about Textify AI? Find your answers here.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
