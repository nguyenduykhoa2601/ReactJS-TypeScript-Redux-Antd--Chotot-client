import React from "react";

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined,MailOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import { Link } from "react-router-dom";
const RegisterForm = () => {
	const onFinish = (values :object) => {
		console.log("Received values of form: ", values);
	};
	return (
		<Form
			name="normal_register"
			className="register-form"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
            size="large"
		>
			<Form.Item
				name="name"
				rules={[
					{
						required: true,
						message: "Please input your Username!",
					},
				]}
			>
				<Input
					prefix={<UserOutlined className="register__form-input" />}
					placeholder="Name"
				/>
			</Form.Item>
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
					prefix={<MailOutlined  className="register__form-input" />}
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
				<Input
					prefix={<LockOutlined className="register__form-input" />}
					type="password"
					placeholder="Password"
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
				<Input
					prefix={<LockOutlined className="register__form-input" />}
					type="password"
					placeholder="Type your password again"
				/>
			</Form.Item>
			<Form.Item className="forgot__password" >
				<Link to="/">
					Forgot password?
				</Link>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit" className="register__form-button">
					Register
				</Button> <br />
				If you exist have an account <Link to="/login">Login now!</Link>
			</Form.Item>
		</Form>
	);
};

export default RegisterForm;
