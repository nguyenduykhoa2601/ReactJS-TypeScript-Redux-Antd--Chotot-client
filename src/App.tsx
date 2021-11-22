import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageRender from "./PageRender";

const App = () => {
	return (
		<Router>
			<div className="container">
				<Switch>
					<Route path="/" exact component={PageRender} />
					<Route path="/:page" exact component={PageRender} />
					<Route path="/:page/:slug" exact component={PageRender} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
