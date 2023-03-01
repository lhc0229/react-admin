import React from "react";
import { useSelector } from 'react-redux'
import { useRoutes, useNavigate } from "react-router-dom"
import { useSetState, useMount, useUpdateEffect } from "ahooks"
import { createHashHistory } from "history";

import Router from "@/tool-library/router"
import Template from "@/components/Template";
import { all_router } from "@/router"

const Layout = ()=> {

    const user_info = useSelector((state) => {
        return state.user
    })

    const navigate = useNavigate()
    const { location: { pathname } } = createHashHistory()

    const [state,setState] = useSetState({
        role_routes: []
    })

    useMount(()=>{
        getRoleRoutes()
        updateTitle(pathname)
    })

    useUpdateEffect(()=>{
        updateTitle(pathname)
    },[pathname])

    const updateTitle = (path) => {
        let title = '404'
        const router = new Router(navigate, all_router)
        const routes = router.routes
        routes.forEach(item=>{
            if(item.path === path){
                title = item.title
            }
        })
        document.title = title
    }

    const getRoleRoutes = () => {
        const { role } = user_info
        const router = new Router(navigate, all_router, role)
        const role_routes = router.role_routes
        setState({ role_routes: role_routes })
    }

    return <div>
        <Template show={state.role_routes && state.role_routes.length}>
            {
                useRoutes(state.role_routes)
            }
        </Template>
    </div>
}

export default Layout
