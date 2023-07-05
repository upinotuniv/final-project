import React from 'react';

export default function Footer() {
  return (
    <div className='w-full bg-blue-950 text-white py-10 px-40'>
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='flex justify-center w-full border-b border-white pt-16 pb-24'>
          <div className='flex flex-col w-1/5'>
            <h1 className='text-3xl font-bold text-white'>Pickme Laundry</h1>
            <h1 className='text-md font-thin text-white'>
              pickme.laundry@gmail.com
            </h1>
            <h1 className='text-md font-thin text-white'>(629) 555-0129</h1>
            <p className='text-md font-thin text-white'>
              2972 Westheimer Rd. Santa Ana, Illionis 85486
            </p>
          </div>
          <div className='flex flex-col justify-center items-center w-4/5 gap-y-12'>
            <div className='flex justify-center w-full gap-x-32'>
              <div className='flex flex-col justify-start items-start gap-y-6'>
                <h1 className='text-lg font-semibold text-white'>Service</h1>
                <ul className='flex flex-col gap-y-3 text-md font-thin text-white'>
                  <li>Feature</li>
                  <li>Service</li>
                  <li>Enterprice Pricing</li>
                </ul>
              </div>
              <div className='flex flex-col justify-start items-start gap-y-6'>
                <h1 className='text-lg font-semibold text-white'>Partners</h1>
                <ul className='flex flex-col gap-y-3 text-md font-thin text-white'>
                  <li>Overview</li>
                  <li>Become a partner</li>
                  <li>Find a partner</li>
                  <li>Affilates</li>
                  <li>Feature</li>
                </ul>
              </div>
              <div className='flex flex-col justify-start items-start gap-y-6'>
                <h1 className='text-lg font-semibold text-white'>Resource</h1>
                <ul className='flex flex-col gap-y-3 text-md font-thin text-white'>
                  <li>Overview</li>
                  <li>Articles</li>
                  <li>Webinars</li>
                  <li>Event</li>
                  <li>E-commerce Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center w-full pt-10'>
          <h1 className='text-sm text-white'>
            © Copyright Pickme Laundry 2023. All Rights Reserved
          </h1>
        </div>
      </div>
    </div>
  );
}
