import React from 'react';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return (
    <Layout title={'Profile'}>
      <div className='p-5'>
        <h3 className='font-semibold'>Profil</h3>
      </div>
    </Layout>
  );
};

export default Dashboard;
