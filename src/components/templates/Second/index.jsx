import Navbar from '@/components/organisms/Navbar';
import Sidebar from '@/components/organisms/Sidebar';
import React from 'react';

export default function SecondLayout({ children, title, option }) {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-white'>
      {/* sidebar */}
      <div className='flex justify-center items-center w-1/5 h-full bg-blue-950 p-4 z-10'>
        <Sidebar />
      </div>

      {/* content */}
      <div className='flex flex-col justify-start items-center w-4/5 h-full bg-white gap-y-8'>
        {/* navbar */}
        <Navbar type='admin' title={title} option={option} />

        <div className='flex flex-wrap justify-start items-center w-full gap-3 p-4'>
          <div className='w-full h-8'></div>
          {children}
        </div>
      </div>
    </div>
  );
}
