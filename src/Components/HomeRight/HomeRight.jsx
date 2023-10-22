import React from 'react'
import SuggestionCard from './SuggestionCard'

export default function HomeRight() {
  return (
    <div className=''>
      <div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div>
              <img className='w-12 h-12 rounded-full' src="https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg" alt="asaf" />
            </div>
            <div className='ml-3'>
              <p>Full Name</p>
              <p className="opacity-70">username</p>
            </div>
          </div>

          <div>
            <p className='text-blue-700 font-semibold'>switch</p>
          </div>

        </div>
        <div className='space-y-5 mt-10'>
          {[1, 1, 1, 1].map((item) => <SuggestionCard />)}
        </div>
      </div>
    </div>
  )
}
