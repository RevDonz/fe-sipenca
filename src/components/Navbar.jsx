import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 z-50'>
      <div className='bg-white'>
        <div className='h-16 flex items-center justify-between mx-auto w-[90%] max-w-screen-xl'>
          <Link href={'/'}>
            <Image
              src={'/logo/logo-sipenca-colored.svg'}
              alt='logo-sipenca'
              width={40}
              height={40}
            />
          </Link>
          <div className='flex gap-1'>
            <Link href={'/'}>
              <button className='rounded-md px-3 py-2 text-[#254A75] transition hover:bg-[#254A75] hover:text-white'>
                Beranda
              </button>
            </Link>
            <div className='rounded-md px-3 py-2 text-[#254A75] transition hover:bg-[#254A75] hover:text-white'>
              Tentang
            </div>
            <div className='rounded-md px-3 py-2 text-[#254A75] transition hover:bg-[#254A75] hover:text-white'>
              Keluarga
            </div>
            <Link href={'/dashboard'}>
              <button
                href='404.html'
                className='rounded-md border border-gray-300 px-3 py-2 text-[#307DD1] transition hover:bg-[#307DD1] hover:text-white'
              >
                Login / Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
