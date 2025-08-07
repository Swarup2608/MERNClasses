import React, { useContext, useEffect, useState } from 'react'
import Timer from './Timer'
import MyContext from '../context/mainContext'

const Cards = ({name,setName,age,setAge}) => {

  // useEffect(()=>{
  //   setAge(name === "Ramesh"? 30  :name === "Yatheswar" ? 24 : 28 )
  // },[name])
  const user = useContext(MyContext)
  return (
    <div className='cards'>
        {/* <h1>Hello {name}!</h1>
        <h5>Your age is {age}</h5>
        <p>{name > 5 ? "Your name is a big one " :  " You had a short name"}</p>
        <button onClick={()=>{setName('Ramu')}}>ClickMe</button>
        <button onClick={()=>{setName("Yatheswar")}}>ClickMe</button> */}
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{user}</p>
        <Timer />
    </div>
  )
}

export default Cards
