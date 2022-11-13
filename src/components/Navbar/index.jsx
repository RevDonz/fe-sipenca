import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 z-50'>
      <div className='hidden md:block'>
        <DesktopNavbar />
      </div>
      <div className='block md:hidden'>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
