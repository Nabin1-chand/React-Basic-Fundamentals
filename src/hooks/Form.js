import React, { useState } from 'react'
import '../Css/form.css';
const Form = () => {
    const [list,setList] = useState([])
    // const [name, setName] = useState('')
    // const [email , setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [person, setPerson] =useState({
      name:'', email:'', password:''
    })
    const handleChange=(e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setPerson({...person,[name]:value})
    }
     const Update=(e)=>{
        //  list.push(name,email,password)
        // setName([...name,email,password]) 
        e.preventDefault();
      //   if(name && email && password){
      //   const person ={name,email,password};
      //   setList((list)=>{
      //     return[...list,person]
      //   });
      //   setName('')
      //   setEmail('') 
      //   setPassword('')  
      // }
      // else{
      //   console.log("empty value")
      // }
          if(person.name && person.email && person.password){
            const newPerson ={...person}
            setList([...list, newPerson])
            setPerson({name:'',email:'',password:''})
          }
     } 
  return (
    <div className="my_form">
    <h2>Users Details</h2>
    <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
  </tr>
  
        {list.map((item,index)=>{
  return( 
  
    <tr className="item" key={index}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
  </tr>
  )
        })}
        </table>
        {/* <form className ="Form_Container"> */}
          <input type = 'text' placeholder='Enter your name' name ="name" value={person.name} onChange={handleChange}/>
          <input type ='text' placeholder ='Enter your email' name ='email'  value={person.email} onChange={handleChange}/>
          <input type="password" placeholder ="Enter your Password" name ="password" value={person.password} onChange={handleChange}/>
          <button className='button_contianer' onClick={Update}>Sign In</button>
          <button className='button_contianer'>Sign Up</button>
        {/* </form> */}
    </div>
  )
}

export default Form