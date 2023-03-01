import React from 'react';
import { useSetState, useMount } from "ahooks";
import { useSelector, useDispatch } from 'react-redux'
import { useRoutes, useNavigate } from "react-router-dom";
import { user_unique } from "@/store/modules/user";

import { getUserInfo } from "@/api/user";
import Router from "@/tool-library/router";
import Layout from "@/layout";
import Template from "@/components/Template";
import { error_router } from "@/router";
import { setToken } from "@/utils/token";
import { setLocationHref } from "@/global-funcition";

const Permission = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const user_info = useSelector((state) => {
        return state.user
    })

    const [state,setState] = useSetState({
        show: false
    })

    useMount(async ()=>{
       await beforeEach()
    })

    const getInfo = () => {
        return new Promise((resolve, reject) => {
            getUserInfo().then(res=>{
                const data = res.data || {}
                dispatch({ type: user_unique,data:data })
                resolve(data)
             }).catch(err=>{
                reject(err)
            })
        })
    }

    const beforeEach = async () => {
        const router = new Router(navigate)
        const query = router.query

        if(query.token){
            setToken(query.token)
            delete query.token
            setLocationHref(router.path,query)
        }

        const { token,role } = user_info
        //如果token不存在，跳转到登录页面
        if(!token) return router.push({path:'login'})

        // 如果token存在，role不存在
        if(!role){
            try{
                const { role } = await getInfo()
                setState({ show: !!role })
            }catch (err){
                router.push({path:'login'})
            }
        }

    }

    return (
        <div className='permission'>
            {/*如果有权限*/}
            <Template show={ state.show }>
                <Layout />
            </Template>

            {/*如果没有权限*/}
            <Template show={ !state.show }>
                { useRoutes(error_router) }
            </Template>
        </div>
    );
};

export default Permission;