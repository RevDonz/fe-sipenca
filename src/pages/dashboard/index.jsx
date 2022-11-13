import React, { Children } from 'react'
import Layout from '../../components/Layout'

const PengungsianWarga = () => {
  return (
    <Layout title={"Pengungsian"}>
      <div className='bg-[#FFFFFF] p-10 pt-12'>
        <div className='bg-[#EFF0F2] overflow-x-auto relative mx-auto max-w-screen-xl rounded-lg p-5'>
          <table className='table-auto text-[#254A75] text-left p-4'>
            <thead className='border-b-2'>
              <tr>
                <th className='p-5'></th>
                <th className='p-5'>Nama</th>
                <th className='p-5'>Alamat</th>
                <th className='p-5'>Kapasitas</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b-2'>
                <td className='p-5'>
                  <button type='button' className='rounded-md px-3 py-2 bg-[#254A75] text-white'>Join</button>
                </td>
                <td className='p-5'>Pengungsian 1</td>
                <td className='p-5'>Jl. Mawar no 04,
                  Kota Bandung, Jawa Barat</td>
                <td className='p-5'>17/20</td>
              </tr>
              <tr className='border-b-2'>
                <td className='p-5'>
                  <button type='button' className='rounded-md px-3 py-2 bg-[#254A75] text-white'>Join</button>
                </td>
                <td className='p-5'>Pengungsian 2</td>
                <td className='p-5'>Jl. Mawar no 04,
                  Kota Bandung, Jawa Barat</td>
                <td className='p-5'>20/20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default PengungsianWarga