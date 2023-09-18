import React from 'react'

function TextHover({displaytext, active }) {
    return (
        <div className={`${active ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}>
            <div className='flex items-center justify-start cursor-pointer '>
                <div className='font-semibold font-poppins'>{displaytext}</div>
            </div>
        </div>
    )
}

export default TextHover