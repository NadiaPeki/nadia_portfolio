'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactUs from './ContactUs';

const items = [
  {
    id: 1,
    color: 'from-red-100 to-blue-500',
    title: 'React Commerce',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://lama.dev',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'Next.js Medium Blog',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://lama.dev',
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'Vanilla Book App',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://lama.dev',
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Spotify Music App',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://lama.dev',
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <motion.div
      className="h-full overflow-hidden"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}>
      <div className="py-0 md:pt-20">
        <div className="h-full relative flex flex-col items-center">
          <div className="flex h-full py-10 md:py-20 gap-10 items-center justify-center">
            <div className="absolute top-10 left-5 md:left-10 z-10">
              {' '}
              {/* Adjust the top value as needed */}
              <button
                onClick={handlePrev}
                className="ring-2 ring-slate-600 bg-gradient-to-r from-slate-700 via-rose-600 to-slate-700 text-white p-2 rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            <motion.div
              className="flex gap-8 justify-center items-center"
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.5 }}
              key={currentIndex} // For re-rendering when changing index
            >
              {items.map((item, index) => (
                <div
                  className={`min-w-[300px] md:min-w-[400px] lg:min-w-[600px] flex-shrink-0 flex justify-center items-center transition-transform duration-500 ease-in-out ${
                    index === currentIndex ? 'block' : 'hidden'
                  }`}
                  key={item.id}>
                  <div className="flex flex-col gap-8 text-slate-950 items-center justify-center">
                    <h1 className="text-base font-bold md:text-xl lg:text-2xl xl:text-4xl text-center">
                      {item.title}
                    </h1>
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[700px] lg:h-[380px] xl:w-[800px] xl:h-[450px]">
                      <Image src={item.img} alt={item.title} fill objectFit="cover" />
                    </div>
                    <p className="w-80 md:w-96 lg:w-[700px] lg:text-lg xl:w-[800px] text-center">
                      {item.desc}
                    </p>

                    <Link href={item.link} className="flex justify-center">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="absolute top-10 right-5 md:right-10">
              {' '}
              {/* Adjust the top value as needed */}
              <button
                onClick={handleNext}
                className="ring-2 ring-slate-600 bg-gradient-to-r from-slate-700 via-rose-600 to-slate-700 text-white p-2 rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <ContactUs />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
