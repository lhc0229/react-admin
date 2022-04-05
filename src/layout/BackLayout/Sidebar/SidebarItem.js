import { Menu } from 'antd'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { createHashHistory } from 'history'
import { deepClone } from 'format-function'
import { SidebarRoutes } from '@/utils/route'
import {useSelector} from 'react-redux'

const { SubMenu } = Menu

const SidebarItem = (props) => {
  const { path } = props

  const back_router = useSelector((state) => {
    return state['routes'].back_router
  })

  const route = deepClone(back_router)

  const routes = SidebarRoutes(route[0].children)

  const { location } = createHashHistory()

  const { pathname } = location

  const [defaultSelectedKeys, setSelectedKey] = useState([location.pathname])

  // 获取当前打开的key
  const getOpenKey = () => {
    const openKey = location.pathname.split('/')
    const router = []
    if (openKey.length > 2) {
      const temp = openKey.slice(1, openKey.length - 1)
      const len = temp.length
      for (let i = 0; i < len; i++) {
        router.push('/' + temp.slice(0, i + 1).join('/'))
      }
    }
    return router
  }

  const [defaultOpenKeys, setOpenKey] = useState(getOpenKey())

  useEffect(() => {
    setSelectedKey([pathname])
    const open_key = getOpenKey()
    setOpenKey(open_key)
  }, [pathname])

  // 递归生成路由
  const MenuItem = (list, current_path) => {
    return list.map((item, index) => {
      if (item.children && item.children.length) {
        return (
          <SubMenu key={ current_path + '/' + item.path } title={ item.meta.title } icon={item.meta.icon}>
            {
              MenuItem(item.children, current_path + '/' + item.path)
            }
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={ current_path + '/' + item.path } icon={item.meta.icon}>
            <Link to={ current_path + '/' + item.path}> {item.meta.title}</Link>
          </Menu.Item>
        )
      }
    })
  }

  // 点击侧边栏
  const handleSelect = (data) => {
    setSelectedKey(data.key)
  }

  return <Menu theme='dark'
    defaultSelectedKeys={defaultSelectedKeys}
    selectedKeys={defaultSelectedKeys}
    defaultOpenKeys={defaultOpenKeys}
    mode='inline'
    onClick={handleSelect}
  >
    {
      MenuItem(routes, path)
    }
  </Menu>
}

export default SidebarItem
