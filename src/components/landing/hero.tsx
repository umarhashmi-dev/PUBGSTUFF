import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Header from "./header";

export default function Hero() {
  return (
    <div className="bg-gray-50">
      <section className="relative py-12 sm:py-16 lg:pb-40">
        <div className="absolute bottom-0 right-0 overflow-hidden">
          <Image
            className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt=""
            width={1000}
            height={1000}
          />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
            <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                Your One-Stop Shop for Digital Gaming Products.
              </h1>
              <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
                Instantly access a massive collection of game skins, currency, and other digital goods. Level up your gaming experience today.
              </p>

              <Button asChild size="lg" className="mt-8 sm:mt-10">
                <Link
                  href="/products"
                >
                  Browse Products
                </Link>
              </Button>

              <div className="mt-8 sm:mt-16">
                <div className="flex items-center justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="mt-6">
                  <p className="text-lg font-bold text-gray-900 font-pj">
                    Best prices for in-game items!
                  </p>
                  <p className="mt-3 text-base leading-7 text-gray-600 font-inter">
                   I always find the best deals on the skins and items I want. Delivery is instant and secure. Highly recommended!
                  </p>
                </blockquote>

                <div className="flex items-center justify-center mt-3 lg:justify-start">
                  <Image
                    className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
                    alt=""
                    width={24}
                    height={24}
                    data-ai-hint="woman portrait"
                  />
                  <p className="ml-2 text-base font-bold text-gray-900 font-pj">
                    Sarah L.
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:col-span-1">
              <Image
                className="w-full mx-auto"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                alt="Illustration"
                width={800}
                height={600}
                data-ai-hint="gaming items abstract"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

    