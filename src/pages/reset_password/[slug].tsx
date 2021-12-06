import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { IParams } from '../../utils/TypeScript'

import { resetPassword } from '../../redux/actions/userAction'
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";

const ResetPassword = () => {
  const token = useParams<IParams>().slug
  const dispatch = useDispatch()
  const onFinish = (values : any) => {
    dispatch(resetPassword(values.password, values.cf_password, token))
  }

  return (
    <div className="reset__page">
      <h1 className="reset__title">Reset your password</h1>
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
			</Form>  
    </div>
  )
}

export default ResetPassword