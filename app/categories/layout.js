import React from 'react'

function layout({children}) {
  return (
    <div className='mx-auto px-4 max-w-7xl'>
        {children}
    </div>
  )
}

export default layout