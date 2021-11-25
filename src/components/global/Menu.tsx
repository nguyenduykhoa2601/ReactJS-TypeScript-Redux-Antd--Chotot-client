import React, { useState } from "react";

import { Menu, Switch, Divider, Layout } from "antd";
import {
	HomeOutlined,
	MessageFilled,
	AppstoreOutlined,
	SettingOutlined,
	FacebookOutlined,
	LoginOutlined,
	LogoutOutlined,
} from "@ant-design/icons";

import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../utils/TypeScript";
import { logout } from "../../redux/actions/authAction";

const { SubMenu } = Menu;

const MenuNav = () => {
	const { auth } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch()
    const handleLogout = ()=>{
        if(!auth.access_token) return
        dispatch(logout(auth?.access_token))
    }
	return (
		<Layout style={styles.layout}>
			<Menu
				style={styles.menu}
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
				mode={"inline"}
				theme={"dark"}
			>
				{/* <div key="0" className="menu__title" style={styles.menu__title}> Wellcome to HCMC ThanhLi</div> */}
				<Menu.Item style={styles.menu_item} key="1" icon={<HomeOutlined />}>
					<Link to="/">Home Page</Link>
				</Menu.Item>
				<Menu.Item style={styles.menu_item} key="2" icon={<MessageFilled />}>
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
							<Menu.Item key="3" icon={<LoginOutlined />}>
								<Link to="/login">Login</Link>
							</Menu.Item>
							<Menu.Item key="4" icon={<LogoutOutlined />}>
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
							<Menu.Item key="3" icon={<LoginOutlined />}>
								<Link to="/login"> Profile </Link>
							</Menu.Item>
							<Menu.Item onClick={handleLogout} key="4" icon={<LogoutOutlined />}>
								<span >Logout</span>
							</Menu.Item>
						</SubMenu>
					</>
				)}

				<Menu.Item style={styles.menu_item} key="5" icon={<SettingOutlined />}>
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
