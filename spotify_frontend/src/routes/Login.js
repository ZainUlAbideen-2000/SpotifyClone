import React from 'react'
import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='logo p-5 border-b border-solid border-gray-400 w-full flex justify-center'>
        <Icon icon="logos:spotify" width="170" />
      </div>
      <div className='InputRegion w-1/3 py-10 flex flex-col items-center justify-center font-poppins'>
        <div className='font-bold mb-12'>To Continue Login to Spotify</div>

        <TextInput
          label='Email Address or Username'
          placeholder='Enter Email Address or Username'
        />
        <TextInput
          label='Password'
          placeholder='Password'
        />
        <div className='w-full flex items-center justify-end p-3'>
          <button className='bg-green-400 rounded-full p-3 px-10 font-semibold'>LOG IN</button>
        </div>
        <div className='w-full border-b border-solid border-gray-400 flex justify-center pt-3'>
        </div>
        <div className='mt-4 font-semibold text-lg'>
          Don't have an account?
        </div>
        <div className='w-full flex items-center justify-center'>
          <Link to="/signup" className='w-full'>
            <button className='w-full bg-white-400 rounded-full p-3 px-15 font-semibold mt-3 border border-gray-400 text-gray-500'>SIGN UP FOR SPOTIFY</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login