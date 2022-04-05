import React from 'react'
import { useDispatch } from 'react-redux'
import { generateRoutes } from '@/utils/route'
import { back_router } from '@/router'
import { routes_unique } from '@/store/modules/routes'
import { deepClone } from '@/utils/tool-function'

const Permission = () => {
  const dispatch = useDispatch()
  const router = deepClone(back_router)
  const handleChange = (string) => {
    dispatch({type: routes_unique, data: {
      back_router: generateRoutes(router, string)
    }})
  }

  return <div>
    <button onClick={() => {
      handleChange('test')
    }}>修改TesT权限</button>
    <button onClick={() => {
      handleChange('admin')
    }}>修改admin权限</button>
  </div>
}

export default Permission
