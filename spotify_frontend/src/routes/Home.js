import React from 'react'
import spotify_logo from '../assets/logo/spotify_logo.svg'
import { Icon } from '@iconify/react'
import IconsText from '../components/shared/IconsText'
import '../CSS/home.css'
import TextHover from '../components/shared/TextHover'

function Home() {
  return (
    <div className='w-full h-full flex px-3 bg-black'>


      {/* slider code */}
      <div className='sliderdiv w-1/5 flex flex-col justify-between pb-10'>
        <div>
          <div className='p-4'>
            <img src={spotify_logo} alt='spotify logo' width={120} />
          </div>
          <div className='bg-gradient mt-4 border border-transparent rounded-lg'>
            <IconsText
              iconName={"fluent:home-48-filled"}
              displaytext={"Home"}
              active
            />
            <IconsText
              iconName={"octicon:search-16"}
              displaytext={"Search"}
            />
            <IconsText
              iconName={"fluent:library-20-filled"}
              displaytext={"Library"}
            />
          </div>
          <div className='bg-gradient mt-2 border border-transparent rounded-lg'>
            <IconsText
              iconName={"ph:plus-fill"}
              displaytext={"Create Playlist"}
            />
            <IconsText
              iconName={"mdi:heart"}
              displaytext={"Liked Songs"}
            />
          </div>
        </div>
        <div className='px-5'>
          <div className='flex border border-gray-500 rounded-full items-center w-3/6 px-3 py-1 hover:border-white cursor-pointer'>
            <div className='text-white'>
              <Icon icon="pajamas:earth" />
            </div>
            <div className='text-white ml-2 font-semibold font-poppins text-base'>English</div>
          </div>
        </div>
      </div>

      {/* main code */}
      <div className='ml-3 my-3 bg-app-black w-4/5 border border-transparent rounded-lg'>
        <div className='h-1/10 flex flex-row justify-between items-center'>

          <div className='text-white ml-8 flex flex-row space-x-2'>
            <div className='p-2 border rounded-full bg-black border-transparent cursor-pointer'>
              <Icon icon="ep:arrow-left" fontSize='20px' />
            </div>
            <div className='p-2 border rounded-full bg-black border-transparent'>
              <Icon icon="ep:arrow-right" fontSize='20px' />
            </div>
          </div>
          <div className='text-white mr-5 flex items-center justify-center space-x-1'>
            <div className='p-5 '>
              <TextHover displaytext={"Sign Up"} />
            </div>
            <div className='bg-white font-bold text-black px-8 py-2.5 border rounded-full justify-center items-center cursor-pointer hover:font-bold'>
              Log in
            </div>
          </div>
        </div>
        <div className='h-9/10 bg-gradient'>
          <div>
            <PlaylistView />
          </div>
        </div>
      </div>

    </div>
  )
};

const PlaylistView = () => {
  return (
    <div>
      <div className='w-full h-full flex justify-between px-5 py-3'>
        <div className='text-white font-poppins font-bold text-2xl'>
          Spotify Playlist
        </div>
        <div className=' font-poppins text-sm text-gray-400 font-semibold'>
          Show all
        </div>
      </div>

      <div className='w-full px-6 py-5 flex flex-row justify-between'>
        <Cards title='Title1' description='This is the description of the card' />
        <Cards title='Title1' description='This is the description of the card' />
        <Cards title='Title1' description='This is the description of the card' />
        <Cards title='Title1' description='This is the description of the card' />
        <Cards title='Title1' description='This is the description of the card' />
        
      </div>
    </div>
  )
}

const Cards = ({ title, description }) => {
  return (
    <div className='bg-app-black bg-opacity-60 w-1/6 flex flex-col border border-transparent rounded px-4 py-6'>
      <div className='pt-2 pb-4'>
        <img
          className='border border-transparent rounded'
          src='https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg' 
          alt="img"
          ></img>
      </div>
      <div className='text-white font-poppins font-semibold'>
        {title}
      </div>
      <div className='text-gray-400 font-poppins text-sm'>
        {description}
      </div>
    </div>
  )
}

export default Home