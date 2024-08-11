import React from 'react'
import { DATA } from '../data';

function Projects() {

  return (
    <div className='flex items-center justify-center flex-col lg:mb-12 mb-3'>
        <h1 className='lg:text-3xl text-xl lg:mb-6 mb-4'>Projects</h1>
        <div className='lg:flex items-center justify-center flex-row'>
        {
            DATA.projects.map((project) => {
               return <div key={project.title} className="card bg-black w-96 shadow-xl mx-8 mb-8">
                    <figure>
                        <img
                        src={project.image}
                        alt={project.title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title lg:text-2xl text-xl">
                            {project.title}
                            <span className='lg:text-sm text-xs ml-auto'>{project.dates}</span>
                        </h2>
                        <p>{project.description}</p>
                        <div className="card-actions justify-end">
                            <div>
                                {
                                    project.technologies.map((tech) => {
                                        return <div className='badge badge-outline'>{tech}</div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary px-2">
                                <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-sm'
                                >        
                                Code
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            })
        }
        </div>
    </div>
  )
}

export default Projects;