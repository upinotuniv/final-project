import React from 'react';

export default function Input(props) {
  return (
    <input
      {...props}
      className='px-4 py-2 text-sm w-full border rounded outline-none focus:ring focus:ring-blue-900 transition duration-300 bg-gray-100'
    />
  );
}
