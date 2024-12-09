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
      url: `https://kotdev.pl/${locale}`,
      siteName: t('siteName'),
      images: `https://kotdev.pl/${locale}/opengraph-image.png`
    },
    icons: {
      icon: '/favicon.ico',  // Укажите путь к фавиконке
    },
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
      <head>
        <link rel="icon" href="https://www.kotdev.pl/favicon.ico" type="image/x-icon" />
        <link rel="icon" href={`https://www.kotdev.pl/${locale}/favicon.ico`} type="image/x-icon" />
        <link rel="icon" href="https://www.kotdev.pl/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    
      </head>
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
