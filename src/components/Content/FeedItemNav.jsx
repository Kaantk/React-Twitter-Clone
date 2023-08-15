import React from 'react'

function FeedItemNav() {
  return (
    <div id='footer' className='w-full flex items-center justify-between mt-2'>
        <div className='flex items-center'>
            <button className='hover:bg-primary-lowLight p-1 rounded-full'>
              <img src="/Icons/OtherIcons/Reply.svg" alt="" className='w-4 h-4'/>
            </button>
            <span className='text-gray-dark text-xxs font-semibold hover:text-primary-base ml-1'>123</span>
        </div>
        <div className='flex items-center'>
            <button className='hover:bg-green-200 p-1 rounded-full'>
              <img src="/Icons/OtherIcons/Retweet.svg" alt="" className='w-4 h-4'/>
            </button>
            <span className='text-gray-dark text-xxs font-semibold hover:text-green-400 ml-1'>16</span>
        </div>
        <div className='flex items-center'>
            <button className='hover:bg-red-300 p-1 rounded-full'>
              <img src="/Icons/OtherIcons/Like.svg" alt="" className='w-4 h-4'/>
            </button>
            <span className='text-gray-dark text-xxs font-semibold ml-1 hover:text-red-500'>1523</span>
        </div>
        <div className='flex items-center'>
            <button className='hover:bg-primary-lowLight p-1 rounded-full'>
              <img src="/Icons/OtherIcons/View.svg" alt="" className='w-4 h-4'/>
            </button>
            <span className='text-gray-dark text-xxs font-semibold ml-1 hover:text-primary-base'>1233</span>
        </div>
        <div className='flex items-center'>
            <button className='hover:bg-primary-lowLight p-1 rounded-full'>
              <img src="/Icons/OtherIcons/Share.svg" alt="" className='w-4 h-4'/>
            </button>
        </div>
    </div>
  )
}

export default FeedItemNav