import React from 'react'
import { useState } from 'react'
const Hook = () => {
const[data, setData]=useState(0)
const [name, setName] = useState('What is your name ')
const increment=()=>{
    setData(data + 1)
}
const decrement =()=>{
  if(data===0){
    return;
  }
    setData(data -1)

    
}
  return (
    <div className="hookContainer">
  
    
    <h4> {data} Item are added</h4>
     <button onClick={increment}>Add to Cart</button>
     <button onClick ={decrement}>Remove from Cart</button>
     <br/>
     <h3>{name}</h3 >
     <button onClick ={()=>setName("My name is Nabin Chand")}>Click</button>
    </div>
  )
}

export default Hook