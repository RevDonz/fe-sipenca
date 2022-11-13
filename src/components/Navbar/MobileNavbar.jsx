import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useWindowScroll from '../../lib/useWindowScroll';

const MobileNavbar = () => {
  const scrollPos = useWindowScroll();

  return (
    <div className={`bg-white transition ${scrollPos > 50 ? 'shadow-md' : ''}`}>
      <div className='h-16 flex items-center justify-between mx-auto w-[90%] max-w-screen-xl'>
        <Link href={'/'}>
          <Image
            src={'/logo/logo-sipenca-colored.svg'}
            alt='logo-sipenca'
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
