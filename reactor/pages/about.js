import React from "react"

const About = () => (
	<div>
		<section className="breadcrumbs">
			<div className="overlay" />
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<h2>About Us</h2>
						<ul>
							<li>
								<a href="index.html">Home</a>
							</li>
							<li>
								<i className="fa fa-angle-double-right" />
							</li>
							<li>
								<a className="active" href="#">
									About Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section className="aboutEventArea">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="heading-title text-center">
							<h2>About The Events</h2>
							<div className="bordershep" />
							<p>
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<div className="a-box">
							<div className="img">
								<img src="assets/images/about/icon1.png" alt="" />
							</div>
							<h4>Who We Are ?</h4>
							<p>
								There are many variations of passages of that a Lorem Ipsum available but the at
								majority have suffered alteration in some dummy.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="a-box">
							<div className="img">
								<img src="assets/images/about/icon2.png" alt="" />
							</div>
							<h4>What We Do ?</h4>
							<p>
								There are many variations of passages of that a Lorem Ipsum available but the at
								majority have suffered alteration in some dummy.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="a-box">
							<div className="img">
								<img src="assets/images/about/icon3.png" alt="" />
							</div>
							<h4>Register Now</h4>
							<p>
								There are many variations of passages of that a Lorem Ipsum available but the at
								majority have suffered alteration in some dummy.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="latest-news-area">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="heading-title text-center">
							<span className="subtitle">Our</span>
							<h2 className="f-weight-700 margin-0">Latest News</h2>
							<div className="bordershep" />
							<p>
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
)

export default About
