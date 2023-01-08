import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link as Scroll } from 'react-scroll';
import { SidebarMenuAdmin, SidebarMenuWarga } from '../../data/menu';
import useWindowScroll from '../../lib/useWindowScroll';

const MobileNavbar = ({ user }) => {
  const scrollPos = useWindowScroll();
  const [show, setShow] = useState(false);
  const router = useRouter();
  const urlName = router.pathname;
  const SidebarMenu =
    user && user.role === 'admin' ? SidebarMenuAdmin : SidebarMenuWarga;

  const Logout = () => {
    deleteCookie('token');
    deleteCookie('user');
    router.push('/');
  };

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
          <div className='relative'>
            <button
              onClick={() => setShow(!show)}
              className='p-2 border rounded-md hover:bg-[#254A75] hover:text-white text-[#254A75]'
            >
              <HiMenu className='h-6 w-6' />
            </button>

            {show && (
              <div
                className='absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg'
                role='menu'
              >
                {urlName == '/' ? (
                  <div className='p-2'>
                    <Link href={'/'}>
                      <div
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                        onClick={() => setShow(!show)}
                      >
                        Beranda
                      </div>
                    </Link>

                    <Scroll to='tentang' offset={-50} spy smooth>
                      <div
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                        onClick={() => setShow(!show)}
                      >
                        Tentang
                      </div>
                    </Scroll>
                    <Link href={'/login'}>
                      <div
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm text-[#254A75] hover:bg-[#254A75]/5'
                      >
                        Login / Register
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className='p-2'>
                    {SidebarMenu.map((data, index) => {
                      return (
                        <Link href={data.url} key={index}>
                          <div
                            href='#'
                            className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                          >
                            {data.menu}
                          </div>
                        </Link>
                      );
                    })}
                    <button
                      type='submit'
                      className='flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50'
                      onClick={() => Logout()}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
