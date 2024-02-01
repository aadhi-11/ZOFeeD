import React, { useContext } from 'react'
import "./NavBar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CommentIcon from '@mui/icons-material/Comment';
import ListIcon from '@mui/icons-material/List';
import { DarkModeContext } from '../../context/darkModeContext';
const NavBar = () => {
  const {dispatch}=useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="search" name="search" id="search" placeholder='search..' autocomplete="off" />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon' />
            English
          </div>
          <div className="item">
            <DarkModeIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})} />
          </div>
          <div className="item">
            <FullscreenExitIcon className='icon' />

          </div>
          <div className="item">
            <NotificationsActiveIcon  className='icon' />
            <div className="Counter">
              1
            </div>

          </div>
          <div className="item">
            <CommentIcon className='icon' />
            <div className="Counter">
              1
            </div>
          </div>
          <div className="item">
            <ListIcon className='icon' />

          </div>
          <div className="item">
            <img 
             src='https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/best_linkedin_photos.webp'
             alt="avatar" 
              className='avatar'
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
