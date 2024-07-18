import React, { useState } from 'react'
import Button from './Button'




const About = () => {

    
    const [index,setIndex] = useState(0)

    const increaseCount =()=>{
    setIndex(index+1)
    }
  
const decreaseCount=()=>{
    setIndex(index-1)
}
  return (
    <>
    <h1>{index}</h1>
   <button onClick={increaseCount}>+</button>
   <br/>
   <button onClick={decreaseCount}>-</button>
    </>
  )
}

export default About