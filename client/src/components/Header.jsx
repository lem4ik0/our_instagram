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
const [errorMessage, setErrorMessage] = useState('');

const signlogin= async()=>{
  try{
  if(signWindowOpen){
    const responce=await signup(username, email, password)
    console.log(responce)
    window.location.href = "http://localhost:3000/auth/menu";


  }else if(loginWindowOpen){
    const responce= await login (email, password)
    console.log(responce)
window.location.href = "http://localhost:3000/auth/menu";
  }

}catch(err){
console.error(err);
if(err.responce && err.responce.status===500){
setErrorMessage('Error creating user');
}else {
        setErrorMessage('Error,try again');
        }


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









