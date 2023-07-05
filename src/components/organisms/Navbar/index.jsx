import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '@/components/atoms/Heading/Logo';
import Icons from '@/components/atoms/Icons';

export default function Navbar({ type, title, option }) {
  const [dropdown, setDropdown] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const router = useRouter();

  return (
    <>
      {type === 'admin' ? (
        <div className='flex justify-center items-center w-full z-10'>
          <div className='flex justify-between items-center w-4/5 fixed bg-blue-50 p-5 top-0 border-b-2 shadow-sm'>
            <div className='flex justify-start items-start'>
              <h1 className='text-2xl font-bold text-blue-950'>{title}</h1>
            </div>
            <div className='flex flex-col justify-start items-start'>
              {option}
            </div>
          </div>
        </div>
      ) : (
        <div className='flex justify-between items-center w-full p-5 bg-blue-700 z-10'>
          {/* logo */}
          <div className='flex justify-between items-center w-1/4'>
            <Logo path='/home' />
          </div>

          {/* search bar */}
          {/* <div className='flex justify-center items-center w-1/2'>
            <Label>
              <div className='flex justify-start items-center w-full px-20'>
                <div className='absolute px-4'>
                  <Icons.Lup />
                </div>

                <input
                  className='pl-12 py-2 w-full rounded-lg outline-none placeholder:font-thin'
                  placeholder='type your search...'
                />
              </div>
            </Label>
          </div> */}

          {/* account */}
          <div className='flex justify-center items-center w-1/4'>
            <div className='flex justify-end items-center w-full'>
              <button
                onClick={() => {
                  setDropdown(!dropdown);
                  setCollapse(!collapse);
                }}
                className='flex justify-end items-center gap-x-2'
              >
                <div className='flex justify-center items-center rounded-full bg-white'>
                  <Image
                    src='/assets/images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg'
                    width='40'
                    height='40'
                    alt='image'
                    className='rounded-full'
                  />
                </div>

                <div className='flex justify-center items-center'>
                  <h1 className='text-lg font-medium text-white'>John Doe</h1>
                </div>

                <div className='flex justify-center items-center'>
                  <div
                    className={`transition duration-150 ${
                      collapse ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <Icons.Rectangle />
                  </div>
                </div>
              </button>
              {dropdown && (
                <div className='flex flex-col justify-center items-center w-[12%] bg-white absolute top-20 rounded-lg shadow-md'>
                  <button
                    onClick={() => router.push('/profile/1')}
                    className='px-4 py-2 w-full hover:bg-blue-100 rounded-t-lg border-b'
                  >
                    Profile
                  </button>

                  <button className='px-4 py-2 w-full hover:bg-red-100 rounded-b-lg border-b'>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
