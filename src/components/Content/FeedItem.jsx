import React from 'react'
import FeedItemNav from './FeedItemNav'

function FeedItem({ item }) {
  return (
    <div className='flex border-b hover:bg-gray-lightest px-3 py-1'>
      <div id='img' className='mr-2'>
        <button className='pt-1'>
          <img src={item.avatar} alt='User Photo' className='w-10 h-10 rounded-full'/>
        </button>
      </div>
      <div id="content" className='w-full'>
        <div id='header' className='flex justify-between'>
          <div>
            <span className='text-sm font-semibold mr-1'>{item.displayName}</span>
            <span className='text-xs text-gray-dark font-semibold mr-1'>{item.userName} -</span>
            <span className='text-xs text-gray-dark font-semibold'>{item.timestamp}</span>
          </div>
          <div>
            <button className='hover:bg-primary-lowLight rounded-full flex items-center justify-center p-1'> 
              <img src="/Icons/OtherIcons/Ellipsis.svg" className='w-4 h-4'/>
            </button>
          </div>
        </div>
        <div id='tweet'>
          <span className='text-sm'>{item.content}</span>
        </div>
        <FeedItemNav />
      </div>
    </div>
  )
}

export default FeedItem