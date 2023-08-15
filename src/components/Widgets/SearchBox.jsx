import React from 'react'

function SearchBox() {
  return (
    <div className='mb-3 mt-1 flex items-center bg-gray-200 rounded-full p-2 focus-within:bg-transparent focus-within:ring-2'>
        <img src="/Icons/Search.svg" alt="Search" className='w-4 h-4 mr-2 ml-2'/>
        <input type="text" placeholder='Search' className='w-full text-sm border-none outline-none bg-transparent placeholder-gray-dark'/>
    </div> 
  )
}

export default SearchBox