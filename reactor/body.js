import React from "react"
import { Route, BrowserRouter } from "react-router-dom"

import Home from "./pages/home"
import Subscribe from "./pages/subscribe"
import Tickets from "./pages/tickets"
import Footer from "./footer"

const Router = () => (
	<BrowserRouter>
		<div id="body-wrap">
			<Route path="/" component={Home} exact />
			<Route path="/subscribe" component={Subscribe} exact />
			<Route path="/tickets" component={Tickets} exact />
			<Footer />
		</div>
	</BrowserRouter>
)

export default Router
