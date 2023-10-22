import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Progressbar from './Progressbar';

const StoryViewerContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    height: 100vh;
    background-color: black;
`

const StoryImage = styled.img`
    max-height:90vh;
    object-fit:contain;
`


export default function StoryViewer({stories}) {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlNextStory = () => {
        console.log(currentStoryIndex);
        if(currentStoryIndex<stories.length-1){
            setCurrentStoryIndex(currentStoryIndex+1);
            setActiveIndex(activeIndex+1);
        }else if(currentStoryIndex === stories.length-1){
            setCurrentStoryIndex(0);
            setActiveIndex(0);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("currentStoryIndex");
            handlNextStory();
        }, 2000);
        return () => {
            clearInterval(interval);
        }
    }, [currentStoryIndex]);

  return (
    <div className='relative w-full'>
       <StoryViewerContainer>
            <StoryImage src={stories?.[currentStoryIndex].image}/>

            <div className="absolute top-0 flex w-full">
                {stories.map((item, index) => <Progressbar duration={2000} index={index} activeIndex={activeIndex} key={index} />)}
            </div>
       </StoryViewerContainer>
    </div>
  )
}
