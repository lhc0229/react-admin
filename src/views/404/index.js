import React from 'react';
import './style.less'
import SvgIcon from "@/components/SvgIcon";

const url = require('@/assets/404.png')

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <div className="error-page-warp">
                <img src={ url } alt=""/>
                <SvgIcon icon='show-html'></SvgIcon>
            </div>
        </div>
    );
};

export default ErrorPage;