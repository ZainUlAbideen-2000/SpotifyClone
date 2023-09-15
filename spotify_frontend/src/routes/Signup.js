import React from 'react'
import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className='logo p-5 border-b border-solid border-gray-400 w-full flex justify-center'>
                <Icon icon="logos:spotify" width="170" />
            </div>
            <div className='InputRegion w-1/3 py-10 flex flex-col items-center justify-center font-poppins'>
                <div className='font-bold mb-12 text-2xl'>Sign up for free to start listening</div>

                <TextInput
                    label='Email address'
                    placeholder='Enter Email Address'
                />
                <TextInput
                    label='Confirm email address'
                    placeholder='Enter your email again'
                />
                <TextInput
                    label='Create a password'
                    placeholder='Enter a strong password again'
                />
                <TextInput
                    label='What should we call you?'
                    placeholder='Enter a profile name'
                />
                <div className='w-full flex items-center justify-center p-3'>
                    <Link to="/login" >
                        <button className='bg-green-400 rounded-full p-3 px-10 font-semibold'>SIGN UP</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup