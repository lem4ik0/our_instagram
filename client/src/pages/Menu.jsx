import React from 'react'
import './pages.css';
import homeIcon from "../images/house-front-view-svgrepo-com.svg"
import searchIcon from "../images/search-svgrepo-com.svg"
import reelsIcon from "../images/video-player-svgrepo-com.svg"
import messagesIcon from "../images/message-square-svgrepo-com.svg"
import notificationsIcon from "../images/heart-svgrepo-com.svg"
import createIcon from "../images/add-bracket-svgrepo-com.svg"
import default_Avatar from "../images/default-avatar.jpg"
export default function Menu() {
  const userId = localStorage.getItem('userId')
  const avatar = localStorage.getItem('avatar')

  return (
    <menu className='menu'>
      <title>INSTAGRAM</title>
      <div className="container">
    <div className='baner'>Instagram</div>
     <nav className='menu-refs'>
     <a href="/auth/menu" className="home-ref">
     <img src={homeIcon} alt="" className="home-img" />
     <span className="home-text">Home</span>
     </a>
     <a href="/auth/menu" className="search-ref">
     <img src={searchIcon} alt="" className="search-img" />
     <span className="search-text">Search</span>
     </a>
     <a href="/auth/menu" className="reels-ref">
     <img src={reelsIcon} alt="" className="reels-img" />
     <span className="reels-text">Reels</span>
     </a>
     <a href="/auth/menu" className="messages-ref">
     <img src={messagesIcon} alt="" className="messages-img" />
     <span className="messages-text">Messages</span>
     </a>
     <a href="/auth/menu" className="notifications-ref">
     <img src={notificationsIcon} alt="" className="notifications-img" />
     <span className="notifications-text">Notifications</span>
     </a>
     <a href={userId ? `/auth/menu/profile/${userId}` : '/auth'} className="create-ref">
     <img src={createIcon} alt="" className="create-img" />
     <span className="create-text">Create</span>
     </a>
    <a href={userId ? `/auth/menu/profile/${userId}` : '/auth'} className="profile-ref">
    <img src={avatar || default_Avatar} alt="" className="profile-img" />
     <span className="profile-text">Profile</span>
     </a>
     </nav>
     </div>
    </menu>
  )
}
