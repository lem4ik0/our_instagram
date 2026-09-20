import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signup,login } from '../https/userApi';

export default function Header() {
let [signWindowOpen,signUp]=useState(false)
let [loginWindowOpen,logIn]=useState(false)
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const signlogin= async()=>{
  if(signWindowOpen){
    const responce=await signup(username, email, password)
    console.log(responce)


  }else if(loginWindowOpen){
    const responce= await login (email, password)
    console.log(responce)

  }

}

  return (
    <header className='header'>
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

        </div>

        )}

      
    </div>
    </header>
  )
}









/*




*/