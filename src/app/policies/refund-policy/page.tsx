import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function RefundPolicyPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <article className="prose prose-lg mx-auto dark:prose-invert">
            <h1>Refund and Returns Policy</h1>
            <p>Due to the nature of digital products, we generally do not offer refunds. All sales are final.</p>
            <p>If you encounter an issue with your purchase, such as a faulty file or a problem with access, please contact our support team. We will work with you to resolve the issue, which may include providing a replacement file or access to the product.</p>
            <p>We are not responsible for any issues that may arise from the use of the digital products, including compatibility with your software or system. Please ensure you have the necessary software and knowledge to use the products before purchasing.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
