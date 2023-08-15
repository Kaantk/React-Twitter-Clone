import React from 'react'
import TimeWidgest from '../components/Widgets/TimeWidgest'
import SearchBox from '../components/Widgets/SearchBox'

function Widgets() {
  return (
    <div className='w-80 px-2'>
      <SearchBox />
      <TimeWidgest />
    </div>
  )
}

export default Widgets