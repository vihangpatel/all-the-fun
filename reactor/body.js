import React from "react"
import Header from "./header"
import Footer from "./footer"
import Home from "./pages/home"
import About from "./pages/about"
import Speakers from "./pages/speakers"
import ContactUs from "./pages/contactus"
import Sponsorship from "./pages/sponsorship"

const pageMap = {
	home: Home,
	about: About,
	speakers: Speakers,
	"contact-us": ContactUs,
	sponsorship: Sponsorship,
}

const DefaultPage = () => <h1> Not Found</h1>

const getPage = pageName => {
	const Page = pageMap[pageName] || Home
	return <Page />
}

const Body = ({ pageName }) => (
	<div id="body-wrap">
		{/* <Header /> */}
		{getPage(pageName)}
		<Footer />
	</div>
)

export default Body
