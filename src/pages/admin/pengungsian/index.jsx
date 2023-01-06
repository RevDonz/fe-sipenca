import axios from 'axios';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import React from 'react';
import Layout from '../../../components/Layout';

const DataPengungsian = ({ pengungsian }) => {
  const { data } = pengungsian;

  let user = {};
  if (typeof getCookie('user') !== 'undefined' && getCookie('user') !== '') {
    user = JSON.parse(getCookie('user'));
  }
  

  return (
    <Layout title={'Pengungsian'} user={user}>
      <Head>
        <title>Sipenca | Dashboard - Pengungsian</title>
      </Head>
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

export default DataPengungsian;
