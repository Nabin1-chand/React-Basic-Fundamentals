
import React from 'react'

const MyProducts = (props) => {
  return (
    <div className= "Myproduct">
     <h2>{props.name}</h2>
     <p>{props.description}</p>
     <h4>{props.price}</h4>
    </div>
  )
}
MyProducts.defaultProps={
    name:"Andriod",
    description:"the  product has fantastic feature",
    price:"50$"
}
export default MyProducts