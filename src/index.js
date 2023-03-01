import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd'
import { HashRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Permission from "@/permission";

import '@/style/index.less'
import '@/icons/index.js'

// 配置状态管理
import { Provider } from 'react-redux'
import { store } from '@/store/index'

// 汉化时间组件
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <HashRouter>
                <Permission />
            </HashRouter>
        </Provider>
    </ConfigProvider>
);
reportWebVitals();
