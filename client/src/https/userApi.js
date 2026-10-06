import { $authHost } from ".";
import { jwtDecode } from 'jwt-decode';
const avatarUrl = path => path ? new URL(path, 'http://localhost:5000').href : '';

export const signup = async(username,email,password)=>{

const{data}=await $authHost.post('auth',{username,email,password})
localStorage.setItem('token', data.token)
localStorage.setItem('avatar', avatarUrl(data.user.avatar))
const user = jwtDecode(data.token)
localStorage.setItem('userId', user.id)
localStorage.setItem('username', user.username)
return user
}


export const login = async(email,password)=>{

const{data}=await $authHost.post('login',{email,password})
localStorage.setItem('token', data.token)
localStorage.setItem('avatar', avatarUrl(data.user.avatar))
const user = jwtDecode(data.token)
localStorage.setItem('userId', user.id)
localStorage.setItem('username', user.username)
return user
}

export const uploadAvatar = async(file)=>{
const formData = new FormData();
formData.append('avatar', file);
const {data} = await $authHost.post('upload', formData,); 
const url = avatarUrl(data.avatar);
localStorage.setItem('avatar', url)
return url
};

export const check = async()=>{

const responce=await $authHost.post('auth')
return responce
}


