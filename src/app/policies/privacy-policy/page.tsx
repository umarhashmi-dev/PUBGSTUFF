import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <article className="prose prose-lg mx-auto dark:prose-invert">
            <h1>Privacy Policy</h1>
            <p>We are committed to protecting your privacy. This privacy policy tells you about our online collection and use of data.</p>
            <h2>1. Information We Collect</h2>
            <p>We may collect information about you when you use our website, including your name, email address, and other personal information. We may also collect information about your use of our website, such as the pages you visit and the links you click.</p>
            <h2>2. How We Use Your Information</h2>
            <p>We may use your information to provide you with our services, to communicate with you, and to improve our website. We may also use your information to personalize your experience on our website.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
