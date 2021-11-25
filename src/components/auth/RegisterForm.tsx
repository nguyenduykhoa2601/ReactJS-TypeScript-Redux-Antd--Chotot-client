import React, { useEffect, useState } from "react";

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined,MailOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { IUserRegister } from "../../utils/TypeScript";
import { checkPassword } from "../../utils/Valid";
const RegisterForm = () => {
	const [pass1,setPass1] = useState<string>('')
	const [pass2,setPass2] = useState<string>('')
	const [checkMatch, setCheckMatch] = useState<any>('')
	const dispatch = useDispatch()

	//check validate two passwords
	useEffect(()=>{
		if(pass1.length > 0){
			const res = checkPassword(pass1,pass2)
			setCheckMatch(res)
		}
	},[pass1,pass2])

	//call API to register
	const onFinish = (values : IUserRegister) => {
		dispatch(register(values))
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
				name="account"
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
						message: `${checkMatch}`,
					},
				]}
			>
				<Input
					prefix={<LockOutlined className="register__form-input" />}
					type="password"
					placeholder="Password"
					onChange={e => setPass1(e.target.value)}
				/>
			</Form.Item>
			<Form.Item
				name="password2"
				rules={[
					{
						required: true,
						message: `${checkMatch}`,
					},
				]}
			>
				<Input
					prefix={<LockOutlined className="register__form-input" />}
					type="password"
					placeholder="Type your password again"
					onChange={e => setPass2(e.target.value)}
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
