import React from 'react'

export default function SuggestionCard() {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <img className='w-9 h-9 rounded-full' src='https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg' alt='rqwe'/>
            <div className='ml-2'>
                <p className='text-sm font-semibold'>username</p>
                <p className='text-sm font-semibold opacity-70'>Follows you</p>
            </div>
        </div>

        <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}
