import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import {FaComment} from "react-icons/fa";
import "./ReqUserPostCard.css";

export default function ReqUserPostCard() {
  return (
    <div className='p-2'>
        <div className='post w-60 h-60'>
            <img className='cursor-pointer' src='https://cdn.pixabay.com/photo/2023/03/06/14/19/garden-7833569_640.jpg' alt='jkj'/>
            <div  className='overlay'>
                <div className='overlay-text flex justify-center'>
                    <div className='mr-5'>
                        <AiFillHeart /> <span>10</span>
                    </div>
                    <div>
                        <FaComment /> <span>10</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
