import React from "react";

import { GoogleLogin, GoogleLoginResponse } from "react-google-login-lite";
import {
	FacebookLogin,
	FacebookLoginAuthResponse,
} from "react-facebook-login-lite";

import {
	GoogleOutlined,
	FacebookFilled,
	MobileOutlined,
} from "@ant-design/icons";

import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { facebookLogin, googleLogin } from "../../redux/actions/authAction";

const SocialLogin = () => {
	const dispatch = useDispatch();
	const onSuccess = (googleUser: GoogleLoginResponse) => {
		const id_token = googleUser.getAuthResponse().id_token;
		console.log(id_token);
		dispatch(googleLogin(id_token));
	};
	const onFBSuccess = (response: FacebookLoginAuthResponse) => {
		const { accessToken, userID } = response.authResponse;
		dispatch(facebookLogin(accessToken, userID));
	};
	return (
		<>
			<GoogleLogin
				client_id="200968915200-c074s1ike8c42jm04atv1c303o7nsjm2.apps.googleusercontent.com"
				cookiepolicy="single_host_origin"
				onSuccess={onSuccess}
			/>
			<FacebookLogin appId="333953021722051" onSuccess={onFBSuccess} />
			<MobileOutlined className="social__icon" />
		</>
	);
};
export default SocialLogin;
