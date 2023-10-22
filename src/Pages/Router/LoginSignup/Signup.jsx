import React from 'react'

export default function Signup() {
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className='w-[25%] flex-col justify-center items-center border border-gray-300 px-8 py-12'>
                <div className='pb-16 flex justify-center'>
                    <img className='w-40 ' src='https://i.imgur.com/zqpwkLQ.png' alt='insta logo' />
                </div>
                <form>
                    <input type='email' placeholder='email' className='w-full border border-gray-300 outline-none p-2 rounded-md text-sm mb-2' />
                    <input type='name' placeholder='Full Name' className='w-full border border-gray-300 outline-none p-2 rounded-md text-sm mb-2' />
                    <input type='text' placeholder='Username' className='w-full border border-gray-300 outline-none p-2 rounded-md text-sm' />
                    <input type='password' placeholder='Password' className='w-full border border-gray-300 outline-none p-2 my-2 rounded-md text-sm' />
                    <button className='w-full my-2 py-2 bg-blue-400 text-white border rounded-md font-semibold'>Sign Up</button>
                </form>

            </div>
        </div>
    )
}
