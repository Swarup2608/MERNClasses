import React, { useContext, useState } from 'react'
import Cards from './components/Cards'
import Cars from './components/Cars';
import Timer from './components/Timer';
import MyContext from './context/mainContext';
import Component1 from './Component1';
import { Link } from 'react-router-dom';
import Counter from './components/Counter';

const App = () => {

    var [name,setNameHook] = useState("Swarup");
    const [age,setAge] = useState(23);
     const [car,setCar] = useState({
        brand : 'Tata',
        model : 'Nano',
        color : 'Green'
    });

  return (
    <div className='abc'>
      <Component1 car={car} setCar={setCar} />
      <Counter/>
      <a href="https://www.google.com">Google</a>
    </div>
  )
}

export default App
