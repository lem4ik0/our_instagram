import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import defualt_Avatar from '../images/default-avatar.jpg'
import { signup, login, uploadAvatar } from '../https/userApi';

export default function Header() {
  const[img,setImg]=React.useState(null)
  const[avatar,setAvatar]=React.useState(null)

React.useEffect(() => () => {
  if (img?.startsWith('blob:')) URL.revokeObjectURL(img);
}, [img]);

let [signWindowOpen,signUp]=React.useState(false)
let [loginWindowOpen,logIn]=React.useState(false)
const [username, setUsername] = React.useState('')
const [email, setEmail] = React.useState('')
const [password, setPassword] = React.useState('')
const [errorMessage, setErrorMessage] = React.useState('');

const signlogin= async()=>{
  try{
  if(signWindowOpen){
    const responce=await signup(username, email, password)
    if (avatar) {
      const avatarUrl = await uploadAvatar(avatar);
      setImg(avatarUrl);
    }
    console.log(responce)
    window.location.href = "http://localhost:3000/auth/menu";


  }else if(loginWindowOpen){
    const responce= await login (email, password)
    console.log(responce)
window.location.href = "http://localhost:3000/auth/menu";
  }

}catch(err){
console.error(err);
setErrorMessage(err.response?.data?.message || err.message || 'Error, try again');


}
}
  
    let errorBlock = null;

    
    if (errorMessage !== '') {
        errorBlock = (
            <div style={{ color: '#d20012', margin: '-30px 200px', fontSize: '14px', fontWeight: 'bold', whiteSpace: 'nowrap'}}>
                {errorMessage}
            </div>
            
        );
    }
    



  return (
    <header className='header'>
      <title>INSTAGRAM</title>
    <div>
        <span className='logo'>Instagram</span> 
    </div>
   
    <div> 
        <span className='presentation'> </span>
      
        <Button
          onClick={() => {
            signUp((isOpen) => !isOpen)
            logIn(false)
          }}
          className={`reg ${signWindowOpen && 'active'}`}
        >Signup</Button>
        
        
       
        

        {signWindowOpen && (
        


        <div className='signup'>
         Register window
         <TextField
           variant="standard"
           label="Username"
           value={username}
           onChange={(event) => setUsername(event.target.value)}
         />
         <TextField
           variant="outlined"
           label="Email"
           type="email"
           value={email}
           onChange={(event) => setEmail(event.target.value)}
         />
         <TextField
           variant="filled"
           label="Password"
           type="password"
           value={password}
           onChange={(event) => setPassword(event.target.value)}
         />
         <Button onClick={signlogin}>Create Account</Button>
 {errorBlock}

 <div className='avatar-preview'>
    
    {
    img
    ?<img className='avatar' src={img} alt="Avatar" />
    :<img className='avatar' src={defualt_Avatar} alt="Avatar" />
    }

 </div>
 <input type="file" accept="image/*" onChange={e => {
   const file = e.target.files[0];
   setAvatar(file);
   setImg(file ? URL.createObjectURL(file) : null);
 }} />
        </div>

        )}


        <Button
          onClick={() => {
            logIn((isOpen) => !isOpen)
            signUp(false)
          }}
          className={`log ${loginWindowOpen && 'active'}`}
        >Login</Button>

        {loginWindowOpen && (
        


        <div className='login'>
         Login window
         <TextField
           variant="outlined"
           label="Email"
           type="email"
           value={email}
           onChange={(event) => setEmail(event.target.value)}
         />
         <TextField
           variant="filled"
           label="Password"
           type="password"
           value={password}
           onChange={(event) => setPassword(event.target.value)}
         />
          <Button onClick={signlogin}>Submit</Button>
       {errorBlock}
        </div>

        )}

     
    </div>
    </header>
  )
}









