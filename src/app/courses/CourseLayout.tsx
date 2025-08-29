import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowRight, Check, PlayCircle, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface CourseLayoutProps {
  title: string;
  icon: LucideIcon;
  description: string;
  learningObjectives: string[];
  modules: { title: string; description: string }[];
}

export function CourseLayout({
  title,
  icon: Icon,
  description,
  learningObjectives,
  modules,
}: CourseLayoutProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-card">
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline text-foreground">{title}</h1>
                <p className="mt-6 text-lg max-w-xl mx-auto md:mx-0 text-muted-foreground">{description}</p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-foreground text-background hover:bg-foreground/80 hover-shimmer-button text-base">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="hover-shimmer-button text-base">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Watch Preview
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 border-2 border-foreground/10 rounded-full"></div>
                  <div className="absolute inset-2 border-2 border-foreground/10 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Icon className="w-32 h-32 text-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column */}
              <div className="lg:col-span-2">
                {/* What You'll Learn */}
                <div className="border bg-card rounded-xl p-6 md:p-8 mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6">What You'll Learn</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {learningObjectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-foreground bg-background border rounded-full p-0.5 mt-1 shrink-0" />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Content */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8">Course Content</h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {modules.map((module, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border bg-card rounded-lg transition-all hover:bg-secondary/50">
                        <AccordionTrigger className="text-lg font-semibold px-6 py-4 hover:no-underline">
                          {module.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 text-muted-foreground">
                          {module.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Right Column (Sidebar) */}
              <div className="relative">
                <div className="sticky top-24 space-y-8">
                  <Card className="rounded-xl border shadow-sm">
                    <CardHeader className="text-center pb-4">
                      <p className="text-sm uppercase tracking-widest text-muted-foreground">Lifetime Access</p>
                      <h3 className="text-5xl font-extrabold text-foreground font-headline">$99</h3>
                    </CardHeader>
                    <CardContent className="p-6">
                      <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/80 hover-shimmer-button text-base">
                        Add to Cart
                      </Button>
                      <Button size="lg" variant="outline" className="w-full mt-4 hover-shimmer-button text-base">
                        Buy Now
                      </Button>
                      <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                          <li className="flex items-center gap-3"><Users className="w-4 h-4 text-foreground" /><span>25,000+ Students</span></li>
                          <li className="flex items-center gap-3"><PlayCircle className="w-4 h-4 text-foreground" /><span>12 hours of on-demand video</span></li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Instructor */}
                  <div className="border bg-card rounded-xl p-6 text-center">
                      <h3 className="text-xl font-bold font-headline mb-4">About the Instructor</h3>
                      <Avatar className="h-20 w-20 mx-auto mb-4 border-2 border-border">
                          <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80" data-ai-hint="man portrait" />
                          <AvatarFallback>UH</AvatarFallback>
                      </Avatar>
                      <div>
                          <h4 className="font-semibold text-lg text-foreground">Umar Hashmi</h4>
                          <p className="text-sm text-muted-foreground">Lead Instructor</p>
                      </div>
                       <p className="mt-4 text-sm text-muted-foreground">Umar is a seasoned web developer with over 10 years of experience building scalable and beautiful web applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* CTA Section */}
        <section className="py-16 md:py-24 border-t">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Start Learning?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Join thousands of students and take your skills to the next level. Enroll today for instant access.
                </p>
                <div className="mt-8">
                      <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/80 hover-shimmer-button text-base">
                          <Link href="#">
                            Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                      </Button>
                </div>
              </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
