import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children, title, user }) => {
  return (
    <div>
      <Navbar user={user} />

      <div className='bg-[#EFF0F2]'>
        <div className='flex mx-auto w-[90%] max-w-screen-xl gap-5 py-10 pt-20 min-h-screen'>
          <div className='w-1/3 hidden md:block'>
            <Sidebar user={user} />
          </div>
          <div className='w-full md:w-2/3 bg-white rounded-lg'>
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
