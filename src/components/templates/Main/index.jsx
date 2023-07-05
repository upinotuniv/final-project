import React from 'react';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';

export default function MainLayout({ children }) {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-white'>
      <Navbar />

      <div className='flex flex-col justify-center items-center w-full'>
        {children}
      </div>

      <Footer />
    </div>
  );
}
