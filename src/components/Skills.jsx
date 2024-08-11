import React from 'react'
import { DATA } from '../data'

function Skills() {
  return (
    <div className='flex items-center justify-center flex-col lg:mb-12 mb-8'>
    <h1 className='lg:text-3xl text-xl lg:mb-6 mb-4'>Skills</h1>
    <div className='px-8'>
        {
            DATA.skills.map((skill) => {
                return <div className='badge badge-outline lg:p-4 p-2 bg-black text-white lg:text-base text-sm lg:ml-auto ml-4'>{skill}</div>
            })
        }
    </div>
    </div>
  )
}

export default Skills;