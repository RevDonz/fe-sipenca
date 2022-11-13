import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

const EditProfil = () => {
  return (
    <Layout title={'Edit Profil'}>
      <div className='p-5'>
        <div className='space-y-5'>
          <div className='flex flex-col gap-3'>
            <label htmlFor='nama' className='font-medium'>
              Nama
            </label>
            <input
              type='text'
              id='nama'
              defaultValue={'Warga 1'}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='alamat' className='font-medium'>
              Alamat
            </label>
            <input
              type='text'
              id='alamat'
              defaultValue={'Bandung'}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='notelp' className='font-medium'>
              No Telepon
            </label>
            <input
              type='text'
              id='notelp'
              defaultValue={'089123456789'}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
            />
          </div>
        </div>
        <div className='flex justify-end gap-3'>
          <Link href={'/dashboard/profil'}>
            <button className='px-3 py-2 rounded-md border border-[#254A75] mt-5 hover:bg-[#254A75] transition hover:text-white ml-auto'>
              Kembali
            </button>
          </Link>
          <Link href={'/dashboard/profil'}>
            <button className='px-3 py-2 rounded-md border border-[#254A75] mt-5 bg-[#254A75] transition text-white ml-auto'>
              Edit Profil
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfil;
