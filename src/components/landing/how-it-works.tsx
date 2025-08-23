import { Handshake, Search, Zap } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-10 h-10 md:w-12 md:h-12 text-primary" />,
    title: "Browse Our Services",
    description: "Explore our digital solutions, from web development to performance boosters.",
  },
  {
    icon: <Handshake className="w-10 h-10 md:w-12 md:h-12 text-primary" />,
    title: "Select Your Plan",
    description: "Choose the service that best fits your needs and get started in minutes.",
  },
  {
    icon: <Zap className="w-10 h-10 md:w-12 md:h-12 text-primary" />,
    title: "Get Instant Access",
    description: "Your services and digital products are activated instantly upon purchase.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-28 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            A simple, three-step process to get your digital goods.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="p-4 bg-gray-100 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-headline mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
