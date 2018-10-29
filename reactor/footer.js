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
							<form action="#" className="subscribe">
								<input type="email" className="email" placeholder="Enter your email" />
								<input type="submit" className="s-btn" value="SUBSCRIBE" />
							</form>
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
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="footer-pages">
							
						
						</div>
					</div>
					<div className="col-lg-2 col-sm-5">
						
					</div>
					<div className="col-lg-4 col-sm-5">
						<div className="footer-contact-info">
							<h3>Contact info</h3>
							<ul>
								<li>
									<a href="#">
										<i className="flaticon-location-pointer" />
										30/3, Acsona Waddo, Uttorda Beach, Salcette, Goa 403713, India
									</a>
								</li>
								<li>
									<a href="#">
										<i className="flaticon-mail-black-envelope-symbol" />
										react-india@geekabyte.tech
									</a>
								</li>
								<li>
									<a href="#">
										<i className="flaticon-phone-receiver" />
										+918655559725,&nbsp; 
										+491625272364
									</a>
								</li>
							</ul>
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
								<span> React India 2019</span>
							</a>
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
