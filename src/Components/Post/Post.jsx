import React, { useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import "./Post.css";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentModal from '../Comments/CommentModal';
import { useDisclosure } from '@chakra-ui/react';


export default function Post({username, imageUrl, location}) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        setShowDropdown(!showDropdown);
    }

    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    }

    const handleSaved = () => {
        setIsSaved(!isSaved);
    }

    const handleOpenCommentModal = () => {
        onOpen();
    }

    return (
        <div>
            <div className='border w-full rounded-md'>
                <div className='flex justify-between items-center py-4 px-5 w-full'>
                    <div className='flex items-center'>
                        <img className='h-12 w-12 rounded-full' src='https://cdn.pixabay.com/photo/2023/10/13/15/38/butterfly-8313010_640.jpg' alt='' />
                        <div className='pl-2'>
                            <p className='font-semibold text-sm'>{username}</p>
                            {location !== "" ? <p className='font-thin tesxt-sm'>{location}</p> : null}
                        </div>
                    </div>
                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick} />
                        <div className='dropdown-content'>
                            {showDropdown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>
                </div>
                
                <div>
                    <img className='w-full' src={imageUrl} alt='a girl' />
                </div>

                <div className='flex justify-between items-center w-full px-5 py-4'>
                    <div className='flex items-center space-x-2'>
                        {isPostLiked ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike} /> : <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}
                        <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer' />
                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                    </div>
                    <div>
                        {isSaved ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSaved} /> : <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSaved} />}
                    </div>

                </div>

                <div className='w-full py-2 px-5'>
                    <p>10 likes </p>
                    <p className='opacity-50 py-2 cursor-pointer'>view all 10 comments</p>
                </div>

            </div>
            
            <CommentModal isSaved={isSaved} isPostLiked={isPostLiked} handlePostLike={handlePostLike} handleSaved={handleSaved} onClose={onClose} isOpen={isOpen}/>
        </div>
    )
}
