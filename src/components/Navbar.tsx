import React from 'react';
import {
  mayzorLogo,
  searchIcon,
  settingsIcon,
  bellIcon,
  profileIcon,
  arrowIcon,
} from '../assets/';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className='w-full bg-white flex md:flex-row md:justify-between flex-col  py-2 px-9 items-center md:space-y-0 space-y-4 border-b'>
      <img src={mayzorLogo} alt='' className='h-9' />
      <div className='flex md:flex-row flex-col space-x-3 md:space-y-0 space-y-4'>
        <div className='flex flex-row  bg-white rounded-lg space-x-2 border w-64 justify-start  items-center p-2 h-9 shadow-sm'>
          <img src={searchIcon} alt='' className='w-4' />
          <input type='text' className='focus:outline-none w-full' />
        </div>
        <div className='flex flex-row justify-between space-x-0 md:space-x-2 '>
          <button>
            <img src={settingsIcon} alt='' />
          </button>
          <button>
            <img src={bellIcon} alt='' />
          </button>

          <button className='flex flex-row items-center justify-center space-x-2'>
            <img src={profileIcon} alt='' />
            <p className='text-xs font-bold'>emre</p>
            <img src={arrowIcon} alt='' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
