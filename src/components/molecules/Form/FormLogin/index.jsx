import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import React from 'react';

export default function FormLogin() {
  return (
    <form className='flex flex-col w-full justify-center items-center gap-4'>
      <div className='flex flex-col w-full gap-y-1'>
        <Label color='text-white' htmlFor='email'>
          Email
        </Label>
        <Input
          type='text'
          name='email'
          id='email'
          placeholder='Enter your email'
        />
      </div>

      <div className='flex flex-col w-full gap-y-1'>
        <Label htmlFor='password' color='text-white'>
          Password
        </Label>
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='Enter your password'
        />
      </div>

      <div className='flex justify-start items-center w-full gap-2'>
        <input
          type='checkbox'
          name='password'
          id='password'
          className='px-4 py-2 w-4 h-4 outline-none transition duration-300 border-2 border-blue-900 rounded-lg'
        />
        <Label htmlFor='remember' color='text-white'>
          Remember me
        </Label>
      </div>

      <div className='flex justify-center items-center w-full'>
        <Button>Login</Button>
      </div>
    </form>
  );
}
