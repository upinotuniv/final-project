import React from 'react';

export default function Field({ keys, fill }) {
  return (
    <div className='flex justify-between items-center w-full'>
      <h1 className='text-md font-medium text-blue-950 w-[25%]'>{keys}</h1>
      <h1 className='text-md font-medium text-blue-950 w-[3%]'>:</h1>
      <p className='text-md font-medium text-blue-950 w-[72%]'>{fill}</p>
    </div>
  );
}
