import React from 'react';
import { useRouter } from 'next/router';
import Icons from '@/components/atoms/Icons';

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className='flex flex-col justify-start border-r box-border w-1/5 bg-blue-900 h-full fixed z-10 overflow-y-auto overflow-x-hidden'>
      <div className='flex flex-col justify-center items-center w-full h-1/4 gap-y-4'>
        <div className='flex justify-center items-center bg-white w-20 h-20 rounded-full'>
          <div className='justify-center items-center inline-flex'>
            <h1 className='text-5xl font-bold text-blue-950'>A</h1>
          </div>
        </div>

        <div className='flex justify-center items-center w-full'>
          <h1 className='text-2xl font-bold text-white'>Administration</h1>
        </div>
      </div>
      <div className='flex flex-col justify-start items-center w-full h-1/2 gap-y-4'>
        <button
          onClick={() => router.push('/admin/dashboard')}
          className='flex justify-start items-center w-full px-4 py-2 text-white font-medium text-md gap-x-2 hover:translate-x-2 transition duration-200'
        >
          <Icons.Dashboard />
          Dashboard
        </button>
        <button
          onClick={() => router.push('/admin/users')}
          className='flex justify-start items-center w-full px-4 py-2 text-white font-medium text-md gap-x-2 hover:translate-x-2 transition duration-200'
        >
          <Icons.Users />
          Users
        </button>
        <button
          onClick={() => router.push('/admin/orders')}
          className='flex justify-start items-center w-full px-4 py-2 text-white font-medium text-md gap-x-2 hover:translate-x-2 transition duration-200'
        >
          <Icons.Bill />
          Orders
        </button>
      </div>
      <div className='flex justify-center items-center w-full h-1/4'>
        <div className='flex justify-center items-center w-full pt-20 px-4'>
          <button className='flex justify-start items-center w-full px-4 py-2 text-white font-medium text-md gap-x-2 bg-red-500 hover:bg-red-700 transition duration-300 rounded-lg '>
            <Icons.Exit />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
