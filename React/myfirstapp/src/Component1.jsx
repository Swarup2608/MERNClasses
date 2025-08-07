import React, { useState } from 'react'
import MyContext from './context/mainContext'
import Cars from './components/Cars'

const Component1 = (car,setCar) => {
    const [user,setUser] = useState("Username")
  return (
    <div>
      <MyContext.Provider value={user}>
        <h1> Hi {user}</h1>
        <Cars car={car} setCar={setCar}/>
      </MyContext.Provider>
    </div>
  )
}

export default Component1
