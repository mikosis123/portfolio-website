import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2010,
        title: 'JMA',
        duration: '2 Years',
        details: 
        'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.'
    },
    {
        year: 2012,
        title: 'RIS',
        duration: '8 Years',
        details: 
        'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.'
    },
    {
        year: 2020,
        title: 'BMIS',
        duration: '2 Years',
        details: 
        'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.'
    },
    {
        year: 2022,
        title: 'PIET',
        duration: 'Ongoing...',
        details: 
        'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.'
    },
]

const Work = () => {
  return (
    <div id='edu' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-10'>Education</h1>
        {data.map((item, idx)=> (
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))}
    </div>
  )
}

export default Work