import React from 'react'
import Footer from './footer'
import Home from './pages/home'
// import Header from './header'

const Body = ({ pageName }) => (
	<div id="body-wrap">
		{/* <Header /> */}
		<Home />
		<Footer />
	</div>
)

export default Body
