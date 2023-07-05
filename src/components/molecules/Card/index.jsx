import Field from '@/components/atoms/Heading/Field';
import Icons from '@/components/atoms/Icons';
import React from 'react';

export default function Card({
  name,
  dateOrder,
  serviceTypes,
  weight,
  status,
  remaining,
  price,
}) {
  return (
    <div className='flex flex-col justify-start items-center w-96 h-64 bg-blue-50 rounded-lg drop-shadow-md'>
      <div className='flex justify-between items-center w-full px-4 py-2 border-b border-black/50 bg-blue-200 rounded-t-lg'>
        <h1 className='text-lg font-bold text-blue-950'>{name}</h1>
        <Icons.Clock />
      </div>
      <div className='flex flex-col justify-start items-center w-full px-4 py-2 gap-y-2'>
        <Field keys='Date Order' fill={dateOrder} />
        <Field keys='Type' fill={serviceTypes} />
        <Field keys='Weight' fill={weight} />
        <Field keys='Status' fill={status} />
        <Field keys='Remaining' fill={remaining} />
        <Field keys='Price' fill={price} />
      </div>
    </div>
  );
}
