import React from "react";
import "antd/dist/antd.css";
import { RootStore } from "../../utils/TypeScript";
import { useSelector } from "react-redux";
import Info from "../../components/profile/Info";

const Profile = () => {
	const { auth } = useSelector((state: RootStore) => state);

	return (
		<>
			{auth && (
				<div className="profile" style={{marginTop : 50}}>
					<Info />
				</div>
			)}
		</>
	);
};

export default Profile;
