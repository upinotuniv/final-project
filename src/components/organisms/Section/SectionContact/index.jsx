import React from 'react';
import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import Button from '@/components/atoms/Button';

export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center w-full py-40'>
      <div className='flex flex-col w-full py-10'>
        <div className='flex justify-center items-center w-full'>
          <h1 className='text-5xl font-bold text-blue-900 uppercase'>
            Contact Us
          </h1>
        </div>
      </div>

      <div className='flex justify-center items-center w-full px-32'>
        <form className='flex flex-col justify-center items-center w-full px-20 space-y-8'>
          <div className='flex flex-col justify-start w-full gap-y-2'>
            <Label htmlFor='name'>Name</Label>
            <Input type='text' name='name' placeholder='Enter your name' />
          </div>
          <div className='flex flex-col justify-start w-full gap-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' name='email' placeholder='Enter your email' />
          </div>
          <div className='flex flex-col justify-start w-full gap-y-2'>
            <Label htmlFor='subject'>Subject</Label>
            <Input
              type='text'
              name='subject'
              placeholder='Enter subject for email'
            />
          </div>
          <div className='flex flex-col justify-start w-full gap-y-2'>
            <Label htmlFor='message'>Message</Label>
            <textarea
              name='message'
              className='px-4 py-2 w-full h-32 resize-none border rounded outline-none focus:ring focus:ring-green-700/50 transition duration-300 bg-gray-100'
              placeholder='Enter your email'
            ></textarea>
          </div>
          <div className='flex flex-col justify-start w-1/2 px-20'>
            <Button>Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
