import React from 'react'

function TextInput({ label, placeholder }) {
    return (
        <div className='flex flex-col w-full pb-6'>
            <label for={label} className='font-semibold pb-1'>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className='border border-solid border-gray-400 p-2 rounded placeholder-gray-500'
                id={label}
            />
        </div>
    )
}

export default TextInput