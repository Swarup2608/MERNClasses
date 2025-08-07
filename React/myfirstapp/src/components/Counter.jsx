import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const prevCount = useRef();

    useEffect(()=>{
        prevCount.current = count
    },[count])
  return (
    <div>
      <p>Current Counter : {count}</p>
      <p>Previous Counter : {prevCount.current}</p>
      <button onClick={()=>{setCount(count+1)}}>Click Me!</button>
    </div>
  )
}

export default Counter
