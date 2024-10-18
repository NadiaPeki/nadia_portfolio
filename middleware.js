import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

const middlewareLogger = (request) => {
  console.log(`Middleware processing: ${request.url}`);
  console.log(`Locale from URL: ${request.nextUrl.pathname.split('/')[1]}`);
};

export default createMiddleware({
  locales: locales,
  defaultLocale: 'pl',
  localePrefix: 'always',
}, middlewareLogger);

export const config = {
  matcher: [
    '/',
    '/(pl|ru)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};