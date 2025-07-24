import React from 'react'

const Cards = ({name="Raju",age}) => {
  return (
    <div className='cards'>
        <h1>Hello {name}!</h1>
        <h5>Your age is {age}</h5>
        <p>{name.length > 5 ? "Your name is a big one " :  " You had a short name"}</p>
        <button onClick={()=>{name="Ramesh"}}>ClickMe</button>
    </div>
  )
}

export default Cards
