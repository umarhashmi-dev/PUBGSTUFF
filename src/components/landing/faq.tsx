
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "../ui/button";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here."
  },
  {
    question: "Can I change my plan later?",
    answer: "Of course. You can upgrade, downgrade or cancel your plan at any time. Changes will be prorated."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We have a simple no-questions-asked cancellation policy. You can cancel your subscription at any time from your account dashboard."
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add any extra information you need to your invoices, such as a VAT number or a PO number."
  },
  {
    question: "How does billing work?",
    answer: "We bill you on a monthly or yearly basis, depending on the plan you choose. You can pay with any major credit card."
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your account email from your account settings page. We will send a confirmation link to your new email address."
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50/50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about our services.
          </p>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground text-left">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-12">
            <Button size="lg">Load more</Button>
        </div>
      </div>
    </section>
  )
}
