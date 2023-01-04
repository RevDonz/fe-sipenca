import axios from 'axios';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

const FormKeluarga = ({ user }) => {
  return (
    <Layout title={'Keluarga'} user={user}>
      <Head>
        <title>Sipenca | Dashboard - Tambah Keluarga</title>
      </Head>
      <div class='w-full'>
        <form class='bg-white rounded px-8 pt-6 pb-8 mb-4'>
          <div class='mb-4'>
            <label
              class='block text-gray-700 text-m font-bold mb-2'
              for='namalengkap'
            >
              Nama Lengkap
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200'
              id='namalengkap'
              type='text'
              placeholder=''
            />
          </div>
          <div class='mb-6'>
            <label class='block text-gray-700 text-m font-bold mb-2' for='nik'>
              NIK
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200'
              id='nik'
              type='text'
              placeholder=''
            />
          </div>
          <div class='mb-6'>
            <label class='block text-gray-700 text-m font-bold mb-2' for='nik'>
              Tanggal Lahir
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200'
              id='tanggallahir'
              type='text'
              placeholder=''
            />
          </div>
          <div class='mb-6'>
            <label class='block text-gray-700 text-m font-bold mb-2' for='nik'>
              Alamat
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200'
              id='alamat'
              type='text'
              placeholder=''
            />
          </div>
          <div class='flex items-center justify-between'>
            <Link href={'/dashboard/keluarga'}>
              <button
                class='bg-gray-100 hover:bg-gray-300 text-blue-500 font-bold py-2 px-6 rounded border border-blue-300 focus:outline-none focus:shadow-outline'
                type='button'
              >
                Batal
              </button>
            </Link>
            <Link href={'/dashboard/keluarga'}>
              <button
                class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline'
                type='button'
              >
                Simpan
              </button>
            </Link>
          </div>
        </form>
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

export default FormKeluarga;
