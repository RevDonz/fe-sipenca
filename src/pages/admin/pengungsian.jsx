import axios from 'axios';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

const DataPengungsian = ({ pengungsian }) => {
  const { data } = pengungsian;
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const HandleSubmit = async (e) => {
    try {
      setSuccess(false);
      e.preventDefault();
      const key = e.target.key.value;
      const namaTempat = e.target.nama_tempat.value;
      const kapasitasTempat = e.target.kapasitas_tempat.value;
      const alamat = e.target.alamat.value;

      if(!namaTempat) return toast.warning("Nama tempat tidak boleh kosong")
      if(!kapasitasTempat) return toast.warning("Kapasitas tempat tidak boleh kosong")
      if (!alamat) return toast.warning('Alamat tidak boleh kosong');
      if (!success) toast.loading('loading');

      const res = await axios.patch(
        backend + `/v2/pengungsian/?key=${key}`,
        {
          nama_tempat: namaTempat,
          kapasitas_tempat: kapasitasTempat,
          alamat: alamat,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
          params: {
            key: key,
          },
        }
      );

      if (res.data.status == 200) {
        router.replace(router.asPath);
        toast.dismiss();
        toast.success(res.data.message);
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleDelete = async (key) => {
    try {
      setSuccess(false);
      if (!success) toast.loading('loading');

      const res = await axios.delete(backend + `/v2/pengungsian/`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
        params: {
          key: key,
        },
      });

      if (res.data.status == 200) {
        router.replace(router.asPath);
        toast.dismiss();
        toast.success(res.data.message);
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ExpandedComponent = ({ data }) => (
    <div className='px-10 py-5'>
      <form onSubmit={HandleSubmit}>
        <div className='grid grid-cols-2 gap-3'>
          <div className=''>
            <label
              for='nama_tempat'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Nama Tempat
            </label>
            <input
              type='text'
              id='nama_tempat'
              name='nama_tempat'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
              defaultValue={data.nama_tempat}
            />
          </div>
          <div className=''>
            <label
              for='kapasitas_tempat'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Kapasitas Tempat
            </label>
            <input
              type='text'
              id='kapasitas_tempat'
              name='kapasitas_tempat'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
              defaultValue={data.kapasitas_tempat}
            />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-3 mt-3'>
          <div className=''>
            <label
              for='alamat'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Alamat
            </label>
            <input
              type='text'
              id='alamat'
              name='alamat'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
              defaultValue={data.alamat}
            />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='mt-3 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm'
            type='submit'
          >
            Ubah Data
          </button>
          <button
            className='mt-3 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm'
            onClick={(e) => {
              e.preventDefault();
              HandleDelete(data.key);
            }}
          >
            Hapus Data
          </button>
        </div>
        <input type='hidden' value={data.key} name='key' />
      </form>
    </div>
  );

  const columns = [
    {
      name: 'Nama Tempat',
      selector: (row) => row.nama_tempat,
      sortable: true,
    },
    {
      name: 'Alamat',
      selector: (row) => row.alamat,
      sortable: true,
    },
    {
      name: 'Kapasitas',
      cell: (row) => (
        <p>
          {row.pengungsi
            ? row.kapasitas_tempat - row.pengungsi.length
            : row.kapasitas_tempat}
          /{row.kapasitas_tempat}
        </p>
      ),
    },
  ];

  useEffect(() => {
    setUser(JSON.parse(getCookie('user')));
    setToken(getCookie('token'));
  }, []);

  return (
    <Layout title={'Data Pengungsian'} user={user}>
      <Head>
        <title>Sipenca | Dashboard - Pengungsian</title>
      </Head>
      <div className='p-10'>
        <DataTable
          className='test-datatable'
          columns={columns}
          data={data.list_pengungsian}
          pagination
          responsive
          expandOnRowClicked
          expandableRows
          expandableRowsComponent={ExpandedComponent}
        />
      </div>
    </Layout>
  );
};

const fetchDataPengungsian = async (token) => {
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
