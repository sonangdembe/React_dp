import React, { useEffect,useState } from 'react'

const UseEffect = () => {




    // useState
    const [count, setCount] = useState(0)
    const increaseNumber = () =>{
        setCount(count+1)
    }


    // useEffect
    // First category of the useEffets, and it is anyoonuous
    // useEffect(()=>{
    //   console.log('hello inside from useEffect')
    // },[])





 // second types of useEffect
 const [count2, setCount2] = useState(0);
 const decreseNumber = () =>{
    setCount2(count2-1)
}
 useEffect(()=>{
    console.log("second type of useEffect")
 },[count,count2])




     // third type not preferable
     useEffect(()=>{
        console.log('third types of useEffect')
     })




     
  return (
   <>
   <h1>{count}</h1>
   <h1>{count2}</h1>
   <button onClick={increaseNumber}>+</button>
   <button onClick={decreseNumber }>-</button>
   </>
  )
}

export default UseEffect