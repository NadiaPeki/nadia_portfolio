import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
  // Список всех поддерживаемых локалей
  locales: locales,
 
  // Используется, когда не найдено соответствие локали
  defaultLocale: 'pl',

  // Всегда показывать префикс локали в URL
  localePrefix: 'always',

  
});
 
export const config = {
  // Соответствие только интернационализированным путям
  matcher: [
    '/',
    '/(pl|ru)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};