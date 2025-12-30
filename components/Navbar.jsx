'use client';

import Link from 'next/link';
import { useState } from 'react';
import NavLink from './NavLink';
import { motion } from 'framer-motion';

const links = [
  { url: '/', title: 'About me' },
  { url: '/worko', title: 'Worko' },
  { url: '/airbnb', title: 'Airbnb' },
  { url: '/voltedge', title: 'VoltEdge' },
  { url: '/beauty', title: 'Beauty' },
  { url: '/contact', title: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
        staggerChildren: 0.1, // Чуть ускорил для отзывчивости
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
    <div className="h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg font-semibold relative">
      {/* Логотип KOT.dev (если он есть слева/в центре, добавил для структуры) */}
      <div className="z-50">
        <Link href="/" className="text-sm bg-black rounded-md p-1 pl-3 font-semibold flex items-center justify-center">
          <span className="text-white pr-3">KOT</span>
          <span className="w-12 h-8 rounded bg-red-100 text-black flex items-center justify-center">.dev</span>
        </Link>
      </div>

      {/* Десктопная навигация */}
      <div className="hidden custom-lg:flex items-center gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Мобильная навигация (Кнопка Бургера) */}
      <div className="custom-lg:hidden flex items-center">
        <button
          className="w-10 h-8 flex flex-col justify-between z-[70] relative" // z-70 чтобы кнопка всегда была сверху
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center z-[60]" // Меню на z-60
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.title}
                className="w-full" // Растягиваем на всю ширину
              >
                <Link
                  href={link.url}
                  className="w-full py-6 flex items-center justify-center text-3xl active:bg-gray-800 transition-colors" // Огромная область клика
                  onClick={handleLinkClick}
                >
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