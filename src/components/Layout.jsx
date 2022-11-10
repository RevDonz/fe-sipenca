import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='bg-[#EFF0F2]'>
        <div className='flex mx-auto w-[90%] max-w-screen-xl gap-5 py-10 pt-20 min-h-screen'>
          <Sidebar />
          <div className='w-2/3 bg-white rounded-lg'>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
