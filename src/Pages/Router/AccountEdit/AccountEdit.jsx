import React, { useState } from 'react'
import "../../../Components/Post/CreatePostModal.css";
import { db } from '../../../firebase';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

export default function AccountEdit({ userId, profileImg }) {
    const [bio, setBio] = useState("");
    const [newUsername, setNewUsername] = useState('');
    const [newFullName, setNewFullName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = firebase.auth().currentUser;
        const userRef = db.collection('users').doc(userId);
        // console.log(user);
        // console.log(userRef);
        console.log(userId);

        userRef.update({
            username: newUsername,
            name: newFullName,
        })
            .then(() => {
                console.log('User profile updated successfully!');
            })
            .catch((error) => {
                console.error('Error updating user profile:', error);
            });

        setBio("");
        setNewFullName("");
        setNewUsername("");
        navigate("/username");
    }
    return (
        <div>
            <div className='w-full px-16 py-8'>
                <h1 className="font-stretch-expanded text-xl">Edit Profile</h1>
                <div className='w-full flex justify-center items-center mt-10'>
                    <div className='flex flex-col gap-10 w-[50%]'>
                        <div className='flex items-center'>
                            {profileImg === "" ? <img className='w-16 h-16 rounded-full' src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768" alt="mushroom" />  :
                                <img className='h-12 w-12 rounded-full' src={profileImg} alt='nature blossoms' />
                            }
                            <div className='ml-20'>
                                <p className='text-lg'>Username</p>
                                <div>
                                    <label htmlFor="file-upload" className='text-sm text-blue-500 font-semibold cursor-pointer '>Change profile photo</label>
                                    <input type='file' id='file-upload' accept='image/*' />
                                </div>

                            </div>
                        </div>
                        <div className='flex w-full'>
                            <label className="font-semibold">Change <br /> Username</label>
                            <input value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)} className=" ml-10 border border-gray-300 w-full" type='text' name="userChange" />
                        </div>
                        <div className='flex w-full'>
                            <label className="font-semibold">Change <br /> Name</label>
                            <input value={newFullName}
                                onChange={(e) => setNewFullName(e.target.value)} className='ml-14 border border-gray-300 w-full' type='name' name="nameChange" />
                        </div>
                        <div className="flex w-full">
                            <label className="font-semibold mr-20">Bio</label>
                            <div className="w-full">
                                <textarea value={bio} onChange={(e) => setBio(e.target.value)} className=' border border-gray-300 w-full' rows="4" name="bio" />
                                <p className='opacity-70'>{bio?.length}/1500</p>
                            </div>

                        </div>
                        <div className='w-full flex justify-center'>
                            <button type='submit' onClick={handleSubmit} className="w-[30%] mt-10 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
