import React from 'react'

export default function SearchUserCard() {
    return (
        <div className='py-2 cursor-pointer'>
            <div className='flex items-center'>
                <img className='w-10 h-10 rounded-full' src='https://images.pexels.com/photos/9789873/pexels-photo-9789873.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='fdasf' />

                <div className='ml-3'>
                    <p>Full name</p>
                    <p className='opacity-70'></p>
                </div>
            </div>
        </div>
    )
}
