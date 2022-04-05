import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'

const Layout = () => {
  const routes = useSelector((state) => {
    return state['routes']
  })

  const { front_router, back_router, other_router } = routes

  const all_routes = [...front_router, ...back_router, ...other_router]

  return <div>
    {
      useRoutes(all_routes)
    }
  </div>
}

export default Layout
