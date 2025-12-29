/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  // Все реврайты с /ru и /pl удаляем, они больше не нужны
};

export default nextConfig; // Просто экспорт объекта, БЕЗ withNextIntl