import React from 'react'
import ProfileUserDetails from '../../../Components/ProfileComponents/ProfileUserDetails';
import ReqUserPostPart from '../../../Components/ProfileComponents/ReqUserPostPart';

export default function Profile() {
  return (
    <div className='px-20'>
        <div >
            <ProfileUserDetails />
        </div>
        <div>
          <ReqUserPostPart />
        </div>
    </div>
  )
}
