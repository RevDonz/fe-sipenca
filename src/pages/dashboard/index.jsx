import axios from 'axios';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';

const PengungsianWarga = ({ pengungsian }) => {
  const { data } = pengungsian;
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;
  const token = getCookie('token');
  const router = useRouter();

  let user = {};
  if (typeof getCookie('user') !== 'undefined' && getCookie('user') !== '') {
    user = JSON.parse(getCookie('user'));
  }

  console.log(user);

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const HandlePengungsian = async (key) => {
    const res = await axios.post(
      backend + '/v1/mengungsi/',
      {
        key: key,
      },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );

    if (res.status == 200) {
      refreshData();
      toast.success(res.data.message);
    }
  };

  return (
    <Layout title={'Pengungsian'} user={user}>
      <Head>
        <title>Sipenca | Dashboard - Pengungsian</title>
      </Head>
      <div className='bg-[#FFFFFF] p-10 pt-12'>
        <div className='bg-[#EFF0F2] overflow-x-auto relative mx-auto max-w-screen-xl rounded-lg p-5'>
          <table className='text-[#254A75] text-left p-4 w-full'>
            <thead className='border-b-2'>
              <tr>
                <th className='p-5'></th>
                <th className='p-5'>Nama</th>
                <th className='p-5'>Alamat</th>
                <th className='p-5'>Kapasitas</th>
              </tr>
            </thead>
            <tbody>
              {data.list_pengungsian.map((data, index) => {
                return (
                  <tr className='border-b-2' key={index}>
                    <td className='p-5'>
                      <button
                        type='button'
                        className='rounded-md px-3 py-2 bg-[#254A75] text-white'
                        onClick={() => HandlePengungsian(data.key)}
                      >
                        Join
                      </button>
                    </td>
                    <td className='p-5'>{data.nama_tempat}</td>
                    <td className='p-5'>{data.alamat}</td>
                    <td className='p-5'>
                      {data.pengungsi
                        ? data.kapasitas_tempat - data.pengungsi.length
                        : data.kapasitas_tempat}
                      /{data.kapasitas_tempat}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

const fetchDataPengungsian = async (token) => {
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

  return await axios.get(backend + '/v2/pengungsian/', {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

export async function getServerSideProps({ req, res }) {
  const token = getCookie('token', { req, res });

  const pengungsianResponse = await fetchDataPengungsian(token);
  const pengungsian = pengungsianResponse.data;

  return { props: { pengungsian } };
}

export default PengungsianWarga;
