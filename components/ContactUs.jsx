// Contact.js
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className="w-screen h-full flex flex-col gap-15 items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">Do you have a project?</h1>
      <div className="relative">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
          viewBox="0 0 300 300"
          className="w-64 h-64 md:w-[500px] md:h-[500px]">
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <text fill="#000">
            <textPath xlinkHref="#circlePath" className="text-2xl ">
              Websites Developing and Promotions
            </textPath>
          </text>
        </motion.svg>
        <Link
          href="/contact"
          className=" w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white font-semibold rounded-full flex items-center justify-center">
          Call Us
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
