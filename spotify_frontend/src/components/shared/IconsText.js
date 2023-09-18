import React from 'react'
import { Icon } from '@iconify/react';

function IconsText({ iconName, displaytext, active }) {
    return (
        <div className={`${active ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}>
            <div className='flex items-center justify-start cursor-pointer '>
                <div className='px-5 py-3'>
                    <Icon
                        icon={iconName}
                        // className={`${active ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
                        fontSize={25} />
                </div>
                <div className='font-semibold font-poppins'>{displaytext}</div>
            </div>
        </div>
    )
}

export default IconsText