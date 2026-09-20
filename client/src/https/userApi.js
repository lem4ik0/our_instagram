import { $authHost } from ".";
export const signup = async(username,email,password)=>{

const responce=await $authHost.post('auth',{username,email,password})
return responce
}


export const login = async(email,password)=>{

const responce=await $authHost.post('login',{email,password})
return responce
}



export const check = async()=>{

const responce=await $authHost.post('auth')
return responce
}


