import React, { useState } from "react";
import { Form, Input, Button, Upload, Select, Row, Col } from "antd";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";

const CreateItem = () => {
	const [imageUrl, setImageUrl] = useState("");
	const [loading, setLoading] = useState(false);

	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

    const onFinish = (values : any)=>{
        console.log(values)
    }
	return (
		<div className="create__item">
			<div className="create__item-title">Create Story</div>
			<Form className="create__item-form" layout="vertical" onFinish={onFinish}>
				<Row gutter={[48,12]}> 
					<Col span="12" >
						<Upload
							name="avatar"
							listType="picture-card"
							className="create__item-uploader"
							showUploadList={false}
							action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
							// beforeUpload={beforeUpload}
							// onChange={handleChange}
						>
							{imageUrl ? (
								<img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
							) : (
								uploadButton
							)}
						</Upload>
					</Col>
					<Col span="12">
						<Form.Item
                            label="Title"
							name="title"
							rules={[
								{
									required: true,
									message: "Please input your Title",
								},
							]}
						>
							<Input placeholder="title" />
						</Form.Item>
						<Form.Item
							name="content"
                            label="Content"
							rules={[
								{
									required: true,
									message: "Please input your Content",
								},
							]}
						>
							<Input.TextArea placeholder="content" />
						</Form.Item>
						<Form.Item
                            label="Description"
							name="description"
							rules={[
								{
									required: true,
									message: "Please input your Description",
								},
							]}
						>
							<Input.TextArea placeholder="Description" />
						</Form.Item>
						<Form.Item
                            label="Price"
							name="price"
							rules={[
								{
									required: true,
									message: "Please input your price",
								},
							]}
						>
							<Input placeholder="0" type="number" />
						</Form.Item>
						<Form.Item
							name="category"
							rules={[
								{
									required: true,
									message: "Please select your category",
								},
							]}
						>
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="Search to Select"
								optionFilterProp="children"
								filterOption={(input: any, option: any) =>
									option.children.toLowerCase().indexOf(input.toLowerCase()) >=
									0
								}
								filterSort={(optionA, optionB) =>
									optionA.children
										.toLowerCase()
										.localeCompare(optionB.children.toLowerCase())
								}
							>
								<Select.Option value="1">Not Identified</Select.Option>
								<Select.Option value="2">Closed</Select.Option>
								<Select.Option value="3">Communicated</Select.Option>
								<Select.Option value="4">Identified</Select.Option>
								<Select.Option value="5">Resolved</Select.Option>
								<Select.Option value="6">Cancelled</Select.Option>
							</Select>
						</Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit"> Create Post</Button>
                        </Form.Item>
					</Col>
				</Row>
			</Form>
		</div>
	);
};

export default CreateItem;
