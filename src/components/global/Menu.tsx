import React,{useState} from 'react'

import { Menu, Switch, Divider,Layout } from "antd";
import {
	HomeOutlined,
	MessageFilled,
	AppstoreOutlined,
	SettingOutlined,
	FacebookOutlined,
    LoginOutlined,
    LogoutOutlined
} from "@ant-design/icons";

import 'antd/dist/antd.css'
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const  MenuNav = () => {
    const styles = {
        layout:{
            position: 'absolute',
            width: "100%",
            top:0,
            left:0,
            bottom: 0
        } as React.CSSProperties,
        menu:{
            width: "100%",
            height:"100vh",
            paddingTop:30,
            fontSize : "1.8rem",
            marginRight: "20rem"
        },
        menu_item:{
            marginTop: 15,
        }
    }
  
	return (
		<Layout style={styles.layout}>
			<Menu
				style={styles.menu}
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
                mode = {"inline"}
                theme ={"dark"}
			>
				<Menu.Item style={styles.menu_item} key="1" icon={<HomeOutlined />}>
                    <Link to="/">
                        Home Page 
                    </Link>
				
				</Menu.Item>
				<Menu.Item style={styles.menu_item} key="2" icon={<MessageFilled />}>
					News 
				</Menu.Item>
				<SubMenu style={styles.menu_item} key="sub1" icon={<AppstoreOutlined />} title="Login/Register">
					<Menu.Item key="3" icon={<LoginOutlined />}>
                        <Link to="/login">
                            Login
                        </Link>
                    </Menu.Item>
					<Menu.Item key="4" icon={<LogoutOutlined />}>
                        <Link to="/register">
                            Register
                        </Link>
                    </Menu.Item>
				</SubMenu>
                <Menu.Item style={styles.menu_item} key="5" icon={<SettingOutlined />}>
					Post Story
				</Menu.Item>
				<Menu.Item style={styles.menu_item} key="link" icon={<FacebookOutlined />}>
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
}

export default MenuNav

