import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Dashboard = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='py-10 bg-[#EFF0F2]'>
        <div className='flex w-full'>
          <div className='w-1/3 bg-white'>
            <p>as</p>
          </div>
          <div className='w-2/3 bg-white'>
            <p>asd</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
