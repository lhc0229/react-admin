import {Outlet} from 'react-router-dom'
import React from 'react'

const FrontLayout = () => {
  return <div className='front_layout'>
    <Outlet />
  </div>
}

export default FrontLayout
