import React, { useState } from "react";

import { Col, Form, Input, Row, Upload, Button, UploadProps } from "antd";

import {
	UserOutlined,
	UploadOutlined,
	MobileOutlined,
	EditOutlined,
	GoogleOutlined,
	FacebookFilled,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../utils/TypeScript";

const Info = () => {
	const { auth } = useSelector((state: RootStore) => state);
	const dispatch = useDispatch();
	const [isEditName, setIsEditName] = useState(false);
	const [name, setName] = useState(auth?.user?.name);
	const [isEditPhone, setIsEditPhone] = useState(false);
	const [isEditAddress, setIsEditAddress] = useState(false);
	const [avatar, setAvatar] = useState<any>(auth?.user?.avatar);
	const [phone, setPhone] = useState(auth?.user?.phone);
	const [address, setAddress] = useState(auth?.user?.address);

	const props: UploadProps = {
		listType: "picture",
		beforeUpload: (file: File) => {
			return new Promise(() => {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = async (e) => {
					setAvatar(reader.result);
				};
			});
		},
	};

	const onFinish = (values: any) => {
		console.log(values);
	};
	return (
		<div className="info">
			<Row>
				<Col span={12}>
					<Form onFinish={onFinish} layout="vertical">
						<Form.Item label="Your Name" name="name">
							<Input
								name="name"
								prefix={<UserOutlined />}
								value={name}
								addonAfter={
									<EditOutlined onClick={() => setIsEditName(!isEditName)} />
								}
								disabled={!isEditName}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Item>
						<Form.Item label="Email" name="email">
							<Input
								prefix={<UserOutlined />}
								value={auth.user?.account}
								disabled={true}
							/>
						</Form.Item>
						<Form.Item label="Address" name="address">
							<Input
								prefix={<UserOutlined />}
								value={auth.user?.name}
								addonAfter={
									<EditOutlined
										onClick={() => setIsEditAddress(!isEditAddress)}
									/>
								}
								disabled={!isEditAddress}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Item>
						<Form.Item label="Phone" name="phone">
							<Input
								prefix={<UserOutlined />}
								value={phone}
								addonAfter={
									<EditOutlined onClick={() => setIsEditPhone(!isEditPhone)} />
								}
								disabled={!isEditPhone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								Save Changes
							</Button>
						</Form.Item>
					</Form>
				</Col>
				<Col span={12} className="info__col-2">
					<img src={avatar} alt="" className="info__avatar" />
					<br />
					<Upload {...props}>
						<Button icon={<UploadOutlined />}>Change avatar</Button>
					</Upload>
					<div className="info__social-connected">
						
						<FacebookFilled className="info__social-icon" />
                        <GoogleOutlined className="info__social-icon" />
						<MobileOutlined className="info__social-icon" />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Info;
