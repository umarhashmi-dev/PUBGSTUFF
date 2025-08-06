import { CircleUser, Package, Send } from "lucide-react";

const steps = [
  {
    icon: <CircleUser className="w-12 h-12 text-primary" />,
    title: "Create an Account",
    description: "Sign up for a free account in just a few minutes and get started.",
  },
  {
    icon: <Package className="w-12 h-12 text-primary" />,
    title: "Choose Your Product",
    description: "Browse our extensive catalog of digital goods and find what you need.",
  },
  {
    icon: <Send className="w-12 h-12 text-primary" />,
    title: "Instant Delivery",
    description: "Your digital products are delivered to your account instantly upon purchase.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A simple, three-step process to get your digital goods.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="p-4 bg-gray-100 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-headline mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
