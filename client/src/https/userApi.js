import { $authHost } from ".";
import { jwtDecode } from 'jwt-decode';
export const signup = async(username,email,password)=>{

const{data}=await $authHost.post('auth',{username,email,password})
return jwtDecode(data.token)
}


export const login = async(email,password)=>{

const{data}=await $authHost.post('login',{email,password})
return jwtDecode(data.token)
}



export const check = async()=>{

const responce=await $authHost.post('auth')
return responce
}


