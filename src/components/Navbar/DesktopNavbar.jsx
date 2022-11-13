import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiBars3, HiChevronDown, HiOutlineUserCircle } from 'react-icons/hi2';
import { Link as Scroll } from 'react-scroll';
import useWindowScroll from '../../lib/useWindowScroll';

const DesktopNavbar = () => {
  const scrollPos = useWindowScroll();
  const router = useRouter();
  const urlName = router.pathname;
  const [show, setShow] = useState(false);

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
        <div className='gap-1 flex'>
          <Link href={'/'}>
            <button className='rounded-md px-3 py-2 text-[#254A75] transition hover:bg-[#254A75] hover:text-white'>
              Beranda
            </button>
          </Link>
          <Scroll to='tentang' spy smooth>
            <div className='rounded-md px-3 py-2 text-[#254A75] transition hover:bg-[#254A75] hover:text-white'>
              Tentang
            </div>
          </Scroll>
          {urlName == '/dashboard' ||
          urlName == '/dashboard/keluarga' ||
          urlName == '/dashboard/pengungsian' ? (
            <div class='relative'>
              {urlName == '/dashboard' ||
              urlName == '/dashboard/keluarga' ||
              urlName == '/dashboard/pengungsian' ? (
                <button
                  class='flex items-center rounded border border-[#254A75] px-3 py-2 gap-1 text-[#254A75] hover:bg-gray-100 focus:outline-none'
                  onClick={() => setShow(!show)}
                >
                  <HiOutlineUserCircle className='h-6 w-6' />
                  <span class='text-sm font-medium'>Warga 1</span>
                  <HiChevronDown className='stroke-2 translate-y-[1.5px]' />
                </button>
              ) : (
                <button
                  onClick={() => setShow(!show)}
                  className='p-2 border rounded-md hover:bg-[#254A75] hover:text-white text-[#254A75]'
                >
                  <HiBars3 className='h-6 w-6' />
                </button>
              )}

              {show ? (
                <div
                  class='absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg'
                  role='menu'
                >
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
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
