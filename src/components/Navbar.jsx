import React from 'react'
import { DATA } from '../data';

function Navbar() {
  const socialItems = Object.entries(DATA.contact.social).filter(([key, value]) => value.navbar);
  
  return (
    <>
    <div className='flex flex-row justify-end items-center mt-10 lg:mr-8 mb-4'>
          {
            socialItems.map(([key, {name, icon, url}]) => {
              return <div className='relative group' key={key}>
                  <div className='flex items-center justify-center mr-8'>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-lg'
                  >
                    {icon}
                    <span className='absolute hidden w-max p-2 text-white bg-black rounded group-hover:block cursor-pointer'>
                      {name}
                    </span>
                    </a>
                  </div>
              </div>
            })
          }
    </div>
    </>
  )
}

export default Navbar;