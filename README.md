## 运行

```js
//拉取代码
git clone https://github.com/lhc0229/react-admin.git

//安装依赖
npm i

//启动
npm run dev
```



## store

对react的状态管理进行了极简的封装，使你能简单的使用状态管理，免去那些繁琐的代码，提高了代码可读性



在函数组件中使用状态管理

```jsx
import { useSelector, useDispatch } from 'react-redux'
import { user_unique } from "@/store/modules/user";

const Demo = ()=>{
  const dispatch = useDispatch()

  const user_info = useSelector((state) => {
      return state.user
  })
  
  dispatch({type:user_unique,data:{token:'89'}}) //更新状态值
  
  
  console.log(user_info.token) //获取store->modules->user 的token值
  
  return <div>123</div>
}
```



## 代码结构

```
|-- react-admin
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- logo192.png
    |   |-- logo512.png
    |   |-- manifest.json
    |   |-- robots.txt
    |-- src
        |-- index.js
        |-- logo.svg
        |-- permission.js  //	路由守卫
        |-- reportWebVitals.js
        |-- setupTests.js
        |-- api
        |   |-- user.js  //	接口
        |-- assets
        |   |-- 404.png
        |-- components  // 全局组件
        |   |-- Loading
        |   |   |-- Loading.js
        |   |-- SvgIcon	// SVG加载组件
        |   |   |-- index.js
        |   |   |-- style.less
        |   |-- Template
        |       |-- index.js
        |-- components-bus
        |-- env
        |   |-- index.js // 全局环境变量配置
        |-- global-funcition
        |   |-- index.js // 全局函数
        |-- global-map
        |   |-- index.js // 全局映射
        |-- icons
        |   |-- index.js
        |   |-- svg  // svg静态资源文件夹
        |       |-- show-html.svg
        |-- layout
        |   |-- index.js 
        |   |-- back-layout // 后台布局页面
        |       |-- index.js
        |       |-- style.less
        |       |-- breadcrumb // 面包屑
        |       |   |-- index.js
        |       |   |-- style.less
        |       |-- sidebar // 侧边导航栏
        |           |-- index.js
        |           |-- style.less
        |-- router
        |   |-- index.js // 全局路由
        |-- store // 状态管理
        |   |-- index.js
        |   |-- modules
        |       |-- app.js
        |       |-- user.js
        |-- style
        |   |-- global.less // 全局样式
        |   |-- icon.less // 需要对导入每个svg设置宽高
        |   |-- index.less
        |   |-- custom-component // 对antd组件进行全局样式重置的组件
        |       |-- button.less
        |-- tool-library //第三方的引用
        |   |-- router
        |       |-- index.js //封装了一个类似vue路由使用
        |-- utils
        |   |-- lazyLoading.js // 组件懒加载实现
        |   |-- request.js // 全局axios请求封装
        |   |-- token.js // token设置
        |-- views
            |-- 404
            |   |-- index.js
            |   |-- style.less
            |-- backstage // 后台页面文件夹
            |   |-- dashboard
            |       |-- index.js
            |       |-- style.less
            |-- front // 前台页面文件夹
            |-- login 
                |-- index.js
       |-- .env.development
       |-- .env.production
       |-- .gitignore
       |-- README.md
       |-- config-overrides.js // 	webpack配置
       |-- package-lock.json
       |-- package.json
```



## 待解决的问题



### svg图片宽高丢失

```html
使用svg-sprite-loade处理svg时，导致svg的原有的宽高丢失，这个暂时没有解决，只能是对每一个svg单独的设置宽高，目前还没有确定是什么问题，请期待后续更新
```



### 语法检测

```
目前还没有配置eslint，后续将会更新配置eslint
```



CLI

```
后续有计划实现一个cli,一键拉取项目
```

