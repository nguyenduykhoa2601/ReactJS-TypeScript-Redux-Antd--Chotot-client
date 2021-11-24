import React from "react";
import { CodeSandboxOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import LoginForm from "../components/auth/LoginForm";
import SocialLogin from "../components/auth/SocialLogin";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
	return (
		<div className="register">
			<div>
				{" "}
				<CodeSandboxOutlined  className="register__logo" />
			</div>
			<div className="login__title">--------- Register now! ---------</div>
            <div className="login__form">
                <RegisterForm />
            </div>            
		</div>
	);
};

export default Register;
