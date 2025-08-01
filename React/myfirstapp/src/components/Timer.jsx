import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [time,setTime] = useState(Date(Date.now()))

  useEffect(()=>{
    setTimeout(()=>{
        setTime(Date(Date.now()))
    },1000)
  },[]);
  
  useEffect(()=>{
    setTimeout(()=>{
        setTime(Date(Date.now()))
    },1000)
  },[time]);

  return (
    <div>
      Current Time  = {time}
    </div>
  )
}

export default Timer
