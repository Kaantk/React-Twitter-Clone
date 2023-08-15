import React from 'react'

function Container({ children }) {
  return (
    <div className='max-w-7xl max-h-screen mx-auto flex'>
      {children}
    </div>
  )
}

export default Container
