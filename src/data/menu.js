import { FaHome, FaRegUser, FaRegUserCircle, FaUser } from 'react-icons/fa';
import { GiCampingTent } from 'react-icons/gi';

export const NavbarMenu = [
  {
    url: '/',
    menu: 'Beranda',
  },
  {
    url: '#tentang',
    menu: 'Tentang',
  },
];

export const SidebarMenuWarga = [
  {
    url: '/dashboard',
    menu: 'Pengungsian',
    icon: <GiCampingTent className='stroke-[1.5px] w-6 h-6' />,
  },
  {
    url: '/dashboard/profil',
    menu: 'Akun Saya',
    icon: <FaRegUser className={`stroke-2 w-6 h-6`} />,
  },
  // {
  //   url: '/dashboard/keluarga',
  //   menu: 'Keluarga',
  //   icon: <FaRegUserCircle className='stroke-[1.5px] w-6 h-6' />,
  // },
];

export const SidebarMenuAdmin = [
  // {
  //   url: '/admin/',
  //   menu: 'Dashboard',
  //   icon: <FaHome className='stroke-[1.5px] w-6 h-6' />,
  // },
  {
    url: '/admin/pengungsian',
    menu: 'Pengungsian',
    icon: <GiCampingTent className='stroke-[1.5px] w-6 h-6' />,
  },
  // {
  //   url: '/admin/warga',
  //   menu: 'Warga',
  //   icon: <FaUser className='stroke-[1.5px] w-6 h-6' />,
  // },
];
