import axios from 'axios';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';

const PengungsianWarga = ({ account, pengungsian }) => {
  const { data } = pengungsian;
  const { is_join } = account;
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;
  const token = getCookie('token');
  const [user, setUser] = useState('');
  const [keyPengungsian, setKeyPengungsian] = useState('');
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const HandlePengungsian = async (key) => {
    const res = await axios.post(
      backend + '/v2/mengungsi/',
      {
        key: key,
      },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );

    setKeyPengungsian(res.data.data.key);

    if (res.status == 200) {
      refreshData();
      toast.success(res.data.message);
    }
  };

  const HandleKeluar = async (key) => {
    const res = await axios.delete(backend + '/v2/mengungsi/', {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    if (res.status == 200) {
      refreshData();
      toast.success(res.data.message);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(getCookie('user')));
  }, []);

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
                      {is_join ? (
                        <div className=''>
                          {data.key == keyPengungsian ? (
                            <button
                              type='button'
                              className={
                                'rounded-md px-3 py-2 w-20 bg-[#254A75] text-white '
                              }
                              onClick={() => HandleKeluar(data.key)}
                            >
                              Keluar
                            </button>
                          ) : (
                            <button
                              type='button'
                              className={`rounded-md px-3 py-2 w-20 bg-[#254A75] text-white ${
                                is_join ? 'bg-slate-300' : 'bg-[#254A75]'
                              }`}
                              disabled
                            >
                              Join
                            </button>
                          )}
                        </div>
                      ) : (
                        <button
                          type='button'
                          className={`rounded-md px-3 py-2 w-20  text-white ${
                            is_join ? 'bg-slate-300' : 'bg-[#254A75]'
                          }`}
                          onClick={() => HandlePengungsian(data.key)}
                          disabled={is_join}
                        >
                          Join
                        </button>
                      )}

                      {/* <button
                        type='button'
                        className={`rounded-md px-3 py-2 bg-[#254A75] text-white disabled disabled:bg-slate-300`}
                        onClick={() => HandlePengungsian(data.key)}
                        disabled={is_join}
                      >
                        Join
                      </button> */}
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

const fetchDataAccount = async (token) => {
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

  return await axios.get(backend + '/v1/akun/', {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

export async function getServerSideProps({ req, res }) {
  const token = getCookie('token', { req, res });

  const accResponse = await fetchDataAccount(token);
  const account = accResponse.data;

  const pengungsianResponse = await fetchDataPengungsian(token);
  const pengungsian = pengungsianResponse.data;

  return { props: { account, pengungsian } };
}

export default PengungsianWarga;
