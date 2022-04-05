import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { getRouterQuery } from 'format-function'
// import { user_unique } from '@/store/modules/user'
import { routes_unique } from '@/store/modules/routes'
// import { setToken, getToken } from '@/utils/token'
// import { getUserInfo } from '@/api/user'
import { back_router, front_router, other_router } from '@/router'
import { generateRoutes } from '@/utils/route'
// import config from '@/config'
import Layout from '@/layout'

const PermissionAuth = () => {
  const dispatch = useDispatch()

  const [is_release, setRelease] = useState(false)

  // const user = useSelector((state) => {
  //     return state['user']
  // })
  //
  // const token = getToken()

  // const getInfo = ()=>{
  //     getUserInfo().then(res=>{
  //         const data = res.data || {}
  //         dispatch({type:user_unique, data:{...data}})
  //         dispatch({type:routes_unique, data:{
  //             back_router:generateRoutes(back_router,'admin'),
  //             front_router:generateRoutes(front_router,'admin'),
  //             other_router:generateRoutes(other_router,'admin')
  //         }})
  //         setRelease(true)
  //     })
  // }

  useEffect(() => {
    dispatch({type: routes_unique, data: {
      back_router: generateRoutes(back_router, 'admin'),
      front_router: generateRoutes(front_router, 'admin'),
      other_router: generateRoutes(other_router, 'admin')
    }})
    setRelease(true)
  }, [])

  // const login = ()=>{
  //     let redirectUrl = window.location.href
  //     const baseUrl = encodeURIComponent(`${redirectUrl}`)
  //     window.location.href = `${config.sso}${baseUrl}`
  // }

  // const updateToken = (token)=>{
  //     setToken(token);
  //     dispatch({type:user_unique, data:{token}});
  //     (user.user_name && user.email) ? setRelease(true) : getInfo()
  // }

  // const beforeEach = ()=>{
  //     if(token){
  //         (user.user_name && user.email) ? setRelease(true) : getInfo()
  //     }else{
  //         const query = getRouterQuery()
  //         query.token ? updateToken(query.token) : login()
  //     }
  // }

  // useEffect(()=>{
  //     beforeEach()
  // },[])

  return <div>
    {
      is_release ? <div>
        <Layout />
      </div> : ''
    }
  </div>
}

export default PermissionAuth
