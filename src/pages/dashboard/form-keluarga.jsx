import { getCookie } from 'cookies-next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../../components/Layout';

const FormKeluarga = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(JSON.parse(getCookie('user')));
  }, []);

  return (
    <Layout title={'Keluarga'} user={user}>
      <Head>
        <title>Sipenca | Dashboard - Tambah Keluarga</title>
      </Head>
      <div className='w-full'>
        <form className='bg-white rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-m font-bold mb-2'
              for='namalengkap'
            >
              Nama Lengkap
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200'
              id='namalengkap'
              type='text'
              placeholder=''
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-m font-bold mb-2'
              for='nik'
            >
              NIK
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200'
              id='nik'
              type='text'
              placeholder=''
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-m font-bold mb-2'
              for='nik'
            >
              Tanggal Lahir
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200'
              id='tanggallahir'
              type='text'
              placeholder=''
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-m font-bold mb-2'
              for='nik'
            >
              Alamat
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200'
              id='alamat'
              type='text'
              placeholder=''
            />
          </div>
          <div className='flex items-center justify-between'>
            <Link href={'/dashboard/keluarga'}>
              <button
                className='bg-gray-100 hover:bg-gray-300 text-blue-500 font-bold py-2 px-6 rounded border border-blue-300 focus:outline-none focus:shadow-outline'
                type='button'
              >
                Batal
              </button>
            </Link>
            <Link href={'/dashboard/keluarga'}>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline'
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

export default FormKeluarga;
