import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <Navbar />
      <div className='w-full h-full flex '>
        <Sidebar />
        <div className='flex flex-[6] h-full bg-[#F8F8F8] p-10'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
