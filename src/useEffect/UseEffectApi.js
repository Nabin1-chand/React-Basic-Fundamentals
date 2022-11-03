import React, { useState } from 'react'
import { useEffect } from 'react';
const url = 'https://jsonplaceholder.typicode.com/posts';

const UseEffectApi = () => {
const [users , setUsers]= useState([])
 const getUsers = async()=>{
    const response = await fetch (url);
    const users = await response.json();
    console.log(users)
     setUsers(users);

 };
  useEffect(() => {
     getUsers();
  },[])
  
  return (
   <div className="my-container">
      <h1>Hello  github users</h1>
       {users.map((user)=>{
       return (
        <>
        <li>{user.userId}</li>
        <li>{user.title}</li>
        <li>{user.body}</li>
        </>
       
       )
     
       })}
         
   </div>
  )
}

export default UseEffectApi
