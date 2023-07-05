import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ path = '' }) {
  return (
    <Link href={path} className='flex items-center gap-x-2 p-2'>
      <Image
        src='/assets/images/pickme.svg'
        width='40'
        height='40'
        alt='image'
      />
      <h1 className='text-2xl font-medium text-white'>PickmeLaundry</h1>
    </Link>
  );
}
