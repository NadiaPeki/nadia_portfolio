'use client';

import Link from 'next/link';
import { useState } from 'react';
import NavLink from './NavLink';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

const links = {
  ru: [
    { url: '/', title: 'Главная' },
    { url: '/sajty', title: 'Сайт-визитка' },
    { url: '/internetmagaziny', title: 'Интернет-магазин' },
    { url: '/startapy', title: 'Стартап' },
    { url: '/reklama', title: 'Google Ads' },
    { url: '/kontakty', title: 'Контакты' },
  ],
  pl: [
    { url: '/', title: 'Główna' },
    { url: '/strony', title: 'Strona wizytówka' },
    { url: '/sklepyinternetowe', title: 'Sklep internetowy' },
    { url: '/startupy', title: 'Startup' },
    { url: '/reklama', title: 'Google Ads' },
    { url: '/kontakty', title: 'Kontakt' },
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: 'rgb(255,255,255)' },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: 'rgb(255,255,255)' },
  };
  const listVariants = {
    closed: { x: '100vw' },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg font-semibold">
      <div className="hidden custom-lg:flex items-center gap-4">
        {links[currentLocale].map((link) => (
          <NavLink
            link={{
              ...link,
              url: `/${currentLocale}${link.url === '/' ? '' : link.url}`,
            }}
            key={link.title}
          />
        ))}
        <LanguageSwitcher />
      </div>
      <div>
        <Link
          href={`/${currentLocale}`}
          className="text-sm bg-black rounded-md p-1 pl-3 font-semibold flex items-center justify-center">
          <span className="text-white pr-3">KOT</span>
          <span className="w-12 h-8 rounded bg-red-100 text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className="custom-lg:hidden flex items-center">
        <LanguageSwitcher />
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative ml-4"
          onClick={() => setOpen(!open)}>
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-4 text-3xl z-40">
            {links[currentLocale].map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.title}
                className="w-full text-3xl text-center">
                <Link
                  href={`/${currentLocale}${link.url === '/' ? '' : link.url}`}
                  className="block py-4 px-8"
                  onClick={handleLinkClick}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}