import React from 'react'
import spotify_logo from '../assets/logo/spotify_logo.svg'
import { Icon } from '@iconify/react'
import IconsText from '../components/shared/IconsText'
import '../CSS/home.css'
import TextHover from '../components/shared/TextHover'


const focusCardsData = [
  {
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces",
    imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with this music",
    imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
  },
  {
    title: "Instrumental Study",
    description: "Focus with soft study music in the background.",
    imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Focus Flow",
    description: "Up tempo instrumental hip hop beats",
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Beats to think to",
    description: "Focus with deep techno and tech house",
    imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Focus Flow",
    description: "Up tempo instrumental hip hop beats",
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];

const spotifyPlaylistsCardData = [
  {
    title: "This is one",
    description: "Relax and indulge with beautiful piano pieces",
    imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with this music",
    imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
  },
  {
    title: "Instrumental Study",
    description: "Focus with soft study music in the background.",
    imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Focus Flow",
    description: "Up tempo instrumental hip hop beats",
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Beats to think to",
    description: "Focus with deep techno and tech house",
    imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Focus Flow",
    description: "Up tempo instrumental hip hop beats",
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];


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
      <div className='ml-3 my-3 w-4/5 border border-transparent rounded-lg overflow-auto relative'>
        <div className='bg-app-black bg-opacity-60 w-full h-1/10 flex flex-row justify-between items-center sticky top-0 z-10'>

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
        <div className='h-9/10 bg-gradient overflow-auto'>
          <div className=''>
            <PlaylistView titleText="Spotify Playlist" cardData={focusCardsData} />
            <PlaylistView titleText="Focus" cardData={spotifyPlaylistsCardData} />

          </div>
        </div>
      </div>

    </div>
  )
};

const PlaylistView = ({ titleText, cardData }) => {
  return (
    <div>
      <div className='w-full h-full flex justify-between px-5 py-3'>
        <div className='text-white font-poppins font-bold text-2xl'>
          {titleText}
        </div>
        <div className=' font-poppins text-sm text-gray-400 font-semibold cursor-pointer hover:underline'>
          Show all
        </div>
      </div>

      <div className='w-full px-6 py-3 flex flex-row space-x-4'>
        {cardData.map((item) => {
          return (
            <Cards title={item.title} description={item.description} imgUrl={item.imgUrl} />
          )
        })}


      </div>
    </div>
  )
}

const Cards = ({ title, description, imgUrl }) => {
  return (
    <div className='bg-app-black bg-opacity-80 w-1/6 flex flex-col border border-transparent rounded-lg px-4 py-6'>
      <div className='pt-2 pb-4'>
        <img
          className='border border-transparent rounded'
          src={imgUrl}
          alt="img"
        ></img>
      </div>
      <div className='text-white font-poppins font-semibold pt-2 pb-3'>
        {title}
      </div>
      <div className='text-gray-400 font-poppins text-sm'>
        {description}
      </div>
    </div>
  )
}

export default Home