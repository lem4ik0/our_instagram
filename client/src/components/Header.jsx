import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { GoSignIn } from "react-icons/go";


export default function Header() {
let [signWindowOpen,signUp]=useState(false)

  return (
    <header className='header'>
    <div>
        <span className='logo'>Instagram</span> 
    </div>
    <div> 
        <span className='presentation'> </span>
      
        <Button onClick={() => signUp(signWindowOpen=>!signWindowOpen)}  className={`reg ${signWindowOpen && 'active'}`}>Signup</Button>
        
        
       
        

        {signWindowOpen && (
        


        <div className='signup'>
         Register window

        </div>

        )}


        <Button className='log'>Login</Button>

      
    </div>
    </header>
  )
}









/*
<TextField variant="standard" label="Username" />
<TextField variant="outlined" label="Email" type="email" />
<TextField variant="filled" label="Password" type="password" />
<TextField variant="outlined" label="Email" type="email" />
<TextField variant="filled" label="Password" type="password" />
*/