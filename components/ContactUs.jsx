// Contact.js
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const ContactUs = () => {
  const t = useTranslations('Homepage');
  return (
    <div className="mt-10 w-full h-full flex flex-col gap-15 items-center justify-center text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{t('titleContact')}</h1>
      <div className="relative   w-72 h-72 md:w-[500px] md:h-[500px]">
                  <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                    viewBox="0 0 300 300"
                    className="w-full h-full ">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <text fill="#000">
                      <textPath xlinkHref="#circlePath" className="text-xl font-medium">
                        Websites Developing and Advertising.
                      </textPath>
                    </text>
                  </motion.svg>
                  <Link
                    href="/contact"
                    className="w-20 h-20 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black  text-white  text-base rounded-full flex items-center justify-center text-center">
                  {t('buttonwrite2')}
                  </Link>
                </div>
    </div>
  );
};

export default ContactUs;
