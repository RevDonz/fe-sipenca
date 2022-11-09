import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer