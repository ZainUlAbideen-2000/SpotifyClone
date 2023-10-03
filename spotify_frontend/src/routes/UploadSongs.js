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
import { useDispatch, useSelector } from 'react-redux';
import {
    updateName,
    updateThumbnail,
    updatePlaylistUrl,
    updateUploadedFileName,
} from '../redux/actions/songAction';



function LoggedInHome() {

    const dispatch = useDispatch();
    const { name, thumbnail, playlistUrl, uploadedFileName } = useSelector((state) => state.song);

    // const [name, setName] = useState("");
    // const [thumbnail, setThumbnail] = useState("");
    // const [playlistUrl, setplaylistUrl] = useState("");
    // const [uploadedFileName, setuploadedFileName] = useState();

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
                    <div className="text-2xl font-semibold mb-5 text-white mt-8">
                        Upload Your Music
                    </div>
                    <div className="w-2/3 flex space-x-3">
                        <div className="w-1/2">
                            <TextInput
                                label="Name"
                                labelClassName={"text-white"}
                                placeholder="Name"
                                value={name}
                                onChange={(e) => dispatch(updateName(e.target.value))}
                            />

                        </div>
                        <div className="w-1/2">
                            <TextInput
                                label="Thumbnail"
                                labelClassName={"text-white"}
                                placeholder="Thumbnail"
                                value={thumbnail}
                                onChange={(e) => dispatch(updateThumbnail(e.target.value))}
                            />
                        </div>
                    </div>

                    <div className='py-5'>
                        {uploadedFileName ? (
                            <div className="text-black bg-white p-3 w-1/3 rounded-full font-semibold ">{uploadedFileName.substring(0, 35)}...</div>
                        ) : (
                            <div className=''>
                                <CloudinaryUpload
                                    setUrl={(url) => dispatch(updatePlaylistUrl(url))}
                                    setName={(name) => dispatch(updateUploadedFileName(name))} />
                            </div>
                        )
                        }
                    </div>
                    <div
                        className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold"
                        onClick={submitSong}
                    >
                        Submit Song
                    </div>


                </div>

            </div>

        </div>
    )
};

export default LoggedInHome