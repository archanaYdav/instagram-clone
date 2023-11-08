import React from 'react'
import { TbCircleDashed } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

export default function ProfileUserDetails({ name, username, profileImg }) {
    const navigate = useNavigate();
    return (
        <div className='py-10 w-full'>
            <div className='flex items-center'>
                <div className='w-[20%]'>
                    {profileImg === "" ? <img className='w-36 h-36 rounded-full' src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768" alt="mushroom" /> :
                        <img className='w-32 h-32 rounded-full' src={profileImg} alt="mushroom" />
                    }
                </div>
                <div className='space-y-5'>
                    <div className='flex space-x-10 items-center'>
                        <p>{username}</p>
                        <button onClick={() => navigate("/accounts/edit")} class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">Edit Profile</button>
                        <TbCircleDashed />
                    </div>
                    <div className='flex space-x-10'>
                        <div>
                            <span className='font-semibold mr-2'>10</span>
                            <span>posts </span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>5</span>
                            <span>followers </span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>7</span>
                            <span>following </span>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold'>{name}</p>
                        <p className='font-thin text-sm'>Engineering Grad || Coder || party hunk || Traveller</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
