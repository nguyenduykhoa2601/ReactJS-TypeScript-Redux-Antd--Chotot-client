import React from 'react'
import { Alert } from 'antd';

interface IToast{
    type: any,
    body: string | string[]
}

const Toast = ({type,body} : IToast) =>{
    return (
        <Alert message={body} type={type} showIcon closable className="toast"/>
    )
}

export default Toast
