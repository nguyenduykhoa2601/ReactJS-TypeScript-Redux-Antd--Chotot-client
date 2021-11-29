import React, { ReactNode, useState } from "react";

import { Menu, Switch, Divider, Layout } from "antd";
import {
	HomeOutlined,
	MessageFilled,
	AppstoreOutlined,
	SettingOutlined,
	FacebookOutlined,
	LoginOutlined,
	LogoutOutlined,
	FileProtectOutlined,
	AmazonOutlined
} from "@ant-design/icons";

import "antd/dist/antd.css";
import { Link,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../utils/TypeScript";
import { logout } from "../../redux/actions/authAction";

const { SubMenu } = Menu;

const MenuNav = () => {
	const { auth } = useSelector((state: RootStore) => state);
	const location = useLocation()
	return (
		<Layout style={styles.layout}>
			<Menu
				style={styles.menu}
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
				mode={"inline"}
				theme={"dark"}
				selectedKeys={[`${location.pathname}`,]}
			>
				{/* <div key="0" className="menu__title" style={styles.menu__title}> Wellcome to HCMC ThanhLi</div> */}
				<Menu.Item style={styles.menu_item} key="/" icon={<HomeOutlined />}>
					<Link to="/">Home Page</Link>
				</Menu.Item>
				<Menu.Item style={styles.menu_item} key="/news" icon={<MessageFilled />}>
					News
				</Menu.Item>

				{ !auth.user ? (
					<>
						<SubMenu
							style={styles.menu_item}
							key="sub1"
							icon={<AppstoreOutlined />}
							title="Login/Register"
						>
							<Menu.Item key="/login" icon={<LoginOutlined />}>
								<Link to="/login">Login</Link>
							</Menu.Item>
							<Menu.Item key="/register" icon={<LogoutOutlined />}>
								<Link to="/register">Register</Link>
							</Menu.Item>
						</SubMenu>
					</>
				) : (
					<>
						<SubMenu
							style={styles.menu_item}
							key="sub1"
							icon={<AppstoreOutlined />}
							title="Profile"
						>
							<Menu.Item key="/profile" icon={<FileProtectOutlined />}>
								<Link to={`/profile/id=${auth.user._id}`}> Profile </Link>
							</Menu.Item>
							<Menu.Item key="/password" icon={<SettingOutlined />}>
								<Link to="/profile"> Change password </Link>
							</Menu.Item>
						</SubMenu>
					</>
				)}

				<Menu.Item style={styles.menu_item} key="/story" icon={<AmazonOutlined />}>
					Post Story
				</Menu.Item>
				<Menu.Item
					style={styles.menu_item}
					key="link"
					icon={<FacebookOutlined />}
				>
					<a
						href="https://www.facebook.com/profile.php?id=100019330931407"
						target="_blank"
						rel="noopener noreferrer"
					>
						Contact
					</a>
				</Menu.Item>
			</Menu>
		</Layout>
	);
};

const styles = {
	layout: {
		position: "absolute",
		width: "100%",
		top: 0,
		left: 0,
		bottom: 0,
	} as React.CSSProperties,
	menu__title: {
		fontSize: "2rem",
		paddingLeft: 30,
		paddingBottom: 30,
		fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
	},
	menu: {
		width: "100%",
		height: "100%",
		paddingTop: 30,
		fontSize: "1.8rem",
		marginRight: "20rem",
		paddingLeft: 20,
	},
	menu_item: {
		marginTop: 15,
	},
};

export default MenuNav;
