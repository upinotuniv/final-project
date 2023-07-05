import React from 'react';
import Icons from '@/components/atoms/Icons';

export default function About() {
  return (
    <div className='flex justify-center items-center w-full py-16 px-36'>
      <div className='flex flex-col justify-center items-center w-full '>
        <div className='flex flex-col justify-center items-center w-full gap-2 py-8'>
          <h1 className='text-5xl text-blue-900 font-bold uppercase'>About</h1>
          <p className='text-lg opacity-70'>Pickme Laundry </p>
        </div>
        <div className='flex justify-center items-center w-full py-5'>
          <p className='text-xl font-normal text-blue-950'>
            Pickme Laundry is an easy-to-use laundry platform. There are
            features that make it easier for users to use our services using
            only gadgets. These features include Pick-up Tracking and Real-Time
            Laundry. Pick-up Tracking is a feature to track Pick-ups from the
            Pickme Laundry team. so that users can prepare their laundry
            properly. Real-Time laundry is a feature to find out the laundry
            process in real time
          </p>
        </div>
        <div className='flex justify-between items-center w-full gap-x-8'>
          <div className='flex justify-center items-center gap-x-4 w-1/3'>
            <Icons.Pin />
            <p className='text-md font-medium text-blue-950'>
              Unknown street no.1, Sawah Lama, Tangerang Selatan, Banten, 131415
            </p>
          </div>
          <div className='flex justify-center items-center gap-x-4 w-1/3'>
            <Icons.Telephone />
            <p className='text-md font-medium text-blue-950'>022-123456789</p>
          </div>
          <div className='flex justify-center items-center gap-x-4 w-1/3'>
            <Icons.Email />
            <p className='text-md font-medium text-blue-950'>
              pickme.laundry@gmail.com
            </p>
          </div>
        </div>
        <span className='w-1/4 border border-blue-950/20 mt-16'></span>
      </div>
    </div>
  );
}
