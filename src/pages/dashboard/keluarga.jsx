import React from 'react';
import Layout from '../../components/Layout';

const keluarga = () => {
  return (
    <Layout title={"Data Keluarga"}>
        <div className='bg-white p-10 pt-12 text-[#254A75] flex justify-between'>
            
            <div>
                <button type='button' className='px-3 py-2 bg-gray-200 rounded-md text-[#254A75] p-10'>
                Tambah Data Keluarga
                </button>
            </div> 
        </div>
    

<div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 p-3 px-5">
        <thead class="text-xs text-[#254A75] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Nama
                </th>
                <th scope="col" class="py-3 px-6">
                    NIK
                </th>
                <th scope="col" class="py-3 px-6">
                    Tanggal Lahir
                </th>
                <th scope="col" class="py-3 px-6">
                    Alamat
                </th>
                <th scope="col" class="py-3 px-6">
                    Aksi
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[#254A75]">
                  <th scope="row" class="py-4 px-6 font-medium text-[#254A75] whitespace-nowrap dark:text-white">
                    Warga1 Lalalala
                </th>
                <td class="py-4 px-6">
    
                    3507027983578525
                </td>
                <td class="py-4 px-6">
                    20-02-2003
                </td>
                <td class="py-4 px-6">
                    Jl. Melati no 04, 
Kota Bandung, Jawa Barat
                </td>
                <td>
                    <button type='button' className='rounded-md px-3 py-2 bg-[#254A75] text-white'>Edit</button>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[#254A75]">
                <th scope="row" class="py-4 px-6 font-medium text-[#254A75] whitespace-nowrap dark:text-white">
                    Ibu Warga1
                </th>
                <td class="py-4 px-6">
                    3507027983578525
                </td>
                <td class="py-4 px-6">
                    20-02-2004
                </td>
                <td class="py-4 px-6">
                    Jl. Melati no 04, 
Kota Bandung, Jawa Barat
                </td>
                <td>
                    <button type='button' className='rounded-md px-3 py-2 bg-[#254A75] text-white'>Edit</button>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[#254A75]">
                <th scope="row" class="py-4 px-6 font-medium text-[#254A75] whitespace-nowrap dark:text-white">
                    Anak Warga1
                </th>
                <td class="py-4 px-6">
                    3507027983578525
                </td>
                <td class="py-4 px-6">
                    20-02-2015
                </td>
                <td class="py-4 px-6">
                    Jl. Melati no 04, 
Kota Bandung, Jawa Barat
                </td>
                <td>
                    <button type='button' className='rounded-md px-3 py-2 bg-[#254A75] text-white'>Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </Layout>
    
  )
}

export default keluarga;  
