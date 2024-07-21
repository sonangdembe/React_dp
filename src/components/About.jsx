import React, { useState } from 'react'

const About = () => {

    const [name,setName] = useState('sona');

const handleClicked =()=>{
  setName('angdembe')
}
  return (
    <>
    <h1 style= {{backgroundColor:name === 'sona'? 'green' : 'red'}}>{name}</h1>
    <button onClick={handleClicked}>click me</button>
    </>
  )
}

export default About