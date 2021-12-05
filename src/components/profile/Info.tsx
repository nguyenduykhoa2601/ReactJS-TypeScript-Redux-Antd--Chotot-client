import React, { useState } from "react";

import { Col, Form, Input, Row, Upload, Button, UploadProps } from "antd";

import {
	UserOutlined,
	UploadOutlined,
	MobileOutlined,
	EditOutlined,
	GoogleOutlined,
	FacebookFilled,
	MailOutlined,
	EnvironmentOutlined,
	PhoneOutlined
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../utils/TypeScript";
import { updateUser } from "../../redux/actions/userAction";

const Info = () => {
	const { auth } = useSelector((state: RootStore) => state);
	const dispatch = useDispatch();
	const [isEditName, setIsEditName] = useState(false);
	const [name, setName] = useState<any>(auth?.user?.name);
	const [isEditPhone, setIsEditPhone] = useState(false);
	const [isEditAddress, setIsEditAddress] = useState(false);
	const [avatar, setAvatar] = useState<any>(auth?.user?.avatar);
	const [phone, setPhone] = useState<any>(auth?.user?.phone);
	const [address, setAddress] = useState<any>(auth?.user?.address);

	const props: UploadProps = {
		listType: "picture",
		beforeUpload: (file: File) => {
			return new Promise(() => {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = async (e) => {
					setAvatar(reader.result);
					dispatch(updateUser(file, name ,address, phone , auth))
				};
			});
		},
	};

	const onFinish = (values: any) => {
		setName(values.name)
		setAddress(values.address)
		setPhone(values.phone)
		console.log("ADD",address)
		console.log("Name",name)
		dispatch(updateUser(avatar, name ,address, phone , auth))
	};
	return (
		<div className="info">
			<Row>
				<Col span={12}>
					<Form
						initialValues={{
							["name"] : auth.user?.name,
							["email"] : auth.user?.account,
							["address"]: auth.user?.address,
							["phone"] : auth.user?.phone,
						}}
						onFinish={onFinish}
						layout="vertical"
					>
						<Form.Item label="Your Name" name="name">
							<Input
								
								prefix={<UserOutlined />}
								addonAfter={
									<EditOutlined onClick={() => setIsEditName(!isEditName)} />
								}
								disabled={!isEditName}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Item>
						<Form.Item  label="Email" name="email">
							<Input
								prefix={<MailOutlined />}
								
								disabled={true}
							/>
						</Form.Item>
						<Form.Item label="Address" name="address">
							<Input
								prefix={<EnvironmentOutlined />}
				
								addonAfter={
									<EditOutlined
										onClick={() => setIsEditAddress(!isEditAddress)}
									/>
								}
								disabled={!isEditAddress}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</Form.Item>
						<Form.Item label="Phone" name="phone">
							<Input
								prefix={<PhoneOutlined />}
							
								addonAfter={
									<EditOutlined onClick={() => setIsEditPhone(!isEditPhone)} />
								}
								disabled={!isEditPhone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</Form.Item>
						<Form.Item >
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
