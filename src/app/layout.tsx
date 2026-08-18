import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, Comfortaa } from 'next/font/google';
import './globals.css';
import './custom.css';
import SmoothScroll from '@/components/SmoothScroll';
import PageAnimations from '@/components/PageAnimations';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-comfortaa',
});

export const metadata: Metadata = {
  title: 'AI & Automation Agency :: Formiqa',
  description: 'We help B2B service teams streamline operations and grow revenue through AI-powered automation — reducing manual tasks, saving time and elevating the customer experience.',
  icons: {
    icon: '/images/asset_53_6858f95b4522ba945ca91454_Logo-markv2.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} ${comfortaa.variable} w-mod-js`}>
      <head>
        <link rel="icon" href="/images/asset_53_6858f95b4522ba945ca91454_Logo-markv2.svg" />
      </head>
      <body className={`${comfortaa.className} body background-colour-b text-colour-a`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <PageAnimations />
      </body>
    </html>
  );
}

