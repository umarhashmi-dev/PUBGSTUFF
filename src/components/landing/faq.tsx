import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of digital products do you sell?",
    answer: "We sell a wide variety of digital products, including game skins, in-game currency, software licenses, and digital art. Browse our categories to discover more."
  },
  {
    question: "How do I receive my digital products after purchase?",
    answer: "Your digital products are delivered instantly to your account dashboard upon successful payment. You'll also receive an email with the details."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and various cryptocurrencies. All transactions are secure and encrypted."
  },
  {
    question: "Can I get a refund for my purchase?",
    answer: "Due to the nature of digital products, we generally do not offer refunds. However, if you encounter any issues with your purchase, please contact our support team, and we'll be happy to assist you."
  }
]

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
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
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
