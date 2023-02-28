import React, { useState, useRef } from 'react';
import {
  profileIcon,
  powerIcon,
  arrowIcon,
  mainPageIcon,
  userOperationsIcon,
} from '../assets';
import { Link, useLocation } from 'react-router-dom';

type Props = {};

const Sidebar = (props: Props) => {
  const [navigationOpen, setNavigationOpen] = useState<boolean>(true);
  const [appsOpen, setAppsOpen] = useState<boolean>(true);

  const location = useLocation();

  const pathname = location.pathname.split('/')[1];
  

  return (
    <div className='flex flex-[1] min-w-[240px] h-full bg-white justify-start flex-col px-6'>
      <div className='flex flex-row justify-between items-center  mt-2 py-3'>
        <img src={profileIcon} alt='profile' />
        <div className='text-xs'>
          <h1 className='font-bold'>emre@mayzor.net</h1>
          <p>Yönetici</p>
        </div>
        <img src={powerIcon} alt='power' />
      </div>
      <div className='mt-10'>
        {/* Navigasyon */}
        <div className='px-1'>
          <div
            onMouseDown={(e) => e.preventDefault()}
            className=' w-ful flex flex-row justify-between items-center cursor-pointer'
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <h1 className='text-[#98A2B2] font-bold'>Navigasyon</h1>
            <img src={arrowIcon} alt='' />
          </div>

          {navigationOpen && (
            <div
              className={`flex flex-col mt-2 space-y-2 duration-300 px-3 py-2 rounded-full ${
                location.pathname === '/' && 'bg-[#EBF7ED]'
              }`}
            >
              <Link to='/' className='flex flex-row space-x-3'>
                <img src={mainPageIcon} alt='' />
                <h1>Anasayfa</h1>
              </Link>
            </div>
          )}
        </div>
        {/* Apps */}
        <div className='px-1 mt-4'>
          <div
            onMouseDown={(e) => e.preventDefault()}
            className=' w-ful flex flex-row justify-between items-center cursor-pointer'
            onClick={() => setAppsOpen(!appsOpen)}
          >
            <h1 className='text-[#98A2B2] font-bold'>Apps</h1>
            <img src={arrowIcon} alt='' />
          </div>

          {appsOpen && (
            <div
              className={`flex flex-col mt-2 space-y-2 duration-300 px-3 py-2 rounded-full ${
                pathname === 'users' && 'bg-[#EBF7ED]'
              }`}
            >
              <Link to='/users' className='flex flex-row space-x-3'>
                <img src={userOperationsIcon} alt='' />
                <h1>Kullanıcı İşlemleri</h1>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
