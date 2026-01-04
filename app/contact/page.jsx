'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// Добавили IoMail для яркости
import { FaLinkedin, FaMedium, FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5'; 
import Head from 'next/head';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState('');

  const form = useRef();

  const validateForm = () => {
    const contactInfo = form.current.user_contact.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s()+-]+$/;

    if (!contactInfo) {
      setValidationError('Введите email или телефон');
      return false;
    }

    if (!emailRegex.test(contactInfo) && !phoneRegex.test(contactInfo)) {
      setValidationError('Введите корректный контакт');
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setValidationError('');

    if (!validateForm()) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  const mainText = 'Вы охуели? Свяжитесь с нами';

  return (
    <>
      <Head>
        <title>Contacts | KOT.dev</title>
      </Head>

      <motion.div
        className="min-h-screen"
        initial={{ y: '-200vh' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-10 py-10 md:py-20">
          
          {/* Левая колонка: Текст */}
          <div className="h-1/2 lg:h-full lg:w-1/2 text-start text-5xl md:text-6xl">
            <div className="text-center md:leading-normal">
              {mainText.split('').map((letter, index) => (
                <motion.span
                  className="pr-3 text-2xl md:text-6xl"
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Правая колонка */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col">
            
            {/* Соцсети сверху */}
            <div className="flex flex-col items-center mb-8 pt-7">
              <span className="text-lg md:text-xl font-semibold mb-6  tracking-widest">
                Contact & Profiles:
              </span>
              <div className="flex justify-center gap-10">
                <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-4xl text-[#0077b5] hover:scale-125 transition-transform" />
                </a>
                <a href="https://medium.com/@YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
                  <FaMedium className="text-4xl text-black hover:scale-125 transition-transform" />
                </a>
                <a href="https://github.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-4xl text-black hover:scale-125 transition-transform" />
                </a>
                
                {/* ЯРКАЯ ИКОНКА ПОЧТЫ */}
                <a href="mailto:hello@kotdev.pl">
                  <IoMail className="text-4xl text-sky-500 hover:scale-125 transition-transform drop-shadow-sm" />
                </a>
              </div>
            </div>

            {/* Форма */}
            <form
              onSubmit={sendEmail}
              ref={form}
              className="bg-red-50 rounded-xl text-xl flex flex-col gap-6 p-8 shadow-sm border border-red-100"
            >
              <span className="font-semibold">Напишите нам</span>
              <textarea
                rows={5}
                className="bg-transparent border-b-2 border-b-black outline-none resize-none placeholder-gray-700 placeholder-opacity-50 text-base"
                name="user_message"
                placeholder="Опишите ваш вопрос или проект"
              />
              <span className="font-semibold">Ваш email или телефон</span>
              <input
                name="user_contact"
                type="text"
                className="bg-transparent border-b-2 border-b-black outline-none text-base"
                placeholder="Email или телефон"
              />
              
              {/* ТВОЯ КНОПКА */}
              <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 my-3 hover:bg-purple-300 transition-colors">
                Отправить
              </button>

              {success && <span className="text-green-600 font-semibold text-center">Сообщение отправлено!</span>}
              {error && <span className="text-red-600 font-semibold text-center text-sm">Ошибка. Попробуйте еще раз.</span>}
              {validationError && <span className="text-red-600 font-semibold text-center text-sm">{validationError}</span>}
            </form>

          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;