import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Homepage')

  return (
    <footer className="bg-white text-black py-5 md:py-8 px-4 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center  md:justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <Link href="/" className="text-2xl font-bold whitespace-nowrap">
            KOT<span className="text-primary">.dev</span>
          </Link>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} {t('footerAllRightsReserved')}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6  mb-6 md:mb-0">
          <Link href="/policy" className="text-sm hover:text-primary transition-colors duration-300">
            {t('footerPrivacyPolicy')}
          </Link>
          <Link href="/cookie" className="text-sm hover:text-primary transition-colors duration-300">
            {t('footerCookiePolicy')}
          </Link>
          <Link href="/contact" className="text-sm hover:text-primary transition-colors duration-300">
            {t('footerContacts')}
          </Link>
        </nav>

        <div className="flex gap-6">
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <FaFacebook className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors duration-300">
            <FaInstagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://t.me/your_telegram_channel" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
            <FaTelegram className="w-6 h-6" />
            <span className="sr-only">Telegram</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}