import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/components/auth-provider';
import { Inter, Space_Grotesk } from 'next/font/google';
import { CurrencyProvider } from '@/context/CurrencyContext';
import { ChatFabLoader } from '@/components/chat-fab-loader';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'PUBGSTUFF',
  description: 'AI-powered tools for content research, summarization, and idea generation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <AuthProvider>
          <CurrencyProvider>
            {children}
            <Toaster />
            <ChatFabLoader />
          </CurrencyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
