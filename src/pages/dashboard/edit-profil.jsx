import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';

const EditProfil = () => {
  let user = {};

  if (typeof getCookie('user') !== 'undefined' && getCookie('user') !== '') {
    user = JSON.parse(getCookie('user'));
  }

  const {
    nama_lengkap,
    alamat_user,
    no_tlp,
    kota_lahir,
    tanggal_lahir,
    penyakit,
  } = user;

  const [nama, setNama] = useState(nama_lengkap);
  const [alamat, setAlamat] = useState(alamat_user);
  const [noTelp, setNoTelp] = useState(no_tlp);
  const [kotaLahir, setKotaLahir] = useState(kota_lahir);
  const [tanggalLahir, setTanggalLahir] = useState(tanggal_lahir);
  const [success, setSuccess] = useState(false);
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;
  const token = getCookie('token');
  const router = useRouter();

  const SubmitHandler = async () => {
    try {
      if (!nama) return toast.warning('Nama tidak boleh kosong!');
      if (!alamat) return toast.warning('Alamat tidak boleh kosong!');
      if (!noTelp) return toast.warning('No Telepon tidak boleh kosong!');
      if (!kotaLahir) return toast.warning('Kota Lahir tidak boleh kosong!');
      if (!tanggalLahir)
        return toast.warning('Tanggal Lahir tidak boleh kosong!');

      if (!success) toast.loading('loading');

      const res = await axios.post(
        backend + '/v2/profil',
        {
          alamat_user: alamat,
          penyakit: '-',
          nama_lengkap: nama,
          no_tlp: noTelp,
          kota_lahir: kotaLahir,
          tanggal_lahir: tanggalLahir,
          role: 'warga'
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      if (res.status == 200) {
        router.push('/dashboard/profil');
        setCookie('user', res.data);
        toast.dismiss();
        toast.success('Berhasil update profil!');
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout title={'Edit Profil'} user={user}>
      <Head>
        <title>Sipenca | Dashboard - Edit Profil</title>
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
              value={nama}
              onChange={(e) => setNama(e.target.value)}
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
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
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
              value={noTelp}
              onChange={(e) => setNoTelp(e.target.value)}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='kotaLahir' className='font-medium'>
              Kota Lahir
            </label>
            <input
              type='text'
              id='kotaLahir'
              value={kotaLahir}
              onChange={(e) => setKotaLahir(e.target.value)}
              className='px-3 py-2 border rounded-md focus:outline-none focus:ring-[#307DD1] focus:ring-1 bg-gray-50 text-[#254A75] font-medium'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='tanggalLahir' className='font-medium'>
              Tanggal Lahir
            </label>
            <input
              type='text'
              id='tanggalLahir'
              value={tanggalLahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
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
          <button
            className='px-3 py-2 rounded-md border border-[#254A75] mt-5 bg-[#254A75] transition text-white ml-auto'
            onClick={SubmitHandler}
          >
            Edit Profil
          </button>
        </div>
      </div>
    </Layout>
  );
};

// const fetchDataUser = async (token) => {
//   const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

//   return await axios.get(backend + '/v2/profil/', {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   });
// };

// export async function getServerSideProps({ req, res }) {
//   const token = getCookie('token', { req, res });

//   const userResponse = await fetchDataUser(token);
//   const user = userResponse.data;

//   return { props: { user } };
// }

export default EditProfil;
