import React from "react"

const Header = () => (
	<header id="mainHeader" className="header">
		<nav className="navbar navbar-expand-lg navbar-light p-0">
			<div className="container">
				<a className="navbar-brand" href="index.html">
					<img className="logo-dark" src="assets/images/logo_dark.png" alt="" />
					<img className="logo-light" height="100px" width="80px" src="assets/images/logo.png" alt="" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown2"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Home
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown2">
								<a className="dropdown-item" href="index.html">
									Home One
								</a>
								<a className="dropdown-item" href="index2.html">
									Home Two
								</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="aboutUs.html">
								About Us
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="eventSudle.html">
								Events
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="speakers.html">
								Speaker
							</a>
						</li>
						<li className="nav-item dropdown active">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Pages
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="becomesponsors.html">
									Become a Sponsor
								</a>
								<a className="dropdown-item" href="blogdetails.html">
									Blog Details
								</a>
								<a className="dropdown-item" href="blog-grid.html">
									Blog Grid
								</a>
								<a className="dropdown-item active" href="eventSingle.html">
									Event Single
								</a>
								<a className="dropdown-item" href="gallery.html">
									Gallery
								</a>
								<a className="dropdown-item" href="pricingTable.html">
									Pricing
								</a>
								<a className="dropdown-item" href="speakerprofile.html">
									Speaker Profile
								</a>
								<a className="dropdown-item" href="sponsors.html">
									Sponsors
								</a>
								<a className="dropdown-item" href="threecolumportfolio.html">
									3-col Portfolio
								</a>
								<a className="dropdown-item" href="twocolumportfolio.html">
									2-col Portfolio
								</a>
								<a className="dropdown-item" href="faq.html">
									FAQ
								</a>
								<a className="dropdown-item" href="404.html">
									404
								</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="blogpage.html">
								blog
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="contact.html">
								Contact Us
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" data-toggle="modal" data-target=".bd-example-modal-sm">
								<i className="fa fa-search" />
							</a>
							<div
								className="modal fade bd-example-modal-sm"
								tabIndex="-1"
								role="dialog"
								aria-hidden="true"
							>
								<div className="modal-dialog modal-sm">
									<div className="modal-content">
										<form method="POST">
											<input type="text" className="mr-search" placeholder="Search" />
											<button type="submit" className="submit">
												<i className="fa fa-search" />
											</button>
										</form>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<a href="pricingTable.html" className="mr_btn_fill">
						Buy Tickets
					</a>
				</div>
			</div>
		</nav>

		<div className="clearfix" />
	</header>
)

export default Header
