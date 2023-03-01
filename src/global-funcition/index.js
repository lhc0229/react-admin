export const hasPermission = (role, route) => {
    if (route.meta && route.meta['roles']) {
        return route.meta['roles'].includes(role)
    } else {
        return true
    }
}

export const generatorRoleRoutes = (routes, role) => {
    const res = []
    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(role, tmp)) {
            if (tmp.children) {
                tmp.children = generatorRoleRoutes(tmp.children, role)
            }
            res.push(tmp)
        }
    })
    return res
}

export const setLocationHref = (path, query = {}) => {
    const query_list = []
    Object.keys(query).forEach(item=>{
        query_list.push(`${item}=${encodeURIComponent(query[item] || '')}`)
    })
    const length = query_list.length
    window.location.href = length ? `/#${path}?${query_list.join('&')}` : `/#${path}`
}