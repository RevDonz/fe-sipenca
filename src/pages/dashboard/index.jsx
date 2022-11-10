import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-[#EFF0F2]'>
        <div className='flex mx-auto w-[90%] max-w-screen-xl gap-5 py-10 pt-20 min-h-screen'>
          <Sidebar />
          <div className='w-2/3 bg-white rounded-lg'>
            <div className='p-5 border-b-2'>
              <h3 className='font-semibold text-2xl'>Profil</h3>
            </div>
            <div className='p-5'>
              <h3 className='font-semibold'>Profil</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
