import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiEye, HiEyeSlash, HiInbox, HiLockClosed } from 'react-icons/hi2';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(true);
  const router = useRouter();

  const SubmitHandler = async () => {
    try {
      const params = new URLSearchParams();
      params.append('username', username);
      params.append('password', password);

      const res = await toast.promise(
        axios.post('https://0f9vta.deta.dev/api/akun/login', params),
        {
          pending: 'Loading..',
          success: 'Login Berhasil!',
          error: 'Login Gagal!',
        }
      );

      if (res.status == 200) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', JSON.stringify(res.data));
        }
        router.push('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-[#E1EBF3]'>
      <div className='bg-white rounded-lg w-96 h-1/2 p-5'>
        <Image
          src={'/logo/logo-sipenca-lengkap.svg'}
          alt='logo-sipenca-lengkap'
          width={90}
          height={90}
          className='mx-auto my-3'
        />
        <h1 className='text-center font-medium text-xl mt-4'>LOGIN</h1>

        <div className='bg-gray-200 rounded-md mt-2 w-full px-3 py-2 focus-within:ring-2 focus-within:ring-[#51557E] flex items-center'>
          <div className='mr-5'>
            <HiInbox className='h-5 w-5 text-gray-500' />
          </div>

          <input
            type='text'
            name='text'
            id='text'
            className='w-full bg-transparent focus:outline-none'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className='bg-gray-200 rounded-md mt-2 w-full px-3 py-2 focus-within:ring-2 focus-within:ring-[#51557E] flex items-center'>
          <div className='mr-5'>
            <HiLockClosed className='h-5 w-5 text-gray-500' />
          </div>

          <input
            type={isPassword ? 'password' : 'text'}
            name='password'
            id='password'
            className='w-full bg-transparent focus:outline-none'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => setIsPassword(!isPassword)} className="ml-5">
            {isPassword ? (
              <HiEye className='h-5 w-5 text-gray-500' />
            ) : (
              <HiEyeSlash className='h-5 w-5 text-gray-500' />
            )}
          </button>
        </div>

        <button
          type='submit'
          className=' text-white font-bold py-2 px-4 rounded-md bg-[#51557E] hover:bg-[#34375a] mt-8 w-full'
          onClick={SubmitHandler}
        >
          Login
        </button>

        <div className='text-sm font-normal text-center mt-3 w-full px-3 py-2'>
          Belum punya akun?
          <Link
            href='/register'
            class='text-blue-700 hover:underline dark:text-blue-500 ml-1'
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
