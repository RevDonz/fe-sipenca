import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { SidebarMenuAdmin, SidebarMenuWarga } from '../data/menu';

const Sidebar = ({ user }) => {
  const router = useRouter();
  const urlName = router.pathname;

  const SidebarMenu =
    user.role === 'admin' || 'petugas' ? SidebarMenuAdmin : SidebarMenuWarga;

  return (
    <div className='bg-white p-5 rounded-lg'>
      <div className='flex items-center gap-3'>
        <FaRegUserCircle className='h-16 w-16' />
        <h3 className='font-semibold text-xl'>{user.nama_lengkap || ''}</h3>
      </div>
      <div className='flex flex-col justify-start mt-5 gap-1 transition'>
        {SidebarMenu.map((data, index) => {
          return (
            <Link href={data.url} key={index}>
              <div
                className={`p-3 rounded-md flex items-center gap-3 ${
                  urlName == data.url
                    ? 'bg-[#254A75] text-white'
                    : 'hover:bg-gray-100 text-[#254A75]'
                }`}
              >
                {data.icon}
                <p className='font-semibold'>{data.menu}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
