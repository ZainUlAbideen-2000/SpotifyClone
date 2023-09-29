import React, { useState } from 'react'
import spotify_logo from '../assets/logo/spotify_logo.svg'
import { Icon } from '@iconify/react'
import IconsText from '../components/shared/IconsText'
import '../CSS/home.css'
import TextHover from '../components/shared/TextHover'
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from '../components/shared/CloudinaryUpload'
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper.js';
import { useNavigate } from "react-router-dom";
import SingleSongCard from '../components/shared/SingleSongCard'



function LoggedInHome() {

    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [playlistUrl, setplaylistUrl] = useState("");
    const [uploadedFileName, setuploadedFileName] = useState();

    const navigate = useNavigate();

    const submitSong = async () => {
        const data = { name, thumbnail, track: playlistUrl };
        const response = await makeAuthenticatedPOSTRequest(
            "/song/create",
            data
        )
        // console.log("response",response);
        if (response.err) {
            alert("Could not create song");
            return;
        }
        alert("Success");
        navigate("/home");
    }

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
                        <IconsText
                            iconName={"mdi:music-box"}
                            displaytext={"My Songs"}
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
                    <div className='text-white mr-5 flex items-center justify-center space-x-6'>
                        <div onClick={() => {
                            navigate('/uploadsongs');
                        }}
                            className=' font-bold text-gray-400 justify-center items-center cursor-pointer hover:underline'>
                            Upload Songs
                        </div>
                        <div className='bg-white font-bold text-black px-3 py-2.5 border rounded-full justify-center items-center cursor-pointer hover:font-bold'>
                            ZA
                        </div>
                    </div>
                </div>
                <div className=" bg-gradient h-9/10 content p-8 pt-0 overflow-auto">
                    <div className='pt-4'>
                        <SingleSongCard />

                    </div>
                </div>

            </div>

        </div>
    )
};

export default LoggedInHome