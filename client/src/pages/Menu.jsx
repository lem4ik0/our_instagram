import React from 'react'
import './pages.css';
import homeIcon from "../images/house-front-view-svgrepo-com.svg"
export default function Menu() {
  return (
    <menu className='menu'>
      <title>INSTAGRAM</title>
      <div className="container">
    <div className='baner'>Instagram</div>
     <nav className='menu-refs'>
     <a href="/auth/menu" className="home-ref">Home</a>
    {/* <img src={homeIcon} alt="" className="home-img" /> */}
     <a href="/auth/menu" className="home-ref">Search</a>
     <a href="/auth/menu" className="home-ref">Reels</a>
     <a href="/auth/menu" className="home-ref">Messages</a>
     <a href="/auth/menu" className="home-ref">Notifications</a>
     <a href="/auth/menu" className="home-ref">Create</a>
     <a href="/auth/menu" className="home-ref">Profile</a>
     </nav>
     </div>
    </menu>
  )
}
