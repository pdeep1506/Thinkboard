import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'

const HomePage = () => {
   const [isRateLimited,seIsRateLimited ] = useState(false)
  return (
    <div className='min-h-screen'>

      <Navbar></Navbar>
      {isRateLimited && <RateLimitedUI></RateLimitedUI>}

    </div>
  )
}

export default HomePage