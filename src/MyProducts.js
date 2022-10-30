
import React from 'react'

const MyProducts = ({name,description, price}) => {
  return (
    <div className= "Myproduct">
     <h2>{name}</h2>
     <p>{description}</p>
     <h4>{price}</h4>
    </div>
  )
}
MyProducts.defaultProps={
    name:"Andriod",
    description:"the  product has fantastic feature",
    price:"50$"
}
export default MyProducts