import React from "react";

import "antd/dist/antd.css";
import "./index.css";
import { Spin, Space } from "antd";

const Loading = () => {
	return (
		<Space size="large">
			<Spin size="large"/>
		</Space>
	);
};
export default Loading;
