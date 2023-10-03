import React from 'react'

function SingleSongCard({info}) {
    return (
        <div className='flex hover:bg-gray-400 hover:bg-opacity-20 cursor-pointer p-2 rounded-sm'>
            <div
                className='w-12 h-12 bg-cover bg-center'
                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1695754188846-a4a384566dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")` }}
            ></div>

            <div className='flex w-full'>
                <div className='text-white flex flex-col justify-center pl-4 w-5/6'>
                    <div className='font-semibold font-poppins hover:underline mb-0.5'>{info.artist.firstName}</div>
                    <div className='text-xs font-semibold font-poppins hover:underline'>{info.name}</div>
                </div>
                <div className='w-1/6 flex text-gray-400 justify-center items-center text-sm font-semibold'>
                    <div>3:44</div>
                </div>
            </div>
        </div>
    )
}

export default SingleSongCard