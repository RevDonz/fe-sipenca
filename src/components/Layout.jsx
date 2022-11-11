import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Navbar />
      <div className='bg-[#EFF0F2]'>
        <div className='flex mx-auto w-[90%] max-w-screen-xl gap-5 py-10 pt-20 min-h-screen'>
          <Sidebar />
          <div className='w-2/3 bg-white rounded-lg'>
            <div className='p-5 border-b-2'>
              <h3 className='font-semibold text-2xl'>{title}</h3>
            </div>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
