import React from 'react'

function TweetBoxIcons({ icon }) {
  return (
    <button className='hover:bg-primary-light p-2 rounded-full  '>
        <img src={icon} className='w-4 h-4'/>
    </button>
  )
}

export default TweetBoxIcons