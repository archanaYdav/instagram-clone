import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function StoryCircle() {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate("/story");
    }
    return (
        <div onClick={handleNavigate} className='flex flex-col cursor-pointer items-center'>
            <img className='w-16 h-16 rounded-full' src='https://cdn.pixabay.com/photo/2023/09/21/17/05/european-shorthair-8267220_1280.jpg' alt='billi' />
            <p>username</p>
        </div>
    )
}
