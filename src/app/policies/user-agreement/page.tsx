import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function UserAgreementPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <article className="prose prose-lg mx-auto dark:prose-invert">
            <h1>User Agreement</h1>
            <p>This User Agreement ("Agreement") is a contract between you and us.</p>
            <p>This Agreement applies to all users of our site. By using this site you agree to comply with and be bound by this Agreement. If you do not agree to the terms of this Agreement, you may not use this site.</p>
            <h2>1. Our Services</h2>
            <p>We provide a platform for you to purchase digital goods. We are not responsible for the digital goods themselves, but we provide a platform for you to purchase them.</p>
            <h2>2. Your Account</h2>
            <p>You are responsible for your account. You must keep your password confidential. You are responsible for all activities that occur under your account.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
