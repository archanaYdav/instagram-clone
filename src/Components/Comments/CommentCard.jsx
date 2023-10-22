import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function CommentCard() {
    const [isCommentLiked, setIsCommentLiked] = useState(false);

    const handlClick = () => {
        setIsCommentLiked(!isCommentLiked);
    }

  return (
    <div>
        <div className="flex items-center justify-between py-5">
            <div className='flex items-center'>
                <div>
                    <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg" alt="fd"/>
                </div>
                <div className='ml-3'>
                    <p>
                        <span className='font-semibold'>username</span>
                        <span className='ml-2'>nice post</span>
                    </p>
                    <div className='flex items-center space-x-3 text-x5 opacity-60 pt-2'>
                        <span >1 min ago</span>
                        <span >23 likes</span>
                    </div>
                </div>
            </div>

            {isCommentLiked ? <AiFillHeart className="text-x5 hover:opacity-50 cursor-pointer text-red-600" onClick={handlClick}/> : <AiOutlineHeart className="text-x5 hover:opacity-50 cursor-pointer" onClick={handlClick}/>}
        </div>
    </div>
  )
}
