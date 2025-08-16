
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does PubgStuff offer?",
    answer: "PubgStuff provides web design, web development, graphics, RDP services, SEO, content research tools, social media marketing, and more."
  },
  {
    question: "How can I enhance my gaming experience with PubgStuff?",
    answer: "You can boost your gaming with features like the Silent Aimbot, exclusive skins, effects, and by climbing the global rankings."
  },
  {
    question: "What is the process for getting started with PubgStuff services?",
    answer: "Simply choose your service, follow easy steps, and enjoy optimized solutions tailored to your needs and goals."
  },
  {
    question: "How secure are PubgStuff’s services?",
    answer: "All PubgStuff services, including the Silent Aimbot and RDP, are designed with maximum security to ensure safe and smooth usage."
  },
  {
    question: "Can PubgStuff help with my website’s SEO?",
    answer: "Yes! PubgStuff offers SEO services to improve your SEO score by optimizing metadata, ensuring better ranking and visibility online."
  },
  {
    question: "What are the benefits of using Driver Booster?",
    answer: "Driver Booster automatically updates outdated drivers, enhancing your PC’s performance, stability, and security to optimize your overall experience."
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50/50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
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
