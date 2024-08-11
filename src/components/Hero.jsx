import React from 'react'
import {DATA} from "../data/index.jsx"

function Hero() {
  return (
    <div className="hero lg:py-36 lg:mb-2 mb-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="./avatar.jpg"
          className="lg:max-w-sm lg:m-auto m-2 max-w-xs rounded-full lg:shadow-2xl shadow-lg" />
        <div className='lg:mr-16 flex justify-center items-center flex-col lg:items-start'>
          <h1 className="lg:text-5xl text-3xl font-bold">
            {
              DATA.name
            }
          </h1>
          <p className="py-6 text-lg">
              {
                DATA.description
              }
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero;