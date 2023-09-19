import React from 'react'

function PasswordInput({ label, placeholder, value, setValue }) {
    return (
        <div className='flex flex-col w-full pb-6'>
            <label for={label} className='font-semibold pb-1'>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className='border border-solid border-gray-400 p-2 rounded placeholder-gray-500'
                id={label}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default PasswordInput