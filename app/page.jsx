import Image from 'next/image';

const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>
      <div className="h-1/2  flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl font-bold pt-64">Developing modern websites with promotion!</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempora harum illum quidem
          molestiae ab error dignissimos autem vero. Nam dicta quas, qui autem expedita architecto
          temporibus itaque? Voluptatum, porro.Lorem psum dolor sit amet consectetur adipisicing
          elit. At tempora harum illum quidem molestiae ab error dignissimos autem vero. Nam dicta
          quas, qui autem expedita architec.{' '}
        </p>
        <div className=" flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Our services</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Evaluate Your Website</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
