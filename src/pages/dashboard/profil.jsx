import axios from 'axios';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

const Dashboard = ({ user }) => {
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
      <div className='p-5'>
        <div className='space-y-5'>
          <div className='flex flex-col gap-3'>
            <label htmlFor='nama' className='font-medium'>
              Nama
            </label>
            <input
              type='text'
              id='nama'
              value={nama_lengkap}
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
              value={alamat_user}
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
              value={no_tlp}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
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

const fetchDataUser = async (token) => {
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

  return await axios.get(backend + '/v2/profil/', {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

export async function getServerSideProps({ req, res }) {
  const token = getCookie('token', { req, res });

  const userResponse = await fetchDataUser(token);
  const user = userResponse.data;

  return { props: { user } };
}

export default Dashboard;
