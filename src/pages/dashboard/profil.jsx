import { getCookie } from 'cookies-next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

const Dashboard = () => {
  const user = JSON.parse(getCookie('user'));

  const {
    nama_lengkap,
    alamat_user,
    no_tlp,
    kota_lahir,
    tanggal_lahir,
    penyakit,
  } = user;

  return (
    <Layout title={'Profile'} user={user}>
      <Head>
        <title>Sipenca | Dashboard - Profil</title>
      </Head>
      <div className='p-5'>
        <div className='space-y-5'>
          <div className='flex flex-col gap-3'>
            <label htmlFor='nama' className='font-medium'>
              Nama
            </label>
            <input
              type='text'
              id='nama'
              defaultValue={nama_lengkap}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
              readOnly
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='alamat' className='font-medium'>
              Alamat
            </label>
            <input
              type='text'
              id='alamat'
              defaultValue={alamat_user}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
              readOnly
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='notelp' className='font-medium'>
              No Telepon
            </label>
            <input
              type='text'
              id='notelp'
              defaultValue={no_tlp}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
              readOnly
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='kota_lahir' className='font-medium'>
              Kota Lahir
            </label>
            <input
              type='text'
              id='kota_lahir'
              defaultValue={kota_lahir}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
              readOnly
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='tanggal_lahir' className='font-medium'>
              Tanggal Lahir
            </label>
            <input
              type='text'
              id='tanggal_lahir'
              defaultValue={tanggal_lahir}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
              readOnly
            />
          </div>
        </div>
        <div className='flex justify-end'>
          <Link href={'/dashboard/edit-profil'}>
            <button className='px-3 py-2 rounded-md border border-[#254A75] mt-5 hover:bg-[#254A75] transition hover:text-white ml-auto'>
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
