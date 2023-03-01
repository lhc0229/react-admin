import { createHashHistory } from "history"

class Router{
    constructor(navigate,routes= [], role = '') {
        const { location: { pathname } } = createHashHistory()
        this.query = {}
        this.routes = []
        this.role_routes = []
        this.path = pathname
        this.title = ''
        this.matched = []
        this.generator(routes,this.path,role)
        this.navigate = navigate
    }

    push({ path, query }){
        let target_path = path
        const target_query = query || {}
        const query_list = Object.keys(target_query)
        const length = query_list.length
        if(length){
            target_path = `${target_path}?`
            const list = []
            query_list.forEach(item=>{
                list.push(`${item}=${encodeURIComponent(target_query[item])}`)
            })
            target_path = target_path + list.join('&')
            this.navigate(target_path)
            return
        }
        this.navigate(target_path)
    }

    getQueryParams(){
        const href = window.location.href
        const index = href.indexOf('?')
        const bool = index === -1
        if(bool) return {}
        const temp_href = href.slice(index + 1)
        const query = {}
        const query_list = temp_href.split('&')
        query_list.forEach(item=>{
            const key_maps = item.split('=')
            const key = key_maps[0]
            const value = key_maps[1]
            query[key] = decodeURIComponent(value)
        })
        this.query = query
    }

    generator(routes,path,role){
        this.generatorRoutes(routes,'')
        this.generatorTitle(path)
        this.generatorMatched(path)
        this.role_routes = this.generatorRoleRoutes(routes,role)
        this.getQueryParams()
    }

    generatorRoutes(routes,basic_path){
        routes.forEach(item=>{
            const path = item.path
            const children = item.children || []
            const length = children.length
            const temp_path = path ? `${basic_path}/${path}` : basic_path
            if(length){
                this.generatorRoutes(children,`${basic_path}/${path}`)
                return
            }
            this.routes.push({ path: temp_path, title: item.meta.title })
        })
    }

    generatorMatched(path){
        this.generatorMatchedParents(this.routes,path)
        const bool = this.matched.length > 0
        if(bool){
            this.matched.push({ path,title: this.title })
        }
    }

    generatorTitle(path){
        let title = '404'
        this.routes.forEach(item=>{
            if(item.path === path){
                title = item.title
            }
        })
        this.title = title
    }

    generatorMatchedParents(list,path){
        const bool = path.split('/').length > 2
        if(!bool || !list.map(item=>item.path).includes(path)) return
        const last_index = path.lastIndexOf('/')
        const temp_path = path.slice(0,last_index)
        list.forEach(item=>{
            if(item.path === temp_path){
                this.matched.unshift(item)
            }
        })
        this.generatorMatchedParents(list,temp_path)
    }

    hasPermission(data,role){
        if(data.meta && data.meta.roles){
            return data.meta.roles.includes(role)
        }
        return true
    }

    generatorRoleRoutes(routes,role){
        const list = []
        if(!role) return list
        routes.forEach(route => {
            if(this.hasPermission(route,role)){
                if(route.children && route.children.length){
                    route.children = this.generatorRoleRoutes(route.children,role)
                }
                list.push(route)
            }
        })
        return list
    }
}

export default Router