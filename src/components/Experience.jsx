import React from 'react'
import { DATA } from '../data';

function Experience() {
  
  return (
    <div className='flex items-center justify-center flex-col lg:px-40 px-8 lg:mb-12 mb-8'>
      <h1 className='lg:text-3xl text-xl lg:mb-6 mb-4'>Experience</h1>
      {DATA.work.map((item) => {
        return <div key={item.company} className="collapse bg-black lg:py-1 py-0">
        <input type="checkbox"/>
        <div className="collapse-title lg:text-xl text-base font-bold">{item.company} - {item.title}</div>
        <div className="collapse-content lg:text-base text-sm">
          <p>{item.location}</p>
          <p>{item.start} - {item.end}</p>
          <p>{item.description}</p>
        </div>
      </div>
      })}
    </div>
  )
}

export default Experience;