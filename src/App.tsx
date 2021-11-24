import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";

import PageRender from "./PageRender";
import MenuNav from "./components/global/Menu";

import "antd/dist/antd.css";

const App = () => {
	return (
		<Router>
			<Row gutter={[32,0]} style={{maxWidth: "100%"}}>
				<Col span={6} style = {{position: "relative",height:"100vh"}}>
					<MenuNav />
				</Col>
				<Col span={18}>
					<Switch>
						<Route path="/" exact component={PageRender} />
						<Route path="/:page" exact component={PageRender} />
						<Route path="/:page/:slug" exact component={PageRender} />
					</Switch>
				</Col>
			</Row>
		</Router>
	);
};

export default App;
