import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../utils/TypeScript";

import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import { resetPassword } from "../../redux/actions/userAction";

const ChangePasswordForm = () => {
    const dispatch = useDispatch()
	const { auth } = useSelector((state: RootStore) => state);

	const onFinish = (values: any) => {
        dispatch(resetPassword(values.password, values.cf_password, auth.access_token))
	};
	return (
		<div className="changePass">
			<div className="changePass__title">Change Password</div>
            {
                auth.user?.type === 'register' ? 
                <Form className="changePass__form" layout="vertical" onFinish={onFinish}>
				<Form.Item name="password" label="New password">
					<Input.Password placeholder="Type your new password" />
				</Form.Item>
				<Form.Item name="cf_password" label="Type password again">
					<Input.Password placeholder="Type your new password again" />
				</Form.Item>
				<Form.Item>
					<Button htmlType="submit" type="primary">Submit</Button>
				</Form.Item>
			</Form> :
            <div className="changePass__notify">Fast Login can not use this page!</div>
            }
			
		</div>
	);
};

export default ChangePasswordForm;
