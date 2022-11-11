import Image from 'next/image'
import { Input } from 'postcss'
import React from 'react'

const Register = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#E1EBF3]">
      <div className="bg-white rounded-lg w-96 p-5">
      <Image
              src={'/logo/logo-sipenca.svg'}
              alt='logo-sipenca'
              width={100}
              height={100}
              className='mx-auto my-3'
            />
        <h1 className="font-bold text-center text-xl">Register</h1>

        {/*inputbox email*/}
        <div className='bg-gray-200 rounded-md mt-2 w-full px-3 py-2 focus-within:bg-purple-100'> {/*container input email*/}

          <div className='absolute pointer-events-none'> {/*icon email */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
            </svg>
          </div>

          <input type="email" name='email' id='email' className='w-full pl-8 bg-gray-200 focus:outline-none focus:bg-purple-100' placeholder='Email'/> {/*input email */}
        </div>

        {/*inputbox password*/}
        <div className='bg-gray-200 rounded-md mt-2 w-full px-3 py-2 focus-within:bg-purple-100'> {/*container input password*/}

          <div className='absolute pointer-events-none'> {/*icon password */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
          </svg>
          </div>

          <input type="password" name="password" id="password" className='w-full pl-8 bg-gray-200 focus:outline-none focus:bg-purple-100' placeholder='Password'/>
        </div>
        
        {/*inputbox role*/}
        <div className='bg-gray-200 rounded-md mt-2 w-full px-3 py-2 focus-within:bg-purple-100'> {/*container input role*/}

        <div className='absolute pointer-events-none'> {/*icon role */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
          </svg>
          </div>

          <button id="dropdownDefault" data-dropdown-toggle="dropdown" className='w-full text-gray-400 text-left pl-8'>Role</button>
          {/*dropdown menu*/}
          <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
              <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
            </ul>
          </div>

        </div>
          

        <button type="submit" className='w-full bg-[#51557E] px-2 py-2 rounded-md mt-[40px] text-white'>Register</button>
        
        <div class="mt-2 text-center">
							Sudah punya akun?<a href="#" class="text-blue-700 hover:underline dark:text-blue-500"> Login</a>
						</div>

      </div>

    </div>
  )
}

export default Register