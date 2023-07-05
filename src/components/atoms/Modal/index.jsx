import React, { useState } from 'react';
import Icons from '../Icons';

export default function Modal({
  state,
  setState,
  title,
  children,
  type,
  textColor = 'text-blue-900',
}) {
  return (
    <>
      {type === 'admin' ? (
        <div className='flex justify-center items-center fixed inset-0 bg-black/80 z-20 p-20'>
          <div className='flex flex-col justify-center items-center w-1/2 bg-white rounded-lg drop-shadow-md p-10'>
            <div className='flex justify-start items-start w-full'>
              <div className='flex flex-col justify-start items-start w-full'>
                <h1 className={`text-3xl font-bold ${textColor}`}>{title}</h1>
                <span className='w-[20%] border-2 border-black/20 my-2'></span>
              </div>

              <div className='flex flex-col justify-end items-end w-full'>
                <button
                  className='hover:opacity-80 transition duration-300'
                  onClick={() => {
                    setState(false);
                  }}
                >
                  <Icons.Close />
                </button>
              </div>
            </div>
            <div className='flex justify-center items-start w-full'>
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center fixed inset-0 bg-black/80 z-20 p-20'>
          <div className='flex flex-col justify-center items-center w-full bg-white rounded-lg drop-shadow-md p-10'>
            <div className='flex justify-start items-start w-full'>
              <div className='flex flex-col justify-start items-start w-full'>
                <h1 className='text-3xl font-bold text-blue-900'>{title}</h1>
                <span className='w-[10%] border-2 border-black/20 my-2'></span>
              </div>

              <div className='flex flex-col justify-end items-end w-full'>
                <button
                  className='hover:opacity-80 transition duration-300'
                  onClick={() => {
                    setState(false);
                  }}
                >
                  <Icons.Close />
                </button>
              </div>
            </div>
            <div className='flex justify-center items-start w-full'>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
