import { Layout, Breadcrumb } from 'antd'
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons'
import React, {useEffect, useState} from 'react'
import { createHashHistory } from 'history'
import { Link } from 'react-router-dom'
import './style.less'
import {useSelector} from 'react-redux'
const Headers = Layout.Header

const Header = (props) => {
  const { collapse } = props

  const route = useSelector((state) => {
    return state['routes'].back_router
  })

  const { location } = createHashHistory()
  const { pathname } = location

  const [collapsed, setCollapsed] = useState(collapse)
  const [breadcrumb, setBreadcrumb] = useState([])

  const initRoutes = (path_names, route, index, breadcrumb, current_path) => {
    const match_route = route.filter(item => item.path === path_names[index])
    const len = match_route.length
    if (len) {
      breadcrumb.push({path: current_path + match_route[0].path, title: match_route[0].meta.title})
      if (match_route[0].children) {
        initRoutes(path_names, match_route[0].children, index + 1, breadcrumb, current_path + match_route[0].path + '/')
      }
    }
    return breadcrumb
  }

  const initBreadcrumb = () => {
    const path_names = pathname.split('/').slice(1)
    return initRoutes(path_names, route, 0, [], '')
  }

  useEffect(() => {
    setCollapsed(collapse)
    const init_breadcrumb = initBreadcrumb()
    setBreadcrumb(init_breadcrumb)
  }, [collapse, pathname])

  return <Headers className='site-layout-background back_layout_header' style={{ padding: 0 }}>
    <div className='back_layout_header_left'>
      {
        collapsed ? <MenuUnfoldOutlined className='trigger collapse_icon ' onClick={ props.handleToggle } /> : <MenuFoldOutlined className='trigger collapse_icon' onClick={props.handleToggle} />
      }
      {/* <Breadcrumb>*/}
      {/*  {*/}
      {/*    breadcrumb.map(item => {*/}
      {/*      return <Breadcrumb.Item key={item.path}>*/}
      {/*        <Link to={'/' + item.path}>{item.title}</Link>*/}
      {/*      </Breadcrumb.Item>*/}
      {/*    })*/}
      {/*  }*/}
      {/* </Breadcrumb>*/}
    </div>
  </Headers>
}

export default Header
