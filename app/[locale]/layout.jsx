import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/TransitionProvider';
import CookieBanner from '@/components/CookieBanner';
import { getTranslations, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/config';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      url: `https://business-website-omega-teal.vercel.app/${locale}`,
      siteName: t('siteName'),
      images: `https://business-website-omega-teal.vercel.app/${locale}/opengraph-image.png`
    }
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = await getMessages(locale);
  } catch (error) {
    console.error('Ошибка при загрузке сообщений:', error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${inter.className} min-h-screen h-screen flex flex-col`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <TransitionProvider>
            <CookieBanner />
            {children}
          </TransitionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
