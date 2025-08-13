import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center pt-8 border-t '>
        <Title mainTitle={'About'} subHeading={'Us'} />
      </div>
      <div className='my-10 flex flex-col items-center justify-center md:flex-row gap-16'>
        <img src={assets.about} alt="About Image" className='w-full md:max-w-[450px] '/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'> 
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum magni, cumque sequi, dolores facilis laboriosam dolorem quo veritatis est amet neque nostrum cupiditate ipsam optio aperiam deserunt delectus quae eaque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum magni, cumque sequi, dolores facilis laboriosam dolorem quo veritatis est amet neque nostrum cupiditate ipsam optio aperiam deserunt delectus quae eaque.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed doloribus, saepe totam recusandae a dolore ratione consequatur maiores, id cupiditate eos commodi ipsum. Ipsum sint optio consequatur facere officiis et.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed doloribus, saepe totam recusandae a dolore ratione consequatur maiores, id cupiditate eos commodi ipsum. Ipsum sint optio consequatur facere officiis et.</p>
          
        </div>
      </div>


    </div>
  )
}

export default About
