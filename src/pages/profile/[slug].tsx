import React from "react";

import {
	Form,
	Input,
	InputNumber,
	Cascader,
	Select,
	Row,
	Col,
	Checkbox,
	Button,
	AutoComplete,
} from "antd";

import "antd/dist/antd.css";
import { IParams, RootStore } from "../../utils/TypeScript";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
const Profile = () => {
    const {slug}:IParams = useParams()
    const {auth} = useSelector((state:RootStore)=>state)

	return (
		<div className="profile">
			<h1> </h1>
		</div>
	);
};

export default Profile;