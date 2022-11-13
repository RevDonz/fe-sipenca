import Head from 'next/head';
import Image from 'next/image';
import { Link } from 'react-scroll';
import HeroImage from '../../public/hero.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Head>
        <title>Sipenca | Aplikasi Penanganan Bencana</title>
      </Head>
      <Navbar />

      <div className='bg-white'>
        <div className='flex flex-col items-center justify-center md:flex-row mx-auto w-[90%] max-w-screen-xl h-screen'>
          <div className='flex w-full flex-col justify-center md:w-1/2'>
            <h1 className='text-2xl md:text-3xl xl:text-4xl font-bold text-[#254A75]'>
              Bersama Sipenca
            </h1>
            <h2 className='text-xl md:text-2xl xl:text-3xl font-bold text-[#254A75]'>
              Kita Siap Membantu Keluarga
            </h2>
            <p className='mt-3 font-medium xl:text-lg text-[#254A75]'>
              Solusi untuk mencari lokasi pengungsian dengan mudah dan nyaman
            </p>
            <Link to='pengungsian' spy smooth>
              <button className='px-4 py-2 md:px-6 md:py-3 bg-[#254A75] text-white rounded-md mt-5'>
                Cari Pengungsian
              </button>
            </Link>
          </div>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
            <Image src={HeroImage} alt='hero image' priority />
          </div>
        </div>
      </div>

      <div className='bg-[#E1EBF3]' id='pengungsian'>
        <div className='flex flex-col items-center justify-center py-10 mx-auto w-[90%] max-w-screen-xl'>
          <h2 className='text-xl md:text-2xl font-bold text-[#254A75]'>
            Temukan Tempat Pengungsian Terdekat
          </h2>
          <div className='mt-5 flex h-12 w-full md:w-3/4 lg:w-1/2 items-center gap-3 rounded-md bg-white px-3 shadow-md'>
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
        <div className='flex flex-col md:flex-row py-10 mx-auto w-[90%] max-w-screen-xl'>
          <div className='w-full md:w-1/3'>
            <h2 className='text-xl md:text-2xl font-bold text-[#254A75] md:text-left text-center'>
              Apa itu Sipenca?
            </h2>
          </div>
          <div className='w-full md:w-2/3 space-y-3 mt-5 md:mt-0'>
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
      <Footer />
    </>
  );
};

export default Home;
