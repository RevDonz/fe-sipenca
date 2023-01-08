import { deleteCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiBars3, HiChevronDown, HiOutlineUserCircle } from 'react-icons/hi2';
import { Link as Scroll } from 'react-scroll';
import { SidebarMenuAdmin, SidebarMenuWarga } from '../../data/menu';
import useWindowScroll from '../../lib/useWindowScroll';

const DesktopNavbar = ({ user }) => {
  const scrollPos = useWindowScroll();
  const router = useRouter();
  const urlName = router.pathname;
  const [show, setShow] = useState(false);
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
          urlName == '/admin' ||
          urlName == '/admin/pengungsian' ||
          urlName == '/dashboard/edit-profil' ||
          urlName == '/dashboard/keluarga' ||
          urlName == '/dashboard/profil' ? (
            <div className='relative'>
              {urlName == '/dashboard' ||
              urlName == '/admin' ||
              urlName == '/dashboard/keluarga' ||
              urlName == '/dashboard/edit-profil' ||
              urlName == '/dashboard/profil' ? (
                <button
                  className='flex items-center rounded border border-[#254A75] px-3 py-2 gap-1 text-[#254A75] hover:bg-gray-100 focus:outline-none'
                  onClick={() => setShow(!show)}
                >
                  <HiOutlineUserCircle className='h-6 w-6' />
                  <span className='text-sm font-medium'>
                    {user.nama_lengkap}
                  </span>
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

              {show && (
                <div
                  className='absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg'
                  role='menu'
                >
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
                </div>
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
