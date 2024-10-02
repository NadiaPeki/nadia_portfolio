'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState('');
  const text = "Let's create site...";

  const form = useRef();

  // Функция валидации
  const validateForm = () => {
    const contactInfo = form.current.user_contact.value;

    // Регулярное выражение для проверки email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Регулярное выражение для проверки номера телефона
    const phoneRegex = /^[\d\s()+-]+$/;

    if (!contactInfo) {
      setValidationError('Please provide either an email or a phone number.');
      return false;
    }

    // Проверяем, соответствует ли введенное значение либо email, либо номеру телефона
    if (!emailRegex.test(contactInfo) && !phoneRegex.test(contactInfo)) {
      setValidationError('Please enter a valid email or phone number.');
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
      className="min-h-screen "
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-10 py-10 md:py-20">
        {' '}
        {/* Отступы на мобильных и десктопах */}
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 text-start text-5xl md:text-6xl">
          <div>
            {text.split('').map((letter, index) => (
              <motion.span
                className="pr-3"
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
          {' '}
          {/* Обёртка для формы */}
          <form
            onSubmit={sendEmail}
            ref={form}
            className="bg-red-50 rounded-xl text-xl flex flex-col gap-6 p-8" // Убрали height для лучшей адаптивности
          >
            <span className="font-semibold">Describe your future site:</span>
            <textarea
              rows={8} // Увеличиваем высоту текстового поля
              className="bg-transparent border-b-2 border-b-black outline-none resize-none placeholder-gray-700 placeholder-opacity-50 text-base min-h-[200px] max-w-full" // Добавлено min-h для предотвращения сжатия
              name="user_message"
              placeholder="Please describe your ideas, goals, and any specific features you want."
            />
            <span className="font-semibold">Leave your email or phone number:</span>
            <input
              name="user_contact"
              type="text"
              className="bg-transparent border-b-2 border-b-black outline-none text-base min-h-[40px] max-w-full placeholder-opacity-50" // Увеличено min-h для инпута
              placeholder="Your email or phone number"
            />
            <span>Regards</span>
            <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
            {success && (
              <span className="text-green-600 font-semibold">
                Your message has been sent successfully!
              </span>
            )}
            {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}
            {validationError && (
              <span className="text-red-600 font-semibold">{validationError}</span>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
