import React from "react";

import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined ,EyeTwoTone , EyeInvisibleOutlined} from "@ant-design/icons";

import "antd/dist/antd.css";
import { Link } from "react-router-dom";
const LoginForm = () => {
	const onFinish = (values :object) => {
		console.log("Received values of form: ", values);
	};
	return (
		<Form
			name="normal_login"
			className="login-form"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
            size="large"
		>
			<Form.Item
				name="email"
				rules={[
					{
						required: true,
						message: "Please input your Username!",
					},
				]}
			>
				<Input
					prefix={<MailOutlined className="login__form-input" />}
					placeholder="Username"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: "Please input your Password!",
					},
				]}
			>
				<Input.Password
					prefix={<LockOutlined className="login__form-input" />}
					type="password"
					placeholder="Password"
					iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
				/>
			</Form.Item>
			<Form.Item className="forgot__password" >
				<Link to="/">
					Forgot password?
				</Link>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit" className="login__form-button">
					Log in
				</Button> <br />
				If you don't have account <Link to="/register">Register now!</Link>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
