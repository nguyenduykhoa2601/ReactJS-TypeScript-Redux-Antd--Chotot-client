import React, { useState } from "react";
import { Input, Row, Col } from "antd";

import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import { RootStore } from "../utils/TypeScript";
import { UserOutlined } from "@ant-design/icons";

const { Search } = Input;

const Home = () => {
	const { auth } = useSelector((state: RootStore) => state);
	const onSearch = (value: string) => console.log(value);
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
					{auth.user ? 
                    <>
                     <img className="avatar_img" alt="" src={auth.user.avatar} />
                     <span className="home__username">{auth.user.name}</span>
                    </>
                    : <UserOutlined />}
				</Col>
			</Row>
		</div>
	);
};

export default Home;
