import React from 'react'
import { DATA } from '../data'

function AboutMe() {
  return(
    <>
    <div className='flex flex-col items-center justify-center lg:mb-12 mb-8'>
      <h1 className='lg:text-3xl text-xl'>About Me</h1>
      <div className='py-4'>
        <p className='lg:text-lg text-base lg:px-40 px-12'>
        {
          DATA.summary
        }
        </p>
      </div>
    </div>
    </>
  )
}

export default AboutMe;