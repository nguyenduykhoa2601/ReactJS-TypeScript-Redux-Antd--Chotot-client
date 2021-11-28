import React from 'react'

import "antd/dist/antd.css";
import { Spin, Space } from "antd";

export default function Loading() {
    return (
        <Space size="large" className="loading">
			<Spin size="large"  className="spin" />
		</Space>
    )
}
