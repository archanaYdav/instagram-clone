import React from 'react'
import ProfileUserDetails from '../../../Components/ProfileComponents/ProfileUserDetails';
import ReqUserPostPart from '../../../Components/ProfileComponents/ReqUserPostPart';

export default function Profile({name, username, profileImg}) {
  return (
    <div className='px-20'>
        <div >
            <ProfileUserDetails name={name} username={username} profileImg={profileImg}/>
        </div>
        <div>
          <ReqUserPostPart />
        </div>
    </div>
  )
}
