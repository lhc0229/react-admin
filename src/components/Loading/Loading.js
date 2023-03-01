import React from 'react'
import { Spin } from 'antd'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

const loadingWrapper = {
    position: 'relative',
    height: '100%'
}
const loadingSpin = {
    position: 'absolute',
    left: '50%',
    top: '45%',
    transform: 'translate(-50%, -45%)'
}
const Loading = (props) => {
    NProgress.start()

    if (!props.error) {
        NProgress.done()
    }

    return (
        <div style={loadingWrapper}>
            <Spin style={loadingSpin} tip='正在加载中...' />
        </div>
    )
}
export default Loading
