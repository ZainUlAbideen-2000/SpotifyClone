import React from 'react'

function PasswordInput({ label, placeholder, value, onChange, setValue, labelClassName, className }) {
    return (
        <div
            className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}
        >
            <label for={label} className={`font-semibold pb-1 ${labelClassName}`}>
                {label}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className='border border-solid border-gray-400 p-2 rounded placeholder-gray-500'
                id={label}
                value={value}
                // onChange={(e) => setValue(e.target.value)}
                onChange={onChange}
            />
        </div>
    )
}



export default PasswordInput