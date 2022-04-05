import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'
import { createHashHistory } from 'history'
import { watch } from 'soul-react'

const Layout = () => {
  const routes = useSelector((state) => {
    return state['routes']
  })

  const { front_router, back_router, other_router } = routes

  const all_routes = [...front_router, ...back_router, ...other_router]

  const { location } = createHashHistory()

  const { pathname } = location

  const getTitle = (routes, temp, index) => {
    const list = routes.filter(item => item.path === temp[index])
    if (list && ((temp.length - 1) !== index)) {
      return getTitle(list[0].children, temp, index + 1)
    }
    return list[0]?.meta?.title || 'react-admin'
  }

  const setTitle = (pathname) => {
    const temp = pathname.split('/').filter(item => item)
    document.title = getTitle(all_routes, temp, 0)
  }

  watch(setTitle, pathname)

  return <div>
    {
      useRoutes(all_routes)
    }
  </div>
}

export default Layout
