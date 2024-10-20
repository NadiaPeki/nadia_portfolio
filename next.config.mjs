import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  async rewrites() {
    return [
      {
        source: '/ru/sajty',
        destination: '/ru/sites',
      },
      {
        source: '/pl/strony',
        destination: '/pl/sites',
      },
      {
        source: '/ru/internetmagaziny',
        destination: '/ru/shops',
      },
      {
        source: '/pl/sklepyinternetowe',
        destination: '/pl/shops',
      },
      {
        source: '/ru/startapy',
        destination: '/ru/startups',
      },
      {
        source: '/pl/startupy',
        destination: '/pl/startups',
      },
      {
        source: '/ru/reklama',
        destination: '/ru/ads',
      },
      {
        source: '/pl/reklama',
        destination: '/pl/ads',
      },
      {
        source: '/ru/kontakty',
        destination: '/ru/contact',
      },
      {
        source: '/pl/kontakty',
        destination: '/pl/contact',
      },
    ];
  },
};

export default withNextIntl(nextConfig);