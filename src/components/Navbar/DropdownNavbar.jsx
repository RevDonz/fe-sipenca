import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiChevronDown, HiOutlineUserCircle } from 'react-icons/hi2';

const DropdownNavbar = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const urlName = router.pathname;

  return urlName == '/dashboard' ||
    urlName == '/dashboard/keluarga' ||
    urlName == '/dashboard/pengungsian' ? (
    <div className='relative'>
      <button
        className='flex items-center rounded border border-[#254A75] px-3 py-2 gap-1 text-[#254A75] hover:bg-gray-100 focus:outline-none'
        onClick={() => setShow(!show)}
      >
        <HiOutlineUserCircle className='h-6 w-6' />
        <span className='text-sm font-medium'>Warga 1</span>
        <HiChevronDown className='stroke-2 translate-y-[1.5px]' />
      </button>

      {show ? (
        <div
          className='absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg'
          role='menu'
        >
          <div className='p-2'>
            <Link href={'/dashboard'}>
              <div
                href='#'
                className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              >
                Akun Saya
              </div>
            </Link>

            <Link href={'/dashboard/keluarga'}>
              <div
                href='#'
                className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              >
                Keluarga
              </div>
            </Link>
            <Link href={'/dashboard/keluarga'}>
              <div
                href='#'
                className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              >
                Pengungsian
              </div>
            </Link>

            <Link href={'/'}>
              <button
                type='submit'
                className='flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50'
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  ) : (
    <Link href={'/login'}>
      <button
        href='404.html'
        className='rounded-md border border-gray-300 px-3 py-2 text-[#307DD1] transition hover:bg-[#307DD1] hover:text-white'
      >
        Login / Register
      </button>
    </Link>
  );
};

export default DropdownNavbar;
