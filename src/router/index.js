import lazyLoading from '@/utils/lazyLoading'

// 后台路由
export const back_router = [
    {
        path: 'bgd',
        element: lazyLoading(() => import('@/layout/back-layout')),
        children: [
            {
                path: '',
                meta: { title: '首页' },
                element: lazyLoading(() => import('@/views/backstage/dashboard'))
            }
        ]
    }
]

// 前台路由
export const front_router = [

]

// 其他路由
export const other_router = [

]

// 错误路由
export const error_router = [
    {
        path: 'login',
        meta: { title: '登录' },
        element: lazyLoading(() => import('@/views/login/index'))
    },
    {
        path: '*',
        meta: { title: '未知错误' },
        element: lazyLoading(() => import('@/views/404/index'))
    }
]

export const all_router = [ ...back_router,...front_router,...other_router,...error_router ]