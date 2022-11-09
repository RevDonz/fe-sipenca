import Image from 'next/image';
import Navbar from '../components/Navbar';
import HeroImage from '../../public/hero.jpg';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='bg-white'>
        <div className='flex flex-col md:flex-row mx-auto w-[90%] max-w-screen-xl min-h-screen  '>
          <div className='flex w-full flex-col justify-center md:w-1/2'>
            <h1 className='text-3xl font-bold text-[#254A75]'>
              Bersama Sipenca
            </h1>
            <h2 className='text-2xl font-bold text-[#254A75]'>
              Kita Siap Membantu Keluarga
            </h2>
            <p className='mt-3 font-medium text-[#254A75]'>
              Solusi untuk mencari lokasi pengungsian dengan mudah dan nyaman
            </p>
            <div className=''>
              <button className='px-6 py-3 bg-[#254A75] text-white rounded-md mt-5'>
                Cari Pengungsian
              </button>
            </div>
          </div>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
            <Image
              src={HeroImage}
              alt='hero image'
              priority
              // width={500}
              // height={300}
            />
          </div>
        </div>
      </div>
      <div className='bg-[#E1EBF3]'>
        <div className='flex flex-col items-center justify-center py-10 mx-auto w-[90%] max-w-screen-xl'>
          <h2 className='text-xl font-bold text-[#254A75]'>
            Temukan Tempat Pengungsian Terdekat
          </h2>
          <div className='mt-5 flex h-12 w-1/2 items-center gap-3 rounded-md bg-white px-3 shadow-md'>
            <div className='flex w-full items-center gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='h-5 w-5 text-gray-500'
              >
                <path
                  fillRule='evenodd'
                  d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
                  clipRule='evenodd'
                />
              </svg>
              <input
                type='text'
                placeholder='Cari Lokasi Pengungsian (Contoh: Kecamatan)'
                className='w-full outline-none'
              />
            </div>
            <button className='ml-auto rounded-md bg-[#254A75] px-3 py-1 text-white'>
              Cari
            </button>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='flex py-10 mx-auto w-[90%] max-w-screen-xl'>
          <div className='w-1/3'>
            <p>Tentang</p>
            <h2 className='text-2xl font-bold text-[#254A75]'>
              Apa itu Sipenca?
            </h2>
          </div>
          <div className='w-2/3 space-y-3'>
            <p>
              SIPENCA merupakan aplikasi yang dikembangkan untuk membantu warga
              melihat lokasi - lokasi pengungsian pada saat terjadinya bencana
              alam.
            </p>
            <p>
              Aplikasi ini membantu para korban bencana agar mendapatkan
              informasi yang tepat dan cepat serta dapat membantu pihak berwajib
              dalam proses penanggulangan bencana alam.
            </p>
            <p>
              Pengguna aplikasi ini akan mendapatkan informasi-informasi
              mengenai lokasi-lokasi pengungsian terdekat dari rumah warga
              tersebut seperti deskripsi pengungsian atau status pengungsian.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-[#254A75]'>
        <div className='flex items-center justify-between py-5 mx-auto w-[90%] max-w-screen-xl'>
          <div className='flex gap-5 items-center'>
            <Image
              src={'/logo/logo-sipenca-white.svg'}
              alt='logo-sipenca'
              width={40}
              height={40}
            />
            <p className='text-white'>Copyright © 2022 - All right reserved</p>
          </div>
          <div className='flex gap-3'>
            <p className='text-white'>@twitter</p>
            <p className='text-white'>@instagram</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
