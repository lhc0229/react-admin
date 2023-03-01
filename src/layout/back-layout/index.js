import React from "react";
import './style.less'
import { Outlet } from 'react-router-dom'
import Sidebar from "./sidebar"
import Breadcrumb from "./breadcrumb";

const BackLayout = () => {
    return <div className='back-layout'>
        <div className='back-layout-main-sidebar'>
            <Sidebar />
        </div>
        <div className='back-layout-main-content'>
            <div className='back-layout-main-breadcrumb'>
                <Breadcrumb />
            </div>
            <div className='back-layout-outlet'>
                <Outlet />
            </div>

        </div>
    </div>
}

export default BackLayout