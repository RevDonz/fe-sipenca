import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { GiCampingTent } from 'react-icons/gi';
import {
  HiOutlineUser,
  HiOutlineUserCircle,
  HiOutlineUserGroup,
} from 'react-icons/hi2';

const Sidebar = () => {
  const router = useRouter();
  const urlName = router.pathname;

  return (
    <div className='w-1/3 bg-white p-5 rounded-lg'>
      <div className='flex items-center gap-3'>
        <HiOutlineUserCircle className='h-16 w-16' />
        <h3 className='font-semibold text-xl'>Warga 1</h3>
      </div>
      <div className='flex flex-col justify-start mt-5 gap-1 transition'>
        <Link href={'/dashboard'}>
          <div
            className={`p-3 rounded-md flex items-center gap-3 ${
              urlName == '/dashboard'
                ? 'bg-[#254A75] text-white'
                : 'hover:bg-gray-100 text-[#254A75] '
            }`}
          >
            <HiOutlineUser className={`stroke-2 w-6 h-6`} />
            <p className={`font-semibold `}>Akun Saya</p>
          </div>
        </Link>
        <Link href={'/dashboard/keluarga'}>
          <div
            className={`p-3 rounded-md flex items-center gap-3 ${
              urlName == '/dashboard/keluarga'
                ? 'bg-[#254A75] text-white'
                : 'hover:bg-gray-100 text-[#254A75]'
            }`}
          >
            <HiOutlineUserGroup className='stroke-[1.5px] w-6 h-6' />
            <p className='font-semibold'>Keluarga</p>
          </div>
        </Link>
        <Link href={'/dashboard/pengungsian'}>
          <div
            className={`p-3 rounded-md flex items-center gap-3 ${
              urlName == '/dashboard/pengungsian'
                ? 'bg-[#254A75] text-white'
                : 'hover:bg-gray-100 text-[#254A75]'
            }`}
          >
            <GiCampingTent className='stroke-[1.5px] w-6 h-6' />
            <p className='font-semibold'>Pengungsian</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
