import React from 'react'
import Navbar from '../components/Sidebar/Navbar'
import NavbarLinks from '../Data/NavbarLinks.json'
import AccountMenu from '../components/Sidebar/AccountMenu'

function Sidebar() {
  return (
    <div className='w-72 px-2 flex flex-col justify-between'>
      <div>
        <div>
          <button className='hover:bg-gray-lightest rounded-full p-1 mt-1'> 
            <img src="/img/twitter.svg" alt="Twitter Logo" className='w-9 h-9'/>
          </button>
        </div>
        <div>
          <nav>
            <ul>
              {NavbarLinks.map(({ icon, name }) => (
                <Navbar key={name} icon={icon} name={name}></Navbar>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <button className='bg-primary-base w-full rounded-full py-2 text-white font-medium hover:bg-primary-dark transfrom transition duration-200 shadow-lg mt-3'>
            Tweet
          </button>
        </div>
      </div>
      <div>
        <AccountMenu />
      </div>
    </div>
  )
}

export default Sidebar