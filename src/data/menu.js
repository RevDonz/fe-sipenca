import { GiCampingTent } from 'react-icons/gi';
import { HiHome, HiOutlineUser, HiOutlineUserGroup } from 'react-icons/hi2';

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
    icon: <HiOutlineUser className={`stroke-2 w-6 h-6`} />,
  },
  {
    url: '/dashboard/keluarga',
    menu: 'Keluarga',
    icon: <HiOutlineUserGroup className='stroke-[1.5px] w-6 h-6' />,
  },
];

export const SidebarMenuAdmin = [
  {
    url: '/admin/',
    menu: 'Dashboard',
    icon: <HiHome className='stroke-[1.5px] w-6 h-6' />,
  },
  {
    url: '/admin/pengungsian',
    menu: 'Pengungsian',
    icon: <GiCampingTent className='stroke-[1.5px] w-6 h-6' />,
  },
];
