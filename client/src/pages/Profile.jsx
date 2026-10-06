import './pages.css';
import default_Avatar from "../images/default-avatar.jpg"
import React from 'react'
import TextField from '@mui/material/TextField';
import { uploadAvatar } from '../https/userApi';
import homeIcon from "../images/house-front-view-svgrepo-com.svg"
import searchIcon from "../images/search-svgrepo-com.svg"
import reelsIcon from "../images/video-player-svgrepo-com.svg"
import messagesIcon from "../images/message-square-svgrepo-com.svg"
import notificationsIcon from "../images/heart-svgrepo-com.svg"
import createIcon from "../images/add-bracket-svgrepo-com.svg"
import crossIcon  from "../images/free-icon-font-cross-19027656.svg"


export default function Profile() {
  const userId = localStorage.getItem('userId')
  const username = localStorage.getItem('username')
  const [avatar, setAvatar] = React.useState(() => localStorage.getItem('avatar') || '');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [createWindowOpen,setCreateWindowOpen]=React.useState(false)

  const handleAvatarChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      setAvatar(await uploadAvatar(file));
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || error.message || 'Не удалось загрузить аватар');
    }
  };

  return (
    
    <div className="profile-page">
      
      <button onClick={()=>{
    setCreateWindowOpen((isOpen)=>!isOpen)
     }}
     className = {`wincreate${createWindowOpen && 'active'}`}>Create post</button>

<dialog className='create'>
 
    {createWindowOpen && (
    
    <div className='create-window'>
       <button onClick={()=>{
    setCreateWindowOpen((isOpen)=>!isOpen)
     }}
     className = {`wincreate${createWindowOpen && 'active'}`}>
      <img src={crossIcon} alt="" />
     </button>
      create post
      <TextField className='caption-post'>
Add a caption to the post...
      </TextField>
    </div>
    
    
    )}
    </dialog>
      <div className="profile">
        <h4 className="profile-username">{username}</h4>
      <img className="profile-avatar" src={avatar || default_Avatar} alt="Аватар профиля" />
      <input className="profile-avatar-input" id="avatar-upload" type="file" accept="image/*" onChange={handleAvatarChange} />
      <label className="avatar-upload" for="avatar-upload">Change Avatar</label>
      <span className="error-message">{errorMessage && <p role="alert">{errorMessage}</p>}</span>
      <div className="container-posts-subscribers-subscriptions">
      <div className="posts">
        <div className="quantity-posts">0</div>
        <div className="post">Posts</div>
      </div>
      <div className="subscribers">
        <div className="quantity-subscribers">0</div>
        <div className="subscribers">Subscribers</div>
      </div>
      <div className="subscriptions">
        <div className="quantity-subscriptions">0</div>
        <div className="subscriptions">Subscriptions</div>
      </div>
      </div>
    </div>
    
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


   </div>
  )
}
