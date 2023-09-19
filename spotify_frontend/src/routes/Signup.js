import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/TextInput';
import { Link } from 'react-router-dom';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper.js';

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [confirmemail, setConfirmemail] = useState("")

    // console.log(email)


    const signup = async () => {
        if (email !== confirmemail) {
            alert("Emails do not match")
            return;
        }

        const data = {
            email: email,
            password: password,
            userName: username,
            firstName: firstname,
            lastName: lastname,
            // confirmemail: confirmemail
        }
        const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
        if (response && !response.err) {
            alert("Signup successful!")
        } else {
            alert(response.error)
        }
    }

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
                    value={email}
                    setValue={setEmail}
                />
                <TextInput
                    label='Confirm email address'
                    placeholder='Enter your email again'
                    value={confirmemail}
                    setValue={setConfirmemail}
                />
                <TextInput
                    label='Enter your User Name'
                    placeholder='Enter your user name'
                    value={username}
                    setValue={setUsername}
                />
                <PasswordInput
                    label='Create a password'
                    placeholder='Enter a strong password again'
                    value={password}
                    setValue={setPassword}
                />
                <div className='w-full flex justify-between items-center space-x-8 flex-row'>
                    <TextInput
                        label='Enter your first name'
                        placeholder='Enter your first name'
                        value={firstname}
                        setValue={setFirstname}
                    />
                    <TextInput
                        label='Enter your last name'
                        placeholder='Enter your last name'
                        value={lastname}
                        setValue={setLastname}
                    />
                </div>
                <div className='w-full flex items-center justify-center p-3'>
                    <Link to="/login" >
                        <button className='bg-green-400 rounded-full p-3 px-10 font-semibold'
                            onClick={(e) => {
                                e.preventDefault()
                                signup()
                            }}
                        >SIGN UP</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup