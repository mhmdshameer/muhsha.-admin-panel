import React from 'react'
import  './topbar.css'
import {Language, NotificationsNone, Settings} from '@mui/icons-material';
const Topbar = () => {
  return (
    <div className='topbar'>
     <div className='topbarWrapper'>
        <div className='topLeft'>
            <span className='logo'>muhshaadmin</span>
        </div>
        <div className='topRight'>
          <div className= "topbarIconContainer ">
             <NotificationsNone/>
             <span className='topIconBadge'>2</span>
          </div>
          <div className= "topbarIconContainer">
             <Language/>
          </div>
          <div className= "topbarIconContainer">
             <Settings/>
          </div>
          <img src="/img/adminAvatar1.jpg" className='topAvatar' alt='adminAvatar' />
        </div>
     </div>      
    </div>
  )
}

export default Topbar
