import React from "react"
import Header from "./header"
import Footer from "./footer"
import Home from "./pages/home"

const pageMap = {
	home: Home,
}

const DefaultPage = () => <h1> Not Found</h1>

const getPage = pageName => {
	const Page = pageMap[pageName] || DefaultPage
	return <Page />
}

const Body = ({ pageName }) => (
	<body className="body-class index_1 home1">
		<div id="body-wrap">
			<Header />
			{getPage(pageName)}
			<Footer />
		</div>
	</body>
)

export default Body
