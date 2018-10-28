import React from "react"

const Footer = () => (
	<footer className="footer">
		<div className="footer-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="footer-about">
							<img
								width="100px"
								height="100px"
								className="f-logo img-fluid"
								src="assets/images/logo.png"
								alt="Image"
							/>
							<p>
								There are many variations of dummy that passages of Lorem Ipsum available but the
								majority have suffered.
							</p>
							<h3 className="title">Follow Us</h3>
							<ul>
								<li>
									<a href="#">
										<i className="fa fa-facebook" />
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-twitter" />
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-google-plus" />
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-linkedin" />
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-skype" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="footer-pages">
							<h3>Usefull Links</h3>
							<div className="row">
								<div className="col-sm-12">
									<ul>
										<li>
											<a href="#">
												<i className="fa fa-chevron-right" /> Engaging, Purposeful
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fa fa-chevron-right" /> Extroadinary Life events.
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fa fa-chevron-right" /> Design your perfect event.
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fa fa-chevron-right" /> Connect your worlds.
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fa fa-chevron-right" /> Workplace productivity
											</a>
										</li>
										<li>
											<a href="contact.html">
												<i className="fa fa-chevron-right" /> Contact Us
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="footer-insta">
							<h3>Instagram</h3>
							<div className="insta-img-area">
								<div className="insta-item">
									<a href="#">
										<img className="img-fluid" src="assets/images/footer/insta1.jpg" alt="" />
									</a>
								</div>
								<div className="insta-item">
									<a href="#">
										<img className="img-fluid" src="assets/images/footer/insta2.jpg" alt="" />
									</a>
								</div>
								<div className="insta-item">
									<a href="#">
										<img className="img-fluid" src="assets/images/footer/insta3.jpg" alt="" />
									</a>
								</div>
								<div className="insta-item">
									<a href="#">
										<img className="img-fluid" src="assets/images/footer/insta4.jpg" alt="" />
									</a>
								</div>
								<div className="insta-item">
									<a href="#">
										<img className="img-fluid" src="assets/images/footer/insta5.jpg" alt="" />
									</a>
								</div>
								<div className="insta-item">
									<a href="#">
										<img className="img-fluid" src="assets/images/footer/insta6.jpg" alt="" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="footer-contact-info">
							<h3>Contact info</h3>
							<ul>
								<li>
									<a href="#">
										<i className="flaticon-location-pointer" />
										1102 Saint Marys, Jackson Blvd, Chicago United St ate
									</a>
								</li>
								<li>
									<a href="#">
										<i className="flaticon-mail-black-envelope-symbol" />
										example@email.com
									</a>
								</li>
								<li>
									<a href="#">
										<i className="flaticon-phone-receiver" />
										(+123) 456 789 1002
									</a>
								</li>
							</ul>
							<form action="#" className="subscribe">
								<input type="email" className="email" placeholder="Enter your email" />
								<input type="submit" className="s-btn" value="SUBSCRIBE" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="footer-bottom">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="copyright-text">
							<p className="color-white">Copyright &copy; 2018 All Rights Reserved, Powered by </p>
							<a href="index.html">
								<span> Ven</span>
								ToT
							</a>
						</div>
					</div>
					<div className="col-md-6">
						<div className="copyright-links">
							<ul>
								<li>
									<a href="index.html">Home</a>
								</li>
								<li>
									<a href="#">Privacy Policy</a>
								</li>
								<li>
									<a href="contact.html">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="totop">
			<a href="#top">
				<i className="fa fa-arrow-up" />
			</a>
		</div>
	</footer>
)

export default Footer
