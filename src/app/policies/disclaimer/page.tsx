import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function DisclaimerPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <article className="prose prose-lg mx-auto dark:prose-invert">
            <h1>Disclaimer</h1>
            <p>The information provided on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
            <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
