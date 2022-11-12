import React from 'react';
import Layout from '../../components/Layout';

const Dashboard = () => {
  return (
    <Layout title={'Profile'}>
      <div className='p-5'>
        <div className='space-y-5'>
          <div className='flex flex-col gap-3'>
            <label htmlFor='nama' className='font-medium'>
              Nama
            </label>
            <input
              type='text'
              id='nama'
              value={'Warga 1'}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#307DD1] font-medium'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='alamat' className='font-medium'>
              Alamat
            </label>
            <input
              type='text'
              id='alamat'
              value={'Bandung'}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#307DD1] font-medium'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='notelp' className='font-medium'>
              No Telepon
            </label>
            <input
              type='text'
              id='notelp'
              value={'089123456789'}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#307DD1] font-medium'
            />
          </div>
        </div>
        <button className='px-3 py-2 rounded-md border border-[#307DD1] mt-5 hover:bg-[#307DD1] transition hover:text-white'>
          Update Profile
        </button>
      </div>
    </Layout>
  );
};

export default Dashboard;
