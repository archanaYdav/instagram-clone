import React from 'react'
import StoryCircle from '../../../Components/Story/StoryCircle';
import HomeRight from '../../../Components/HomeRight/HomeRight';
import Post from '../../../Components/Post/Post';

export const HomePage = () => {
  
  return (
    <div>
      <div className='flex mt-10 justify-center w-[100%]'>
        <div className='w-[44%] px-10'>
          <div className='storyDiv flex space-x-2 rounded-md border p-4 justify-start w-full'>
            {[1,1,1,1].map((item) => <StoryCircle />)}
          </div>
          <div className="space-y-10 w-full mt-10">
            {[1,1,1].map((item) => <Post />)}
          </div>
        </div>
        <div className='w-[27%]'>
          <HomeRight />
        </div>
      </div>
      
    </div>
  )
}

export default HomePage;
