import React from 'react'

import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';
import { FacebookLogin, FacebookLoginAuthResponse } from 'react-facebook-login-lite';

import {
	GoogleOutlined,
    FacebookFilled,
    MobileOutlined
} from "@ant-design/icons";


import 'antd/dist/antd.css'

const SocialLogin =()=> {
    return (
        <>
            <GoogleOutlined className="social__icon" />
            <FacebookFilled className="social__icon" />
            <MobileOutlined className="social__icon" />
        </>
    )
}
export default SocialLogin
