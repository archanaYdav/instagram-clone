import React, {useEffect, useState} from 'react'
import StoryCircle from '../../../Components/Story/StoryCircle';
import HomeRight from '../../../Components/HomeRight/HomeRight';
import Post from '../../../Components/Post/Post';
import {  db } from "../../../firebase";

export const HomePage = ({name, username}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {

      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  return (
    <div>
      <div className='flex mt-10 justify-center w-[100%]'>
        <div className='w-[44%] px-10'>
          <div className='storyDiv flex space-x-2 rounded-md border p-4 justify-start w-full'>
            {[1,1,1,1].map((item) => <StoryCircle />)}
          </div>
          <div className="space-y-10 w-full mt-10">
            {posts.map(({id, post}) => <Post key={id} username={post.username} imageUrl={post.imageUrl} location={post.location}/>)}
          </div>
        </div>
        <div className='w-[27%]'>
          <HomeRight name={name} username={username} />
        </div>
      </div>
      
    </div>
  )
}

export default HomePage;
