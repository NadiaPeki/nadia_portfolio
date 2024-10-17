'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa'; // Импорт иконок

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState('');
  const text = 'Хотите запустить сайт или рекламу?'; // Измененный текст

  const form = useRef();

  // Функция валидации
  const validateForm = () => {
    const contactInfo = form.current.user_contact.value;

    // Регулярное выражение для проверки email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Регулярное выражение для проверки номера телефона
    const phoneRegex = /^[\d\s()+-]+$/;

    if (!contactInfo) {
      setValidationError('Пожалуйста, укажите email или номер телефона.');
      return false;
    }

    // Проверяем, соответствует ли введенное значение либо email, либо номеру телефона
    if (!emailRegex.test(contactInfo) && !phoneRegex.test(contactInfo)) {
      setValidationError('Пожалуйста, введите корректный email или номер телефона.');
      return false;
    }

    return true;
  };

  // Функция отправки формы
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setValidationError('');

    // Если валидация не прошла, прерываем отправку
    if (!validateForm()) {
      return;
    }

    // Отправляем форму через emailjs
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      className="min-h-screen"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-10 py-10 md:py-20">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 text-start text-5xl md:text-6xl">
          <div className="text-center  md:leading-normal">
            {text.split('').map((letter, index) => (
              <motion.span
                className="pr-3 text-2xl md:text-6xl "
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}>
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col">
          <form
            onSubmit={sendEmail}
            ref={form}
            className="bg-red-50 rounded-xl text-xl flex flex-col gap-6 p-8">
            <span className="font-semibold">Опишите ваш будущий проект:</span>
            <textarea
              rows={8}
              className="bg-transparent border-b-2 border-b-black outline-none resize-none placeholder-gray-700 placeholder-opacity-50 text-base min-h-[200px] max-w-full"
              name="user_message"
              placeholder="Расскажите о своих идеях, целях и функциях, которые хотите реализовать!"
            />
            <span className="font-semibold">Оставьте ваш email или номер телефона:</span>
            <input
              name="user_contact"
              type="text"
              className="bg-transparent border-b-2 border-b-black outline-none text-base min-h-[40px] max-w-full placeholder-opacity-50"
              placeholder="Ваш email или номер телефона"
            />

            <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 my-3">
              Отправить
            </button>
            {success && (
              <span className="text-green-600 font-semibold">
                Ваше сообщение успешно отправлено!
              </span>
            )}
            {error && <span className="text-red-600 font-semibold">Что-то пошло не так!</span>}
            {validationError && (
              <span className="text-red-600 font-semibold">{validationError}</span>
            )}
          </form>

          {/* Социальные сети */}
          <div className="flex flex-col items-center mt-10">
            <span className="text-lg md:text-xl font-semibold mb-4 ">
              Или напишите нам в соцсетях:
            </span>
            <div className="flex space-x-7">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-600 hover:text-pink-400" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-400" />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="text-2xl text-blue-400 hover:text-blue-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
