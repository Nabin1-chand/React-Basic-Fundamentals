import React from 'react'
import { useState } from 'react'
const Hook = () => {
const[data, setData]=useState(0)
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
    </div>
  )
}

export default Hook