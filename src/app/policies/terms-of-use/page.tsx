import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function TermsOfUsePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1 bg-white text-black">
        <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl">
              Terms of Use
            </h1>
            <p className="mt-4 text-center text-gray-500">
              Last updated: Friday, 21 February 2025 in I-9, Islamabad
            </p>

            <div className="mt-12 space-y-8">
              <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-6">
                <h2 className="text-2xl font-bold">Introduction</h2>
                <p className="mt-4 text-gray-700">
                  Welcome to PubgStuff! These Terms of Use govern your access to and use of our services, including our website and any related content.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-6">
                <h2 className="text-2xl font-bold">User Agreement</h2>
                <p className="mt-4 text-gray-700">
                  By accessing our services, you agree to comply with these Terms. If you do not agree, please do not use our services.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                  <li>You must be at least 18 years old to use our services.</li>
                  <li>You agree to provide accurate information when creating an account.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-6">
                <h2 className="text-2xl font-bold">User Responsibilities</h2>
                <p className="mt-4 text-gray-700">
                  You are responsible for maintaining the confidentiality of your account and password. You agree to:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                  <li>Notify us immediately of any unauthorized use of your account.</li>
                  <li>Take responsibility for all activities that occur under your account.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-6">
                <h2 className="text-2xl font-bold">Limitations of Liability</h2>
                <p className="mt-4 text-gray-700">
                  To the fullest extent permitted by law, PubgStuff will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-6">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p className="mt-4 text-gray-700">
                  If you have any questions regarding our Cookies Policy, please contact us:
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li><strong>By email:</strong> <a href="mailto:contact@pubgstuff.store" className="text-black underline">contact@pubgstuff.store</a></li>
                  <li><strong>By visiting our website:</strong> <a href="/contact" className="text-black underline">Contact Us</a></li>
                  <li><strong>By phone:</strong> +92 335 5448505 | +92 302 1550385</li>
                  <li><strong>Address:</strong> Shams Colony H-13, Islamabad, Pakistan, 46000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
