import React from 'react';
import { GiCampingTent } from 'react-icons/gi';
import {
  HiOutlineUser,
  HiOutlineUserCircle,
  HiOutlineUserGroup,
} from 'react-icons/hi2';

const Sidebar = () => {
  return (
    <div className='w-1/3 bg-white p-5 rounded-lg'>
      <div className='flex items-center gap-3'>
        <HiOutlineUserCircle className='h-16 w-16' />
        <h3 className='font-semibold text-xl'>Warga 1</h3>
      </div>
      <div className='flex flex-col justify-start mt-5 gap-1'>
        <div className='p-3 rounded-md bg-[#307DD1] flex items-center gap-3'>
          <HiOutlineUser className='stroke-2 w-6 h-6 text-white' />
          <p className='text-white font-semibold'>Akun Saya</p>
        </div>
        <div className='p-3 rounded-md hover:bg-gray-100 flex items-center gap-3'>
          <HiOutlineUserGroup className='text-[#307DD1] stroke-[1.5px] w-6 h-6' />
          <p className='text-[#254A75] font-semibold'>Keluarga</p>
        </div>
        <div className='p-3 rounded-md hover:bg-gray-100 flex items-center gap-3'>
          <GiCampingTent className='text-[#307DD1] stroke-[1.5px] w-6 h-6' />
          <p className='text-[#254A75] font-semibold'>Pengungsian</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
