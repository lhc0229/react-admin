import { Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import './style.less'
import { Layout } from 'antd'

import SidebarItem from './Sidebar/SidebarItem'
import Header from './Header'

const { Content, Sider } = Layout

const BackLayout = (prop) => {
  const [collapsed, setCollapsed] = useState(false)

  const handleToggle = () => {
    setCollapsed(!collapsed)
  }

  return <div className='back_layout'>
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' />
        <SidebarItem path='/bgd' />
      </Sider>
      <Layout className='site-layout'>
        <Header handleToggle={handleToggle} collapsed={collapsed} />
        <Content className='site-layout-background main_content' style={{margin: '24px 16px', padding: 24}}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </div>
}

export default BackLayout
