import React from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../../firebase';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';

export default function Signup({email, setEmail, password, setPassword, name, setName, username, setUsername }) {

    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(userCredential.user, {
                displayName: username
            });

            db.collection('users').add({
                email: email,
                name: name,
                username: username,
                profileImg: "",
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
              });
              
            navigate("/");
        }
        catch (error) {
            console.log(error);
            alert(error.message);
        }

    }


    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className='w-[25%] flex-col justify-center items-center border border-gray-300 px-8 py-12'>
                <div className='pb-16 flex justify-center'>
                    <img className='w-40 ' src='https://i.imgur.com/zqpwkLQ.png' alt='insta logo' />
                </div>
                <form>
                    <input value={email}
                        onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email address' className='w-full border border-gray-300 outline-none p-2 rounded-md text-sm mb-2' />
                    <input value={name}
                        onChange={(e) => setName(e.target.value)} type='name' placeholder='Full Name' className='w-full border border-gray-300 outline-none p-2 rounded-md text-sm mb-2' />
                    <input value={username}
                        onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username' className='w-full border border-gray-300 outline-none p-2 rounded-md text-sm' />
                    <input value={password}
                        onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='w-full border border-gray-300 outline-none p-2 my-2 rounded-md text-sm' />
                    <button onClick={signUp} className='w-full my-2 py-2 bg-blue-400 text-white border rounded-md font-semibold'>Sign Up</button>
                </form>

            </div>
        </div>
    )
}
