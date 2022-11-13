import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import useWindowScroll from '../../lib/useWindowScroll';

const MobileNavbar = () => {
  const scrollPos = useWindowScroll();
  const [show, setShow] = useState(false);
  const router = useRouter();
  const urlName = router.pathname;

  return (
    <div className={`bg-white transition ${scrollPos > 50 ? 'shadow-md' : ''}`}>
      <div className='h-16 flex items-center justify-between mx-auto w-[90%] max-w-screen-xl'>
        <Link href={'/'}>
          <Image
            src={'/logo/logo-sipenca-colored.svg'}
            alt='logo-sipenca'
            width={40}
            height={40}
          />
        </Link>
        <div className='flex'>
          <div class='relative'>
            <button
              onClick={() => setShow(!show)}
              className='p-2 border rounded-md hover:bg-[#254A75] hover:text-white text-[#254A75]'
            >
              <HiBars3 className='h-6 w-6' />
            </button>

            {show ? (
              <div
                class='absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg'
                role='menu'
              >
                {urlName == '/' ? (
                  <div class='p-2'>
                    <Link href={'/'}>
                      <div
                        href='#'
                        class='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                      >
                        Beranda
                      </div>
                    </Link>

                    <Link href={'/'}>
                      <div
                        href='#'
                        class='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                      >
                        Tentang
                      </div>
                    </Link>
                    <Link href={'/login'}>
                      <div
                        href='#'
                        class='block rounded-lg px-4 py-2 text-sm text-[#254A75] hover:bg-[#254A75]/5'
                      >
                        Login / Register
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div class='p-2'>
                    <Link href={'/dashboard'}>
                      <div
                        href='#'
                        class='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                      >
                        Akun Saya
                      </div>
                    </Link>

                    <Link href={'/dashboard/keluarga'}>
                      <div
                        href='#'
                        class='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                      >
                        Keluarga
                      </div>
                    </Link>
                    <Link href={'/dashboard/keluarga'}>
                      <div
                        href='#'
                        class='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                      >
                        Pengungsian
                      </div>
                    </Link>

                    <Link href={'/'}>
                      <button
                        type='submit'
                        class='flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50'
                      >
                        Logout
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
