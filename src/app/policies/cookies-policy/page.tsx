import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function CookiesPolicyPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <article className="prose prose-lg mx-auto dark:prose-invert">
            <h1>Cookies Policy</h1>
            <p>Our website uses cookies to improve your experience. A cookie is a small file of letters and numbers that we put on your computer if you agree.</p>
            <h2>1. What are cookies?</h2>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember if you've been to the website before.</p>
            <h2>2. How we use cookies</h2>
            <p>We use cookies to enhance your browsing experience by:
              <ul>
                <li>Remembering your preferences</li>
                <li>Understanding how you use our site</li>
                <li>Showing you relevant advertising</li>
              </ul>
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
