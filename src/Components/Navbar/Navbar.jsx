import React, { useState } from 'react'
import"./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
function Navbar() {
  const [isScrolled, setIsScrolled]=useState(false);

  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset === 0? false : true);
    return ()=> (window.onscroll = null)
  }

  console.log(isScrolled)
  return (
    <div className={isScrolled ?'navbar scrolled': "navbar"}>
      <div className="container">
        {/* left side */}
        <div className="left">
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" className='left-img'/>
          <Link to="/" className='link_style'>Home</Link>
          <Link to="/tvshow" className='link_style'>TV Shows</Link>
          <Link to="/movies" className='link_style'>Movies</Link>
          <Link to="/new_Popular" className='link_style'>New & Popular</Link>
          <Link to="/myList" className='link_style'>My List</Link>
        </div>

        {/* right side */}
        <div className="right">
          <SearchIcon className='icon' sx={{fontSize:"30px"}}/>
          <CardGiftcardIcon className='icon'  sx={{fontSize:"30px"}}/>
          <NotificationsIcon className='icon'  sx={{fontSize:"30px"}}/> 
          <img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png" alt="" className='rightimg' />
          <ArrowDropDownIcon className='icon'  sx={{fontSize:"30px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar