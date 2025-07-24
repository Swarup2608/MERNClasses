import React from 'react'
import Cards from './components/Cards'

const App = () => {
  let name = "Swarup";
  let age = 22
  return (
    <div className='abc'>
      <Cards name={name} age={age} />
    </div>
  )
}

export default App
