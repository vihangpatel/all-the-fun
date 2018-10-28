import React from "react"

const ContactUs = () => (
	<div>
		<section className="breadcrumbs">
			<div className="overlay" />
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<h2>Contact Us</h2>
						<ul>
							<li>
								<a href="index.html">Home</a>
							</li>
							<li>
								<i className="fa fa-angle-double-right" />
							</li>
							<li>
								<a className="active" href="#">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<div className="contact-wrap">
			<div className="container">
				<div className="row">
					<div className="col-md-4 d-flex align-self-center">
						<div className="address">
							<h4>Our Offices</h4>
							<h3>Contact Info</h3>
							<p className="a-text">
								There are many variations of passages of an Lorem Ipsum available but the at majority
								have alteration.
							</p>
							<div className="media">
								<div className="left align-self-center mr-3">
									<i className="flaticon-pin" />
								</div>
								<div className="media-body">
									<h4>Find Us</h4>
									<p>1010 Avenue, NY 90001, USA</p>
								</div>
							</div>
							<div className="media">
								<div className="left align-self-center mr-3">
									<i className="flaticon-phone-call" />
								</div>
								<div className="media-body">
									<h4>Call Us</h4>
									<p>+00 123 456 789</p>
								</div>
							</div>
							<div className="media">
								<div className="left align-self-center mr-3">
									<i className="flaticon-email" />
								</div>
								<div className="media-body">
									<h4>Mail Us</h4>
									<p>info@domain.com</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-8">
						<div className="contact-form">
							<h2>We Love to Hear From You</h2>
							<p>Please call or email contact form and we will be happy to assist you.</p>
							<form action="contact.html" id="contact_form_submit" method="POST">
								<div className="row">
									<div className="col-md-12">
										<div className="form-group form-element">
											<input
												type="text"
												className="form-control input-field"
												id="name"
												name="name"
												placeholder="Your Name"
											/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group form-element">
											<input
												type="email"
												className="form-control input-field"
												id="email"
												name="email"
												placeholder="Your Email"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="form-group form-element">
											<input
												type="text"
												className="form-control input-field"
												id="subject"
												placeholder="Your Subject"
											/>
										</div>
										<div className="form-group form-element">
											<textarea
												id="message"
												cols="30"
												rows="10"
												className="form-control"
												placeholder="Write Your Message"
											/>
										</div>
									</div>
								</div>
								<div className="contact-frm-btn">
									<button type="submit" className="mr_btn_fill">
										SUBMIT NOW
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default ContactUs
