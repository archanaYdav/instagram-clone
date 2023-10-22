import React from 'react'
import StoryViewer from '../../../Components/StoryComponent/StoryViewer'

export default function Story() {
    const story = [
        {
            image: "https://images.pexels.com/photos/16572478/pexels-photo-16572478/free-photo-of-blurred-woman-with-long-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/18697717/pexels-photo-18697717/free-photo-of-a-picnic-blanket-with-bread-milk-and-a-glass-of-juice.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/18122802/pexels-photo-18122802/free-photo-of-man-on-basketball-court.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/18748936/pexels-photo-18748936/free-photo-of-a-bride-and-groom-standing-in-front-of-the-eiffel-tower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/14495744/pexels-photo-14495744.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
    ]
  return (
    <div>
        <StoryViewer stories={story}/>
    </div>
  )
}
