import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import Logo from '@/components/atoms/Heading/Logo';

export default function Header() {
  const router = useRouter();

  return (
    <div className='flex flex-col w-full h-screen bg-blue-700'>
      {/* nav */}
      <div className='flex justify-between items-center w-full p-10'>
        <div className='flex justify-center items-center'>
          <Logo path='/' />
        </div>
        <div className='flex justify-center items-center '>
          <ul className='flex justify-center items-center gap-x-10 text-xl font-thin text-white/50'>
            <li className='hover:underline hover:text-white transition duration-200'>
              <Link href='#'>Home</Link>
            </li>
            <li className='hover:underline hover:text-white transition duration-200'>
              <Link href='#'>About</Link>
            </li>
            <li className='hover:underline hover:text-white transition duration-200'>
              <Link href='#'>Service</Link>
            </li>
            <li className='hover:underline hover:text-white transition duration-200'>
              <Link href='#'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='flex justify-center items-center'>
          <Button onClick={() => router.push('/auth')}>Login / Register</Button>
        </div>
      </div>

      {/* banner */}
      <div className='flex justify-center items-center w-full px-20'>
        <div className='flex flex-1 flex-col justify-center items-center w-full gap-4'>
          <h1 className='text-8xl font-bold text-white/50 uppercase'>
            Easy Laundry Platform
          </h1>
          <p className='text-lg font-thin text-white'>
            Pickme Laundry makes it easy for customers to solve their dirty
            clothes problems, with just the click of a few buttons. Dirty
            clothes can be clean again
          </p>
        </div>
        <div className='flex flex-1 justify-center items-center w-full'>
          <Image
            src='/assets/images/18253 1.svg'
            alt='image'
            width='500'
            height='500'
            className='drop-shadow-2xl'
          />
        </div>
      </div>
    </div>
  );
}
