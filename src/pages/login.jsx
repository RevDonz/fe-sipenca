import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#E1EBF3]">
      <div className="bg-white rounded-lg w-96 h-1/2 p-5">
      <Image
              src={'/logo/logo-sipenca-lengkap.svg'}
              alt='logo-sipenca-lengkap'
              width={90}
              height={90}
              className='mx-auto my-3'
            />
        <h1 className='text-center font-medium text-xl mt-4'>LOGIN</h1>

        <div>
          <input type="email" name="email" id="email" className='bg-gray-200 rounded-md mt-3 w-full px-3 py-2' placeholder='Username'/>
        </div>

        <div>
          <input type="password" name="email" id="email" className='bg-gray-200 rounded-md mt-3 w-full px-3 py-2' placeholder='Password'/>
        </div>
        
        <button type="submit" className=' text-white font-bold py-2 px-4 rounded-md bg-[#51557E] hover:bg-[#34375a] mt-8 w-full'  >Login</button>

        <p className='text-sm font-normal text-center mt-3 w-full px-3 py-2'>Belum punya akun?
        <a href="#" className='font-semibold text-sm hover:underline ml-1 text-[#51557E] '>Register</a>
        </p>
          
      </div>
    </div>
  )
}


export default LoginPage