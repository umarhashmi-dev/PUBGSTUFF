import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function TermsOfUsePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <article className="prose prose-lg mx-auto dark:prose-invert">
            <h1>Terms of Use</h1>
            <p>Please read these terms of use carefully before using our website.</p>
            <h2>1. Introduction</h2>
            <p>Welcome to our website. By accessing our website, you agree to these terms of use. If you do not agree to these terms, you may not use our website.</p>
            <h2>2. Intellectual Property Rights</h2>
            <p>The content on our website, including text, graphics, logos, images, and software, is the property of our company and is protected by copyright and other intellectual property laws.</p>
            <h2>3. User Conduct</h2>
            <p>You agree to use our website only for lawful purposes. You are prohibited from posting on or transmitting through the website any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, profane, hateful, fraudulent, racially, ethnically, or otherwise objectionable material of any kind.</p>
            <h2>4. Disclaimer of Warranties</h2>
            <p>Our website is provided on an "as is" and "as available" basis. We do not warrant that our website will be uninterrupted or error-free. There may be delays, omissions, interruptions, and inaccuracies in the news, information, or other materials available through our website.</p>
             <h2>5. Limitation of Liability</h2>
            <p>We are not liable for any damages of any kind arising from the use of our website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
