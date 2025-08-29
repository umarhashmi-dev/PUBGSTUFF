import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowRight, Check, PlayCircle, Star, Users } from 'lucide-react';
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
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  Online Course
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">{title}</h1>
                <p className="mt-4 text-lg text-muted-foreground">{description}</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">5.0 (2,500 ratings)</p>
                </div>
                <div className="mt-8 flex gap-4">
                  <Button size="lg" className="hover-shimmer-button">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="hover-shimmer-button">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Watch Preview
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-primary/10 rounded-full w-64 h-64 mx-auto flex items-center justify-center">
                  <Icon className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column */}
              <div className="lg:col-span-2">
                {/* What You'll Learn */}
                <Card className="mb-8">
                  <CardHeader>
                    <h2 className="text-2xl font-bold font-headline">What You'll Learn</h2>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {learningObjectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                          <span className="text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Course Content */}
                <div>
                  <h2 className="text-2xl font-bold font-headline mb-6">Course Content</h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {modules.map((module, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="bg-secondary/30 border-none rounded-lg">
                        <AccordionTrigger className="text-lg font-semibold px-6 py-4 hover:no-underline">
                          {module.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 text-muted-foreground">
                          {module.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Right Column (Sidebar) */}
              <div>
                <Card className="sticky top-24">
                  <CardHeader className="text-center">
                    <h3 className="text-3xl font-bold text-primary">$99</h3>
                    <p className="text-muted-foreground">Full Lifetime Access</p>
                  </CardHeader>
                  <CardContent>
                    <Button size="lg" className="w-full hover-shimmer-button">
                      Add to Cart
                    </Button>
                    <Button size="lg" variant="outline" className="w-full mt-4 hover-shimmer-button">
                      Buy Now
                    </Button>
                    <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-center gap-3"><Users className="w-4 h-4 text-primary" /><span>25,000+ Students</span></li>
                        <li className="flex items-center gap-3"><PlayCircle className="w-4 h-4 text-primary" /><span>12 hours of video</span></li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Instructor */}
                <div className="mt-8">
                    <h3 className="text-xl font-bold font-headline mb-4">About the Instructor</h3>
                    <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80" data-ai-hint="man portrait" />
                            <AvatarFallback>UH</AvatarFallback>
                        </Avatar>
                        <div>
                            <h4 className="font-semibold text-foreground">Umar Hashmi</h4>
                            <p className="text-sm text-muted-foreground">Lead Instructor</p>
                        </div>
                    </div>
                     <p className="mt-4 text-sm text-muted-foreground">Umar is a seasoned web developer with over 10 years of experience building scalable and beautiful web applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-16 text-center">
                    <h2 className="text-3xl font-bold font-headline">Ready to Start Learning?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                        Join thousands of students and take your skills to the next level. Enroll today for instant access.
                    </p>
                    <div className="mt-8">
                         <Button asChild size="lg" variant="secondary" className="hover-shimmer-button text-base">
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
