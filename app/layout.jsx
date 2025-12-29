import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/TransitionProvider';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'KotDev Portfolio',
  description: 'Портфолио веб-разработчика KotDev',
  openGraph: {
    title: 'KotDev Portfolio',
    description: 'Портфолио веб-разработчика KotDev',
    type: 'website',
    url: 'https://kotdev.pl',
    siteName: 'KotDev',
    images: '/opengraph-image.png',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <TransitionProvider>
                  {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
