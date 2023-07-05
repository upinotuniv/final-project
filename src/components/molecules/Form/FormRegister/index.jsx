import React, { useState } from 'react';
import api from '@/service/api';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';

export default function FormRegister() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    role: '',
    phoneNumber: '',
    address: '',
  });
  const [addressShow, setAddressShow] = useState(false);
  const [providerShow, setProviderShow] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className='flex flex-col w-full justify-center items-center gap-4 '>
      <div className='flex flex-1 justify-center items-center w-full gap-4'>
        <div className='flex flex-col w-full gap-y-1'>
          <Label htmlFor='username' color='text-white'>
            Username
          </Label>
          <Input type='text' name='username' id='username' placeholder='John' />
        </div>
        <div className='flex flex-col w-full gap-y-1'>
          <Label htmlFor='email' color='text-white'>
            Email
          </Label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='example@gmail.com'
          />
        </div>
      </div>

      <div className='flex flex-1 justify-center items-center w-full gap-4'>
        <div className='flex flex-col w-full gap-y-1'>
          <Label htmlFor='phoneNumber' color='text-white'>
            Phone Number
          </Label>
          <Input
            type='text'
            name='phoneNumber'
            id='phoneNumber'
            placeholder='0822-3456-7890'
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
            placeholder='********'
          />
        </div>
      </div>

      <div className='flex flex-col w-full gap-y-1'>
        <Label htmlFor='address' color='text-white'>
          Role
        </Label>
        <select
          name='role'
          onChange={() => {
            if (admin) {
              setAddressShow(true);
            } else {
              setProviderShow(true);
            }
          }}
          className=' px-4 py-2 text-sm w-full border rounded outline-none focus:ring focus:ring-blue-900 transition duration-300 bg-gray-100'
        >
          <option defaultValue='selectRole'>Select Role</option>
          <option value='admin'>Admin</option>
          <option value='customer'>Customer</option>
        </select>
      </div>

      {addressShow && (
        <div className='flex flex-col w-full gap-y-1'>
          <Label htmlFor='address' color='text-white'>
            Address
            <p className='text-xs font-normal'>*optional</p>
          </Label>
          <textarea
            name='address'
            id='address'
            placeholder='example street no.1'
            className=' px-4 py-2 w-full border rounded outline-none focus:ring focus:ring-blue-900 transition duration-300 bg-gray-100 resize-none h-24'
          ></textarea>
        </div>
      )}

      {providerShow && (
        <div className='flex flex-col w-full gap-y-1'>
          <Label htmlFor='provider' color='text-white'>
            Provider
          </Label>
          <select
            name='provider'
            id='provider'
            onChange={() => {}}
            className=' px-4 py-2 text-sm w-full border rounded outline-none focus:ring focus:ring-blue-900 transition duration-300 bg-gray-100'
          >
            <option defaultValue='selectProvider'>Select Provider</option>
            <option value='ciputat'>Ciputat</option>
            <option value='ciledug'>Ciledug</option>
          </select>
        </div>
      )}

      <div className='flex justify-center items-center w-full'>
        <Button>Register</Button>
      </div>
    </form>
  );
}
