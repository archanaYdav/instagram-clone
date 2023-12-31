import React from 'react'
import IMG from "../../../Assets/instaimage.jpg";
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';



export default function Login({ email, setEmail, password, setPassword }) {

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

    }
    catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <div className='flex items-center'>
        <div className='w-[50%] ml-12 flex justify-end items-end pt-8 relative' >
          <img className="w-[70%]" src='https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk' alt='instaframe' />
          <img className="w-[39%] absolute top-14 right-14 z-10 rounded-2xl h-[81%]" src={IMG} alt='instaframe' />
        </div>
        <div className='w-[25%] flex-col justify-center items-center border border-gray-300 px-8 py-12'>
          <div className='pb-16 flex justify-center'>
            <img className='w-40 ' src='https://i.imgur.com/zqpwkLQ.png' alt='insta logo' />
          </div>
          <form>
            <input value={email}
              onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email address' className='w-full border border-gray-300 outline-none p-2 rounded-md text-sm' />
            <input value={password}
              onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='w-full border border-gray-300 outline-none p-2 my-2 rounded-md text-sm' />
            <button onClick={signIn} className='w-full my-2 py-2 bg-blue-500 text-white border rounded-md font-semibold'>Log in</button>
          </form>
          <div>
            <p className="text-sm">Don't have an Account? <a href="/Signup" className='text-sm font-semibold text-blue-500 '>Sign up</a></p>
          </div>
        </div>
      </div>

    </div >
  )
}
