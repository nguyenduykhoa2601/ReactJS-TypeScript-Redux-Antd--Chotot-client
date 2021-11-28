import React, { useState } from "react";
import { Input, Row, Col, Menu, Dropdown, Button } from "antd";

import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../utils/TypeScript";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authAction";

const { Search } = Input;

const Home = () => {
	const { auth } = useSelector((state: RootStore) => state);
	const onSearch = (value: string) => console.log(value);
	const dispatch = useDispatch()
	const handleLogout= ()=>{
		if(!auth.access_token) return
		dispatch(logout(auth.access_token))
	}

	const menu = (
		<Menu>
			<Menu.Item >
				<Link to="/profile" className="home__user">Profile</Link>
			</Menu.Item>
			<Menu.Item onClick={handleLogout}>
				<span className="home__user">Logout</span>
			</Menu.Item>
		</Menu>
	);
	return (
		<div className="home">
			<Row className="home__row">
				<Col span={20} className="home__col">
					<Search
						placeholder="input search text"
						onSearch={onSearch}
						enterButton
						size="large"
						className="home__search"
					/>
				</Col>
				<Col span={4} className="home__col">
					{auth.user ? (
						<>
							<img className="avatar_img" alt="" src={auth.user.avatar} />
							<Dropdown overlay={menu}>
								<span className="home__username">{auth.user.name}</span>
							</Dropdown>
						</>
					) : (
						<UserOutlined />
					)}
				</Col>
			</Row>
		</div>
	);
};

export default Home;
