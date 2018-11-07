import React from "react"
import Header from "./header"
import Footer from "./footer"
import Home from "./pages/home"

const Body = ({ pageName }) => (
	<div id="body-wrap">
		<Home />
		<Footer />
	</div>
)

export default Body
