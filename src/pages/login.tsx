import React from "react";
import { UserOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import LoginForm from "../components/auth/LoginForm";
import SocialLogin from "../components/auth/SocialLogin";
import { useSelector } from "react-redux";
import { RootStore } from "../utils/TypeScript";
import Home from ".";

const Login = () => {
	return (
		<div className="login">
			<div>
				{" "}
				<UserOutlined className="login__logo" />
			</div>
			<div className="login__title">--------- Sign in ---------</div>
            <div className="login__form">
                <LoginForm />
            </div>
			<div>
				<SocialLogin />
			</div>
            
		</div>
	);
};

export default Login;
