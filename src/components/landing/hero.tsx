import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <div className="pt-24 sm:pt-32 lg:pt-40">
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
                Your One-Stop Digital Shop
              </h1>
              <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
                Instantly access a massive collection of game skins, currency, and other digital goods. Level up your gaming experience today.
              </p>

              <Button asChild size="lg" className="mt-8 sm:mt-10 bg-gray-900 text-white hover:bg-gray-800 hover-shimmer-button">
                <Link
                  href="/products"
                >
                  Browse Products
                </Link>
              </Button>

              <div className="mt-8 sm:mt-16">
                <div className="flex items-center justify-center lg:justify-start">
                    <div className="flex items-center rounded-full p-0.5 gap-1.5 border border-border shadow-sm shadow-black/5">
                        <div className="flex -space-x-1">
                            <Avatar className="size-7">
                                <AvatarImage
                                    src="https://i.pravatar.cc/40?img=1"
                                    alt="@user1"
                                    className="border-2 border-background hover:z-10"
                                />
                                <AvatarFallback>U1</AvatarFallback>
                            </Avatar>
                            <Avatar className="size-7">
                                <AvatarImage
                                    src="https://i.pravatar.cc/40?img=2"
                                    alt="@user2"
                                    className="border-2 border-background hover:z-10"
                                />
                                <AvatarFallback>U2</AvatarFallback>
                            </Avatar>
                            <Avatar className="size-7">
                                <AvatarImage
                                    src="https://i.pravatar.cc/40?img=3"
                                    alt="@user3"
                                    className="border-2 border-background hover:z-10"
                                />
                                <AvatarFallback>U3</AvatarFallback>
                            </Avatar>
                            <Avatar className="size-7">
                                <AvatarImage
                                    src="https://i.pravatar.cc/40?img=4"
                                    alt="@user4"
                                    className="border-2 border-background hover:z-10"
                                />
                                <AvatarFallback>U4</AvatarFallback>
                            </Avatar>
                        </div>
                        <p className="text-xs text-muted-foreground me-1.5">
                            Trusted by <span className="font-semibold text-foreground">100K+</span>{" "}
                            users.
                        </p>
                    </div>
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
