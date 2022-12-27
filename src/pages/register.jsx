import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiInbox, HiLockClosed, HiUser } from 'react-icons/hi2';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('warga');
  const router = useRouter();

  const SubmitHandler = async () => {
    try {
      const json = {
        email: email,
        username: username,
        password: password,
        role: role,
      };

      console.log(json);

      // const res = await toast.promise(
      //   axios.post('https://0f9vta.deta.dev/api/akun/signup', json),
      //   {
      //     pending: 'Loading..',
      //     success: 'Register Berhasil!',
      //     error: 'Register Gagal!',
      //   }
      // );

      if (res.status == 200) {
        router.push('/login');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-[#E1EBF3]'>
      <div className='bg-white rounded-lg w-96 p-5'>
        <Image
          src={'/logo/logo-sipenca-lengkap.svg'}
          alt='logo-sipenca'
          width={100}
          height={100}
          className='mx-auto my-3'
        />
        <h1 className='font-medium text-center text-xl mt-4'>REGISTER</h1>

        {/*inputbox email*/}
        <div className='bg-gray-200 rounded-md mt-2 w-full px-3 py-2 focus-within:ring-2 focus-within:ring-[#51557E]'>
          {' '}
          {/*container input email*/}
          <div className='absolute pointer-events-none'>
            {' '}
            {/*icon email */}
            <HiInbox className='h-6 w-6 text-gray-500' />
          </div>
          <input
            type='email'
            name='email'
            id='email'
            className='w-full pl-10 bg-gray-200 focus:outline-none'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />{' '}
          {/*input email */}
        </div>

        {/*inputbox email*/}
        <div className='bg-gray-200 rounded-md mt-2 w-full px-3 py-2 focus-within:ring-2 focus-within:ring-[#51557E]'>
          {' '}
          {/*container input email*/}
          <div className='absolute pointer-events-none'>
            {' '}
            {/*icon email */}
            <HiInbox className='h-6 w-6 text-gray-500' />
          </div>
          <input
            type='text'
            name='username'
            id='username'
            className='w-full pl-10 bg-gray-200 focus:outline-none'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />{' '}
          {/*input email */}
        </div>

        {/*inputbox password*/}
        <div className='bg-gray-200 rounded-md mt-2 w-full px-3 py-2 focus-within:ring-2 focus-within:ring-[#51557E]'>
          {' '}
          {/*container input password*/}
          <div className='absolute pointer-events-none'>
            {' '}
            {/*icon password */}
            <HiLockClosed className='h-6 w-6 text-gray-500' />
          </div>
          <input
            type='password'
            name='password'
            id='password'
            className='w-full pl-10 bg-gray-200 focus:outline-none'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/*inputan role*/}
        <div className='bg-gray-200 rounded-md mt-2 w-full px-3 py-2 focus-within:ring-2 focus-within:ring-[#51557E]'>
          <div className='absolute pointer-events-none'>
            <HiUser className='h-6 w-6 text-gray-500' />
          </div>
          <select
            name='role'
            id='role'
            class='w-full bg-gray-200 rounded-md pl-9 focus:outline-none'
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value='warga'>Warga</option>
            <option value='petugas'>Petugas</option>
          </select>
        </div>

        <button
          type='submit'
          className='w-full bg-[#51557E] px-2 py-2 rounded-md mt-[40px] text-white'
          onClick={SubmitHandler}
        >
          Register
        </button>

        <div class='mt-2 text-center'>
          Sudah punya akun?
          <Link
            href='/login'
            class='text-blue-700 hover:underline dark:text-blue-500'
          >
            {' '}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
