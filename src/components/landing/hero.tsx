import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-background">
      <div className="absolute bottom-0 right-0 hidden lg:block overflow-hidden lg:inset-y-0">
        <Image
          width={1000}
          height={1000}
          className="w-auto h-full"
          src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
          alt=""
        />
      </div>
      <div className="relative container">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-24 lg:py-32">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Get meaningful feedbacks on your code
            </h1>
            <div className="mt-8 lg:mt-12 flex items-center justify-center lg:justify-start">
              <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden">
                <Image
                  className="inline-block rounded-full w-14 h-14 ring-2 ring-background"
                  data-ai-hint="man portrait"
                  src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png"
                  alt=""
                  width={56}
                  height={56}
                />
                <Image
                  className="inline-block rounded-full w-14 h-14 ring-2 ring-background"
                  data-ai-hint="woman portrait"
                  src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png"
                  alt=""
                  width={56}
                  height={56}
                />
                <Image
                  className="inline-block rounded-full w-14 h-14 ring-2 ring-background"
                  data-ai-hint="person portrait"
                  src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png"
                  alt=""
                  width={56}
                  height={56}
                />
              </div>
              <p className="mt-4 text-lg text-muted-foreground lg:mt-0 lg:ml-4">
                Join with{" "}
                <span className="font-bold text-foreground">
                  4600+ Developers
                </span>{" "}
                and start getting feedbacks right now
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link href="#get-feedback">Get feedback</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/download-ios">
                  <Download className="mr-2" />
                  Download iOS App
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-full w-full">
            <Image
              src="https://d33wubrfki0l68.cloudfront.net/29c501c64b21014b3f2e225abe02fe31fd8f3a5c/f866d/images/hero/3/illustration.png"
              alt="Hero Image"
              width={800}
              height={600}
              className="rounded-xl"
              data-ai-hint="code feedback illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}