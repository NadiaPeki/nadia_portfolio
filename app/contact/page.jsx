'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
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
        <title>Контакты</title>
        <meta name="description" content="Свяжитесь с нами для заказа или консультации" />
      </Head>

      <motion.div
        className="min-h-screen"
        initial={{ y: '-200vh' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-10 py-10 md:py-20">
          {/* Текст */}
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

          {/* Форма */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col">
            <form
              onSubmit={sendEmail}
              ref={form}
              className="bg-red-50 rounded-xl text-xl flex flex-col gap-6 p-8"
            >
              <span className="font-semibold">Напишите нам</span>
              <textarea
                rows={8}
                className="bg-transparent border-b-2 border-b-black outline-none resize-none placeholder-gray-700 placeholder-opacity-50 text-base min-h-[200px] max-w-full"
                name="user_message"
                placeholder="Опишите ваш вопрос или проект"
              />
              <span className="font-semibold">Ваш email или телефон</span>
              <input
                name="user_contact"
                type="text"
                className="bg-transparent border-b-2 border-b-black outline-none text-base min-h-[40px] max-w-full placeholder-opacity-50"
                placeholder="Email или телефон"
              />
              <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 my-3">
                Отправить
              </button>

              {success && <span className="text-green-600 font-semibold">Сообщение отправлено!</span>}
              {error && <span className="text-red-600 font-semibold">Ошибка при отправке.</span>}
              {validationError && <span className="text-red-600 font-semibold">{validationError}</span>}
            </form>

            {/* Соцсети */}
            <div className="flex flex-col items-center mt-10">
              <span className="text-lg md:text-xl font-semibold mb-4">Мы в соцсетях</span>
              <div className="flex space-x-7">
                <a href="https://www.instagram.com/kotdev.pl/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl text-pink-600 hover:text-pink-400" />
                </a>
                <a href="https://www.facebook.com/groups/1809126336287422" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;
