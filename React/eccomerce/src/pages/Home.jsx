import React from 'react'
import Hero from '../Components/Hero'
import LatestCollections from '../Components/LatestCollections'
import BestSellers from '../Components/BestSellers'
import OurPolicy from '../Components/OurPolicy'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSellers />
      <OurPolicy />
    </div>
  )
}

export default Home
