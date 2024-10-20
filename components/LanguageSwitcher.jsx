'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const urlMappings = {
  ru: {
    sajty: 'sajty',
    internetmagaziny: 'internetmagaziny',
    startapy: 'startapy',
    reklama: 'reklama',
    kontakty: 'kontakty',
  },
  pl: {
    sajty: 'strony',
    internetmagaziny: 'sklepyinternetowe',
    startapy: 'startupy',
    reklama: 'reklama',
    kontakty: 'kontakty',
  },
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale) => {
    const segments = pathname.split('/');
    const currentLocale = segments[1];
    const currentPage = segments[2] || '';

    let newPage = currentPage;
    if (currentPage) {
      // Найти соответствующий URL для новой локали
      const currentMapping = urlMappings[currentLocale];
      const newMapping = urlMappings[newLocale];
      
      // Если текущая страница есть в маппинге текущей локали, используем её ключ для новой локали
      if (Object.values(currentMapping).includes(currentPage)) {
        const key = Object.keys(currentMapping).find(key => currentMapping[key] === currentPage);
        newPage = newMapping[key];
      } else {
        // Если страница не найдена в маппинге, оставляем её без изменений
        newPage = currentPage;
      }
    }

    const newPath = `/${newLocale}${newPage ? `/${newPage}` : ''}${segments.slice(3).join('/')}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2  hover:bg-primary/90 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true">
        <Globe className="w-5 h-5" />
        <span>{locale.toUpperCase()}</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute mt-2 py-2 w-20 bg-white rounded-md shadow-lg z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-switcher">
          <button
            onClick={() => switchLanguage('ru')}
            className={`block px-2 py-2 text-sm w-full text-left hover:bg-accent hover:text-accent-foreground ${
              locale === 'ru' ? 'bg-accent text-accent-foreground' : 'text-foreground'
            }`}
            role="menuitem">
            RU
          </button>
          <button
            onClick={() => switchLanguage('pl')}
            className={`block px-2 py-2 text-sm w-full text-left hover:bg-accent hover:text-accent-foreground ${
              locale === 'pl' ? 'bg-accent text-accent-foreground' : 'text-foreground'
            }`}
            role="menuitem">
            PL
          </button>
        </motion.div>
      )}
    </div>
  );
}