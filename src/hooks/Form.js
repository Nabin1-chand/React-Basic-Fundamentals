import React, { useState, useSyncExternalStore } from 'react'
import '../Css/form.css';
const Form = () => {
    const [list,setList] = useState([])
    const [name, setName] = useState('')
    const [email , setEmail] = useState([])
    const [password, setPassword] = useState([])
     const Update=()=>{
         list.push(name,email,password)
        setName([...name,email,password])       
     } 
  return (
    <div className="my_form">
    <h2>Users Details</h2>
        {list.map((item)=>{
  return <li>{item}</li>
  
        })}
    
    
        {/* <form className ="Form_Container"> */}
          <input type = 'text' placeholder='Enter your name' name ="name" onKeyUp={(e)=>setName(e.target.value)}/>
          <input type ='text' placeholder ='Enter your email' name ='email' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder ="Enter your Password" name ="password" onChange={(e)=>setPassword(e.target.value)}/>
          <button className='button_contianer'onClick={Update}>Sign In</button>
          <button className='button_contianer'>Sign Up</button>
        {/* </form> */}
    </div>
  )
}

export default Form