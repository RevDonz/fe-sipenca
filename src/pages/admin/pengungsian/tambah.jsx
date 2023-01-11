import axios from 'axios';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../../components/Layout';
const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

const TambahPengungsian = () => {
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');
  const router = useRouter();
  const [success, setSuccess] = useState(false);

  const HandleTambah = async (e) => {
    try {
      e.preventDefault();
      setSuccess(false);

      const namaTempat = e.target.nama_tempat.value;
      const kapasitasTempat = e.target.kapasitas_tempat.value;
      const alamat = e.target.alamat.value;
      console.log(namaTempat, kapasitasTempat, alamat);

      if (!namaTempat) return toast.warning('Nama tempat tidak boleh kosong');
      if (!kapasitasTempat)
        return toast.warning('Kapasitas tempat tidak boleh kosong');
      if (!alamat) return toast.warning('Alamat tidak boleh kosong');

      const res = await axios.post(
        backend + `/v2/pengungsian/`,
        {
          alamat: alamat,
          nama_tempat: namaTempat,
          kapasitas_tempat: kapasitasTempat,
          // is_owner: true,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      console.log(res);
      if (res.data.status == 200) {
        router.push('/admin/pengungsian/');
        toast.dismiss();
        toast.success(res.data.message);
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setToken(getCookie('token'));
    setUser(JSON.parse(getCookie('user')));
  }, []);
  return (
    <Layout title={'Tambah Pengungsian'} user={user}>
      <Head>
        <title>Sipenca | Admin - Tambah Pengungsian</title>
      </Head>
      <div className='p-5'>
        <div className='space-y-5'>
          <form onSubmit={HandleTambah}>
            <div className='flex flex-col gap-3'>
              <label htmlFor='nama' className='font-medium'>
                Nama Tempat
              </label>
              <input
                type='text'
                id='nama_tempat'
                className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='nama' className='font-medium'>
                Alamat
              </label>
              <input
                type='text'
                id='alamat'
                className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='nama' className='font-medium'>
                Kapasitas Tempat
              </label>
              <input
                type='number'
                id='kapasitas_tempat'
                className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
              />
            </div>
            <button
              className='mt-3 px-3 py-2 rounded-md bg-[#254A75] hover:bg-[#1d3b5e] text-white mb-5'
              type='submit'
            >
              Tambah
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default TambahPengungsian;
