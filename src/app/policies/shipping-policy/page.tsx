import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function ShippingPolicyPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <article className="prose prose-lg mx-auto dark:prose-invert">
            <h1>Shipping Policy</h1>
            <p>All of our products are digital and are delivered electronically. After your purchase is complete, you will receive an email with a download link for your digital product. You can also access your downloads from your account page.</p>
            <p>There are no shipping fees for any of our digital products. Delivery is instant upon successful payment.</p>
            <p>If you have any issues with receiving your digital product, please contact our support team for assistance.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
