import React, { useState,useEffect } from 'react'

const UseEffect = () => {
    const[ count, setCount] = useState(0)
   
    useEffect(() => {
        console.log(`You have clicked the first button ${count} times`);
      }, [count]);

    const [count2, setCount2] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount2(count2+1)
        }, 1000);
  })

  return (
    <div className ="container">
        <h2>time {count2}</h2> 
        {/* <button onClick ={()=>setCount(count + 1)}>Click Me</button> */}
        {/* <button onClick ={()=>setCount2(count2 + 1)}>Click Me</button> */}
    </div>
  )
}

export default UseEffect
