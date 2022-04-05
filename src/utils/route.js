import React from 'react'

/* 处理侧边栏导航路由*/
export const SidebarRoutes = (routes) => {
  const res = []
  for (const router of routes) {
    if (router.hidden) {
      continue
    }
    if (router.children) {
      router.children = SidebarRoutes([...router.children])
    }
    res.push(router)
  }
  return res
}

/* 处理权限路由*/
export const generateRoutes = (routes, auth) => {
  const res = []
  for (const router of routes) {
    if (auth !== 'admin' && router.meta && router.meta.roles && !router.meta.roles.includes(auth)) {
      continue
    }
    if (router.children) {
      router.children = generateRoutes([...router.children], auth)
    }
    res.push(router)
  }
  return res
}
