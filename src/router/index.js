import lazyLoading from '@/utils/lazyLoading'
import React from 'react'
import { UploadOutlined } from '@ant-design/icons'

/* 前台路由*/
export const front_router = [
  {
    path: 'front',
    meta: { title: 'Home' },
    element: lazyLoading(() => import('@/layout/FrontLayout')),
    children: [
      {
        path: '',
        meta: { title: 'Home' },
        element: lazyLoading(() => import('@/views/front/Home/index')),
        name: 'front'
      },
      {
        path: '*',
        hidden: true,
        meta: { title: 'error' },
        element: lazyLoading(() => import('@/views/back/ErrorPage/index'))
      }
    ]
  }
]

/* 后台路由*/
export const back_router = [
  {
    path: 'bgd',
    element: lazyLoading(() => import('@/layout/BackLayout')),
    meta: { title: 'bgd' },
    children: [
      {
        path: 'dashboard',
        meta: { title: 'dashboard', icon: <UploadOutlined /> },
        element: lazyLoading(() => import('@/views/back/Dashboard/index'))
      },
      {
        path: 'permission',
        meta: { title: 'Permission', icon: <UploadOutlined />, roles: ['test'] },
        element: lazyLoading(() => import('@/views/back/Permission/index'))
      },
      {
        path: 'nested',
        meta: { title: 'Nested Routes', icon: <UploadOutlined /> },
        element: lazyLoading(() => import('@/components/RouterView/index')),
        children: [
          {
            path: 'menu1',
            meta: { title: 'menu1', icon: <UploadOutlined />, roles: ['test']},
            element: lazyLoading(() => import('@/components/RouterView/index')),
            children: [
              {
                path: 'menu1-1',
                meta: { title: 'menu1-1', icon: <UploadOutlined />, roles: ['test'] },
                element: lazyLoading(() => import('@/views/back/NestedRoutes/Menu1/Menu1-1'))
              },
              {
                path: 'menu1-2',
                meta: { title: 'menu1-2', icon: <UploadOutlined />, roles: ['admin'] },
                element: lazyLoading(() => import('@/views/back/NestedRoutes/Menu1/Menu1-2'))
              }
            ]
          },
          {
            path: 'menu2',
            meta: { title: 'menu2', icon: <UploadOutlined /> },
            element: lazyLoading(() => import('@/views/back/NestedRoutes/Menu2/Menu2'))
          }
        ]
      },
      {
        path: 'hidden',
        hidden: true,
        meta: { title: 'hidden', icon: <UploadOutlined /> },
        element: lazyLoading(() => import('@/views/back/Hidden/index'))
      },
      {
        path: '*',
        hidden: true,
        meta: { title: 'error', icon: <UploadOutlined /> },
        element: lazyLoading(() => import('@/views/back/ErrorPage/index'))
      }
    ]
  }
]

/* 其他的路由*/
export const other_router = [
  {
    path: '',
    element: lazyLoading(() => import('@/layout/OtherLayout')),
    children: [
      {
        path: 'login',
        element: lazyLoading(() => import('@/views/other/Login/index')),
        name: 'login'
      },
      {
        path: '*',
        hidden: true,
        meta: { title: 'error', icon: <UploadOutlined />, roles: ['admin'] },
        element: lazyLoading(() => import('@/views/back/ErrorPage/index'))
      }

    ]
  }
]
