import React from 'react'

function Navbar({ icon, name }) {
  return (
    <li className='group'>
      <a href={name.toLowerCase()} className='cursor-pointer block'>
        <div className='inline-block'>
          <div className='flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full py-3 pl-3 pr-5'>
            <img src={icon} alt={name} className='w-6 h-6'/>
            <span className='ml-4 font-normal'>{name}</span>
          </div>
        </div>
      </a>
    </li>
  )
}

export default Navbar