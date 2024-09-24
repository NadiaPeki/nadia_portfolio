'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './NavLink';

const links = [
  { url: '/', title: 'Home' },
  { url: '/sites', title: 'Create site' },
  { url: '/promotion', title: "Site's promotion" },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl ">
      <div className="hidden md:flex gap-4 ">
        {links.map((link) => (
         <NavLink link={link}  key={link.title}/>
        ))}
      </div>
      <div className=" ">
        <Link
          href="/"
          className="text-sm bg-slate-900 rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-white mr-1">Rage</span>
          <span className="w-12 h-8 rounded bg-red-100 text-black flex items-center justify-center">
            .tech
          </span>
        </Link>
      </div>
      {/* <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://www.facebook.com/groups/1348351072791760" target="_blank">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/ai.hope.technologies/" target="_blank">
          <Image src="/instagram.png" alt="insta" width={24} height={24} />
        </Link>
      </div> */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl z-40">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
