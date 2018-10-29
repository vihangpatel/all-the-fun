import React, { Fragment } from 'react'

const Home = () => (
	<Fragment>
		<div className="video-wrapper">
			<section className="slider-area">
				<div className="overlay" />
				<div className="silder owl-carousel owl-loaded owl-drag">
					<div className="owl-stage-outer">
						<div
							className="owl-stage"
							style={{
								transform: 'translate3d(-3038px, 0px, 0px)',
								transition: 'all 0s ease 0s',
								width: 7595,
							}}
						>
							<div className="owl-item cloned" style={{ width: 1519 }}>
								<div className="slide-item">
									<div className="slide-caption">
										<div className="slider-inner">
											<h3 className="caption-desc">REACT INDIA 2019 </h3>
											<h2 className="caption-title">FIRST INTERNATIONAL CONFERENCE</h2>
											<div className="slide-btn">
												<a className="animated fadeInUpBig" href="#">
													Buy tickets
												</a>
												<a className="animated fadeInUpBig" href="#">
													Sponshorship
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={{ width: 1519 }}>
								<div className="slide-item">
									<div className="slide-caption">
										<div className="slider-inner">
											<h3 className="caption-desc">REACT INDIA 2019 </h3>
											<h2 className="caption-title">FIRST INTERNATIONAL CONFERENCE</h2>
											<div className="slide-btn">
												<a className="animated fadeInUpBig" href="#">
													Buy tickets
												</a>
												<a className="animated fadeInUpBig" href="#">
													Sponshorship
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item active" style={{ width: 1519 }}>
								<div className="slide-item">
									<div className="slide-caption">
										<div className="slider-inner">
											<h3 className="caption-desc">REACT INDIA 2019 </h3>
											<h2 className="caption-title">FIRST INTERNATIONAL CONFERENCE</h2>
											<div className="slide-btn">
												<a className="animated fadeInUpBig" href="#">
													Buy tickets
												</a>
												<a className="animated fadeInUpBig" href="#">
													Sponshorship
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={{ width: 1519 }}>
								<div className="slide-item">
									<div className="slide-caption">
										<div className="slider-inner">
											<h3 className="caption-desc">REACT INDIA 2019 </h3>
											<h2 className="caption-title">FIRST INTERNATIONAL CONFERENCE</h2>
											<div className="slide-btn">
												<a className="animated fadeInUpBig" href="#">
													Buy tickets
												</a>
												<a className="animated fadeInUpBig" href="#">
													Sponshorship
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={{ width: 1519 }}>
								<div className="slide-item">
									<div className="slide-caption">
										<div className="slider-inner">
											<h3 className="caption-desc">REACT INDIA 2019 </h3>
											<h2 className="caption-title">FIRST INTERNATIONAL CONFERENCE</h2>
											<div className="slide-btn">
												<a className="animated fadeInUpBig" href="#">
													Buy tickets
												</a>
												<a className="animated fadeInUpBig" href="#">
													Sponshorship
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="owl-nav disabled">
						<div className="owl-prev">
							<i className="fa fa-chevron-left" />
						</div>
						<div className="owl-next">
							<i className="fa fa-chevron-right" />
						</div>
					</div>
					<div className="owl-dots disabled" />
				</div>
			</section>
			<video autoPlay loop muted className="video-banner">
				<source src="assets/video/video_2.mp4" type="video/mp4" />
				Please use a video supported browser
			</video>
		</div>
		{/*End Slider Area*/}
		{/*Start About Area*/}
		<div className="about-area">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						{/*Start Heading Title*/}
						<div className="heading-title">
							<span className="subtitle">Greetings &amp; Welcome</span>
							<h2 className="f-weight-700 margin-0">About the Conference</h2>
							<div className="bordershep" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 order-last order-md-first">
						<div className="about-text">
							<p className="first-text">
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
							<p>
								There are many variations of passages of Lorem Ipsum available, but the majority have
								suffered alteration in some form, by injected humour or at randomised words which don't
								look even slightly believable. If you are an going to use a passage of Lorem Ipsum, you
								need to be sure there isn't anything embarrassing hidden in the middle of text.
							</p>
							<div className="buttons">
								<a className="mr_btn_fill" href="pricingTable.html">
									Buy Tickets
								</a>
								<a className="mr_btn_o" href="#">
									Read More
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6 order-first order-md-last d-flex align-self-center">
						<div className="aboutusvideo">
							<div className="img">
								<img className="img-fluid" src="assets/images/aboutimg-2.jpg" alt="" />
								<a
									className="venobox vbox-item"
									data-vbtype="video"
									data-autoplay="true"
									href="https://www.youtube.com/watch?v=ct-mHwAb3g4"
								>
									<i className="fa fa-play" style={{ transform: 'translate(14%, 93%)' }} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*End About Area*/}
		<section className="conferences">
			<div className="overlay" />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						{/*Start Heading Title*/}
						<div className="heading-title text-center">
							<span className="subtitle">Be a Part of</span>
							<h2>EventConferences 2018</h2>
							<div className="bordershep" />
							<p>
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
						</div>
						{/*End Heading Title*/}
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="text-center">
							<p className="date">17-21 AUAUST | NEW YORK | 2017 EDITION</p>
							{/*<div class="timer" id="countdown"></div>*/}
						</div>
					</div>
				</div>
			</div>
		</section>
		{/*Start Company Info Area*/}
		<section className="schedule_area">
			{/*Start Container*/}
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						{/*Start Heading Title*/}
						<div className="heading-title text-center">
							<span className="subtitle">Be a Part of</span>
							<h2 className="f-weight-700 margin-0">Conference Schedule</h2>
							<div className="bordershep" />
							<p>
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
						</div>
						{/*End Heading Title*/}
					</div>
				</div>
				{/*Start Row*/}
				<div className="row">
					<div className="col-md-6">
						<div className="my_schedule_card">
							<div className="mr_card_header header1">
								<h3>Day 1 July 23, 2018</h3>
							</div>
							<div className="people_media">
								<div className="media">
									<img
										className="img-fluid align-self-center mr-2"
										src="assets/images/suhedule/p5.png"
										alt=""
									/>
									<div className="media-body d-flex justify-content-between align-self-center">
										<div className="left d-flex align-self-center">
											<div className="info">
												<h4>Building Gov as a Service</h4>
												<p>
													By{' '}
													<a href="speakerprofile.html">
														<span> Piera Mcclure </span>
													</a>{' '}
													Director Slack
												</p>
											</div>
										</div>
										<div className="right d-flex align-self-center">
											<p className="time">08:00-09:00</p>
										</div>
									</div>
								</div>
							</div>
							<div className="hr" />
							<div className="people_media">
								<div className="media">
									<img
										className="img-fluid align-self-center mr-2"
										src="assets/images/suhedule/p6.png"
										alt=""
									/>
									<div className="media-body d-flex justify-content-between align-self-center">
										<div className="left d-flex align-self-center">
											<div className="info">
												<h4>Grand Opening</h4>
												<p>
													By{' '}
													<a href="speakerprofile.html">
														<span> Kevin Chase </span>
													</a>{' '}
													Chairman Tesla
												</p>
											</div>
										</div>
										<div className="right d-flex align-self-center">
											<p className="time">08:00-09:00</p>
										</div>
									</div>
								</div>
							</div>
							<div className="hr" />
							<div className="people_media">
								<div className="media">
									<img
										className="img-fluid align-self-center mr-2"
										src="assets/images/suhedule/p4.png"
										alt=""
									/>
									<div className="media-body d-flex justify-content-between align-self-center">
										<div className="left d-flex align-self-center">
											<div className="info">
												<h4>Building Gov as a Service</h4>
												<p>
													By{' '}
													<a href="speakerprofile.html">
														<span> Piera Mcclure </span>
													</a>{' '}
													Director Slack
												</p>
											</div>
										</div>
										<div className="right d-flex align-self-center">
											<p className="time">08:00-09:00</p>
										</div>
									</div>
								</div>
							</div>
							<div className="hr" />
							<div className="people_media">
								<div className="media">
									<img
										className="img-fluid align-self-center mr-2"
										src="assets/images/suhedule/p3.png"
										alt=""
									/>
									<div className="media-body d-flex justify-content-between align-self-center">
										<div className="left d-flex align-self-center">
											<div className="info">
												<h4>Grand Opening</h4>
												<p>
													By{' '}
													<a href="speakerprofile.html">
														<span> Kevin Chase </span>
													</a>{' '}
													Chairman Tesla
												</p>
											</div>
										</div>
										<div className="right d-flex align-self-center">
											<p className="time">08:00-09:00</p>
										</div>
									</div>
								</div>
							</div>
							<div className="hr" />
							<div className="people_media">
								<div className="media">
									<img
										className="img-fluid align-self-center mr-2"
										src="assets/images/suhedule/p1.png"
										alt=""
									/>
									<div className="media-body d-flex justify-content-between align-self-center">
										<div className="left d-flex align-self-center">
											<div className="info">
												<h4>Building Gov as a Service</h4>
												<p>
													By{' '}
													<a href="speakerprofile.html">
														<span> Piera Mcclure </span>
													</a>{' '}
													Director Slack
												</p>
											</div>
										</div>
										<div className="right d-flex align-self-center">
											<p className="time">08:00-09:00</p>
										</div>
									</div>
								</div>
							</div>
							<div className="hr" />
							<div className="people_media">
								<div className="media">
									<img
										className="img-fluid align-self-center mr-2"
										src="assets/images/suhedule/p2.png"
										alt=""
									/>
									<div className="media-body d-flex justify-content-between align-self-center">
										<div className="left d-flex align-self-center">
											<div className="info">
												<h4>Grand Opening</h4>
												<p>
													By{' '}
													<a href="speakerprofile.html">
														<span> Kevin Chase </span>
													</a>{' '}
													Chairman Tesla
												</p>
											</div>
										</div>
										<div className="right d-flex align-self-center">
											<p className="time">08:00-09:00</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="my_schedule_card">
							<div className="mr_card_header header2">
								<h3>Day 2 July 24, 2018</h3>
							</div>
							<div className="people_media">
								<div className="media">
									<img
										className="img-fluid align-self-center mr-2"
										src="assets/images/suhedule/p1.png"
										alt=""
									/>
									<div className="media-body d-flex justify-content-between align-self-center">
										<div className="left d-flex align-self-center">
											<div className="info">
												<h4>Grand Opening</h4>
												<p>
													By{' '}
													<a href="speakerprofile.html">
														<span> Kevin Chase </span>
													</a>{' '}
													Chairman Tesla
												</p>
											</div>
										</div>
										<div className="right d-flex align-self-center">
											<p className="time">08:00-09:00</p>
										</div>
									</div>
								</div>
							</div>
							<div className="hr" />
							<div className="people_media">
								<div className="media">
									<img
										className="img-fluid align-self-center mr-2"
										src="assets/images/suhedule/p2.png"
										alt=""
									/>
									<div className="media-body d-flex justify-content-between align-self-center">
										<div className="left d-flex align-self-center">
											<div className="info">
												<h4>Building Gov as a Service</h4>
												<p>
													By{' '}
													<a href="speakerprofile.html">
														<span> Piera Mcclure </span>
													</a>{' '}
													Director Slack
												</p>
											</div>
										</div>
										<div className="right d-flex align-self-center">
											<p className="time">08:00-09:00</p>
										</div>
									</div>
								</div>
							</div>
							<div className="hr" />
							<div className="people_media">
								<div className="media">
									<img
										className="img-fluid align-self-center mr-2"
										src="assets/images/suhedule/p3.png"
										alt=""
									/>
									<div className="media-body d-flex justify-content-between align-self-center">
										<div className="left d-flex align-self-center">
											<div className="info">
												<h4>Grand Opening</h4>
												<p>
													By{' '}
													<a href="speakerprofile.html">
														<span> Kevin Chase </span>
													</a>{' '}
													Chairman Tesla
												</p>
											</div>
										</div>
										<div className="right d-flex align-self-center">
											<p className="time">08:00-09:00</p>
										</div>
									</div>
								</div>
							</div>
							<div className="hr" />
							<div className="people_media">
								<div className="media">
									<img
										className="img-fluid align-self-center mr-2"
										src="assets/images/suhedule/p4.png"
										alt=""
									/>
									<div className="media-body d-flex justify-content-between align-self-center">
										<div className="left d-flex align-self-center">
											<div className="info">
												<h4>GUser Experience</h4>
												<p>
													By{' '}
													<a href="speakerprofile.html">
														<span> Kevin Chase </span>
													</a>{' '}
													Chairman Tesla
												</p>
											</div>
										</div>
										<div className="right d-flex align-self-center">
											<p className="time">08:00-09:00</p>
										</div>
									</div>
								</div>
							</div>
							<div className="hr" />
							<div className="people_media">
								<div className="media">
									<img
										className="img-fluid align-self-center mr-2"
										src="assets/images/suhedule/p5.png"
										alt=""
									/>
									<div className="media-body d-flex justify-content-between align-self-center">
										<div className="left d-flex align-self-center">
											<div className="info">
												<h4>Building Gov as a Service</h4>
												<p>
													By{' '}
													<a href="speakerprofile.html">
														<span> Piera Mcclure </span>
													</a>{' '}
													Director Slack
												</p>
											</div>
										</div>
										<div className="right d-flex align-self-center">
											<p className="time">08:00-09:00</p>
										</div>
									</div>
								</div>
							</div>
							<div className="hr" />
							<div className="people_media">
								<div className="media">
									<img
										className="img-fluid align-self-center mr-2"
										src="assets/images/suhedule/p6.png"
										alt=""
									/>
									<div className="media-body d-flex justify-content-between align-self-center">
										<div className="left d-flex align-self-center">
											<div className="info">
												<h4>Grand Opening</h4>
												<p>
													By{' '}
													<a href="speakerprofile.html">
														<span> Maria Deo </span>
													</a>{' '}
													Director Skype
												</p>
											</div>
										</div>
										<div className="right d-flex align-self-center">
											<p className="time">08:00-09:00</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*End Row*/}
				{/*  Start Row */}
				<div className="row">
					<div className="col-12 text-center">
						<a className="mr_btn_fill" href="eventSudle.html">
							More Event
						</a>
					</div>
				</div>
				{/*  End Row */}
			</div>
			{/*End Container*/}
		</section>
		{/*End Company Info Area*/}
		{/*Start venues Area*/}
		<div className="venues_area">
			<div className="overlay" />
			{/*Start Container*/}
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						{/*Start Heading Title*/}
						<div className="heading-title text-center">
							<span className="subtitle">Conferance</span>
							<h2 className="f-weight-700 margin-0">Popular Venuse</h2>
							<div className="bordershep" />
							<p>
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
						</div>
						{/*End Heading Title*/}
					</div>
				</div>
				{/*Start Row*/}
				<div className="row">
					<div className="venues_slider owl-carousel owl-loaded owl-drag">
						{/*Start Service Item*/}
						{/*End Service Item*/}
						{/*Start Service Item*/}
						{/*End Service Item*/}
						{/*Start Service Item*/}
						{/*End venues Item*/}
						{/*Start Service Item*/}
						{/*End venues Item*/}
						<div className="owl-stage-outer">
							<div
								className="owl-stage"
								style={{
									transform: 'translate3d(-1158px, 0px, 0px)',
									transition: 'all 0s ease 0s',
									width: 3860,
								}}
							>
								<div className="owl-item cloned" style={{ width: 368, marginRight: 18 }}>
									<div className="item">
										<div className="venues-item">
											<div className="single-venues-item">
												<div className="thumb">
													<a href="#">
														<img
															src="assets/images/venuse/02.jpg"
															className="img-fluid"
															alt=""
														/>
													</a>
													<div className="box b2">
														<span>California, USA</span>
													</div>
												</div>
												<div className="content">
													<a href="#">
														<h3 className="title f-weight-700">Griffith Park Theater</h3>
													</a>
													<p>
														There are many variations of passages of Lorem Ipsum available,
														but the majority is have suffered alteration.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{ width: 368, marginRight: 18 }}>
									<div className="item">
										<div className="venues-item">
											<div className="single-venues-item">
												<div className="thumb">
													<a href="#">
														<img
															src="assets/images/venuse/03.jpg"
															className="img-fluid"
															alt=""
														/>
													</a>
													<div className="box b3">
														<span>California, USA</span>
													</div>
												</div>
												<div className="content">
													<a href="#">
														<h3 className="title f-weight-700">Griffith Park Theater</h3>
													</a>
													<p>
														There are many variations of passages of Lorem Ipsum available,
														but the majority is have suffered alteration.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{ width: 368, marginRight: 18 }}>
									<div className="item">
										<div className="venues-item">
											<div className="single-venues-item">
												<div className="thumb">
													<a href="#">
														<img
															src="assets/images/venuse/03.jpg"
															className="img-fluid"
															alt=""
														/>
													</a>
													<div className="box b4">
														<span>California, USA</span>
													</div>
												</div>
												<div className="content">
													<a href="#">
														<h3 className="title f-weight-700">Griffith Park Theater</h3>
													</a>
													<p>
														There are many variations of passages of Lorem Ipsum available,
														but the majority is have suffered alteration.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item active" style={{ width: 368, marginRight: 18 }}>
									<div className="item">
										<div className="venues-item">
											<div className="single-venues-item">
												<div className="thumb">
													<a href="#">
														<img
															src="assets/images/venuse/01.jpg"
															className="img-fluid"
															alt=""
														/>
													</a>
													<div className="box b1">
														<span>California, USA</span>
													</div>
												</div>
												<div className="content">
													<a href="#">
														<h3 className="title f-weight-700">Griffith Park Theater</h3>
													</a>
													<p>
														There are many variations of passages of Lorem Ipsum available,
														but the majority is have suffered alteration.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item active" style={{ width: 368, marginRight: 18 }}>
									<div className="item">
										<div className="venues-item">
											<div className="single-venues-item">
												<div className="thumb">
													<a href="#">
														<img
															src="assets/images/venuse/02.jpg"
															className="img-fluid"
															alt=""
														/>
													</a>
													<div className="box b2">
														<span>California, USA</span>
													</div>
												</div>
												<div className="content">
													<a href="#">
														<h3 className="title f-weight-700">Griffith Park Theater</h3>
													</a>
													<p>
														There are many variations of passages of Lorem Ipsum available,
														but the majority is have suffered alteration.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item active" style={{ width: 368, marginRight: 18 }}>
									<div className="item">
										<div className="venues-item">
											<div className="single-venues-item">
												<div className="thumb">
													<a href="#">
														<img
															src="assets/images/venuse/03.jpg"
															className="img-fluid"
															alt=""
														/>
													</a>
													<div className="box b3">
														<span>California, USA</span>
													</div>
												</div>
												<div className="content">
													<a href="#">
														<h3 className="title f-weight-700">Griffith Park Theater</h3>
													</a>
													<p>
														There are many variations of passages of Lorem Ipsum available,
														but the majority is have suffered alteration.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item" style={{ width: 368, marginRight: 18 }}>
									<div className="item">
										<div className="venues-item">
											<div className="single-venues-item">
												<div className="thumb">
													<a href="#">
														<img
															src="assets/images/venuse/03.jpg"
															className="img-fluid"
															alt=""
														/>
													</a>
													<div className="box b4">
														<span>California, USA</span>
													</div>
												</div>
												<div className="content">
													<a href="#">
														<h3 className="title f-weight-700">Griffith Park Theater</h3>
													</a>
													<p>
														There are many variations of passages of Lorem Ipsum available,
														but the majority is have suffered alteration.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{ width: 368, marginRight: 18 }}>
									<div className="item">
										<div className="venues-item">
											<div className="single-venues-item">
												<div className="thumb">
													<a href="#">
														<img
															src="assets/images/venuse/01.jpg"
															className="img-fluid"
															alt=""
														/>
													</a>
													<div className="box b1">
														<span>California, USA</span>
													</div>
												</div>
												<div className="content">
													<a href="#">
														<h3 className="title f-weight-700">Griffith Park Theater</h3>
													</a>
													<p>
														There are many variations of passages of Lorem Ipsum available,
														but the majority is have suffered alteration.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{ width: 368, marginRight: 18 }}>
									<div className="item">
										<div className="venues-item">
											<div className="single-venues-item">
												<div className="thumb">
													<a href="#">
														<img
															src="assets/images/venuse/02.jpg"
															className="img-fluid"
															alt=""
														/>
													</a>
													<div className="box b2">
														<span>California, USA</span>
													</div>
												</div>
												<div className="content">
													<a href="#">
														<h3 className="title f-weight-700">Griffith Park Theater</h3>
													</a>
													<p>
														There are many variations of passages of Lorem Ipsum available,
														but the majority is have suffered alteration.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="owl-item cloned" style={{ width: 368, marginRight: 18 }}>
									<div className="item">
										<div className="venues-item">
											<div className="single-venues-item">
												<div className="thumb">
													<a href="#">
														<img
															src="assets/images/venuse/03.jpg"
															className="img-fluid"
															alt=""
														/>
													</a>
													<div className="box b3">
														<span>California, USA</span>
													</div>
												</div>
												<div className="content">
													<a href="#">
														<h3 className="title f-weight-700">Griffith Park Theater</h3>
													</a>
													<p>
														There are many variations of passages of Lorem Ipsum available,
														but the majority is have suffered alteration.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="owl-nav">
							<div className="owl-prev">
								<i className="fa fa-chevron-left" />
							</div>
							<div className="owl-next">
								<i className="fa fa-chevron-right" />
							</div>
						</div>
						<div className="owl-dots disabled" />
					</div>
					{/*End Row*/}
				</div>
				{/*End Container*/}
			</div>
			{/*End venues Area*/}
		</div>
		{/*End venues Area*/}
		{/* Start Upcoming Event Area */}
		<section className="upcomingevent_area">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="heading-title text-center">
							<span className="subtitle">Our</span>
							<h2 className="f-weight-700 margin-0">Upcoming Event</h2>
							<div className="bordershep" />
							<p>
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 col-md-4 col-lg-3">
						<div className="upevent">
							<img className="img-fluid" src="assets/images/event/upevent1.jpg" alt="" />
							<div className="overlay text-center">
								<div className="content">
									<h4>Business Conference</h4>
									<a href="eventSingle.html">View Details</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-3">
						<div className="upevent">
							<img className="img-fluid" src="assets/images/event/upevent2.jpg" alt="" />
							<div className="overlay text-center">
								<div className="content">
									<h4>Business Conference</h4>
									<a href="eventSingle.html">View Details</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-3">
						<div className="upevent">
							<img className="img-fluid" src="assets/images/event/upevent3.jpg" alt="" />
							<div className="overlay text-center">
								<div className="content">
									<h4>Business Conference</h4>
									<a href="eventSingle.html">View Details</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-3">
						<div className="upevent">
							<img className="img-fluid" src="assets/images/event/upevent4.jpg" alt="" />
							<div className="overlay text-center">
								<div className="content">
									<h4>Business Conference</h4>
									<a href="eventSingle.html">View Details</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 text-center">
						<a className="mr-btn-fill-2" href="eventSudle.html">
							More Event
						</a>
					</div>
				</div>
			</div>
		</section>
		{/* End Upcoming Event Area*/}
		{/*Start Testimonial Area*/}
		<section className="testimonial-area">
			<div className="overlay" />
			{/*Start Container*/}
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						{/*Start Heading Title*/}
						<div className="heading-title text-center">
							<span className="subtitle">Our</span>
							<h2 className="f-weight-700 margin-0">Partners</h2>
							<div className="bordershep" />
							<p>
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
						</div>
						{/*End Heading Title*/}
					</div>
				</div>
				{/*Start Testimonial Carousel*/}
				<div className="testimonial owl-carousel owl-loaded owl-drag" id="home-testimonial">
					{/*Start Testimonial Item*/}
					{/*End Testimonial Item*/}
					<div className="owl-stage-outer">
						<div
							className="owl-stage"
							style={{
								transform: 'translate3d(-1130px, 0px, 0px)',
								transition: 'all 0s ease 0s',
								width: 3767,
							}}
						>
							<div className="owl-item cloned" style={{ width: '356.667px', marginRight: 20 }}>
								<div className="testi-item">
									<div className="description">
										<i className="fa fa-quote-right c2" />
										<p>
											There are many variations of passages of that Lorem Ipsum available, but the
											majority have a suffered alteration in some.
										</p>
									</div>
									<div className="author">
										<div className="thumb">
											<img src="assets/images/review/p2.png" className="img-responsive" alt="" />
										</div>
										<div className="content">
											<a href="#">
												<h4 className="title">Shane Kyle</h4>
											</a>
											<span className="post">Designer, EventPro</span>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={{ width: '356.667px', marginRight: 20 }}>
								<div className="testi-item">
									<div className="description">
										<i className="fa fa-quote-right c3" />
										<p>
											There are many variations of passages of that Lorem Ipsum available, but the
											majority have a suffered alteration in some.
										</p>
									</div>
									<div className="author">
										<div className="thumb">
											<img src="assets/images/review/p3.png" className="img-responsive" alt="" />
										</div>
										<div className="content">
											<a href="#">
												<h4 className="title">Shane Kyle</h4>
											</a>
											<span className="post">Designer, EventPro</span>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={{ width: '356.667px', marginRight: 20 }}>
								<div className="testi-item">
									<div className="description">
										<i className="fa fa-quote-right c2" />
										<p>
											There are many variations of passages of that Lorem Ipsum available, but the
											majority have a suffered alteration in some.
										</p>
									</div>
									<div className="author">
										<div className="thumb">
											<img src="assets/images/review/p2.png" className="img-responsive" alt="" />
										</div>
										<div className="content">
											<a href="#">
												<h4 className="title">Shane Kyle</h4>
											</a>
											<span className="post">Designer, EventPro</span>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item active" style={{ width: '356.667px', marginRight: 20 }}>
								<div className="testi-item">
									<div className="description">
										<i className="fa fa-quote-right c1" />
										<p>
											There are many variations of passages of that Lorem Ipsum available, but the
											majority have a suffered alteration in some.
										</p>
									</div>
									<div className="author">
										<div className="thumb">
											<img src="assets/images/review/p1.png" className="img-responsive" alt="" />
										</div>
										<div className="content">
											<a href="#">
												<h4 className="title">Shane Kyle</h4>
											</a>
											<span className="post">Designer, EventPro</span>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item active" style={{ width: '356.667px', marginRight: 20 }}>
								<div className="testi-item">
									<div className="description">
										<i className="fa fa-quote-right c2" />
										<p>
											There are many variations of passages of that Lorem Ipsum available, but the
											majority have a suffered alteration in some.
										</p>
									</div>
									<div className="author">
										<div className="thumb">
											<img src="assets/images/review/p2.png" className="img-responsive" alt="" />
										</div>
										<div className="content">
											<a href="#">
												<h4 className="title">Shane Kyle</h4>
											</a>
											<span className="post">Designer, EventPro</span>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item active" style={{ width: '356.667px', marginRight: 20 }}>
								<div className="testi-item">
									<div className="description">
										<i className="fa fa-quote-right c3" />
										<p>
											There are many variations of passages of that Lorem Ipsum available, but the
											majority have a suffered alteration in some.
										</p>
									</div>
									<div className="author">
										<div className="thumb">
											<img src="assets/images/review/p3.png" className="img-responsive" alt="" />
										</div>
										<div className="content">
											<a href="#">
												<h4 className="title">Shane Kyle</h4>
											</a>
											<span className="post">Designer, EventPro</span>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item" style={{ width: '356.667px', marginRight: 20 }}>
								<div className="testi-item">
									<div className="description">
										<i className="fa fa-quote-right c2" />
										<p>
											There are many variations of passages of that Lorem Ipsum available, but the
											majority have a suffered alteration in some.
										</p>
									</div>
									<div className="author">
										<div className="thumb">
											<img src="assets/images/review/p2.png" className="img-responsive" alt="" />
										</div>
										<div className="content">
											<a href="#">
												<h4 className="title">Shane Kyle</h4>
											</a>
											<span className="post">Designer, EventPro</span>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={{ width: '356.667px', marginRight: 20 }}>
								<div className="testi-item">
									<div className="description">
										<i className="fa fa-quote-right c1" />
										<p>
											There are many variations of passages of that Lorem Ipsum available, but the
											majority have a suffered alteration in some.
										</p>
									</div>
									<div className="author">
										<div className="thumb">
											<img src="assets/images/review/p1.png" className="img-responsive" alt="" />
										</div>
										<div className="content">
											<a href="#">
												<h4 className="title">Shane Kyle</h4>
											</a>
											<span className="post">Designer, EventPro</span>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={{ width: '356.667px', marginRight: 20 }}>
								<div className="testi-item">
									<div className="description">
										<i className="fa fa-quote-right c2" />
										<p>
											There are many variations of passages of that Lorem Ipsum available, but the
											majority have a suffered alteration in some.
										</p>
									</div>
									<div className="author">
										<div className="thumb">
											<img src="assets/images/review/p2.png" className="img-responsive" alt="" />
										</div>
										<div className="content">
											<a href="#">
												<h4 className="title">Shane Kyle</h4>
											</a>
											<span className="post">Designer, EventPro</span>
										</div>
									</div>
								</div>
							</div>
							<div className="owl-item cloned" style={{ width: '356.667px', marginRight: 20 }}>
								<div className="testi-item">
									<div className="description">
										<i className="fa fa-quote-right c3" />
										<p>
											There are many variations of passages of that Lorem Ipsum available, but the
											majority have a suffered alteration in some.
										</p>
									</div>
									<div className="author">
										<div className="thumb">
											<img src="assets/images/review/p3.png" className="img-responsive" alt="" />
										</div>
										<div className="content">
											<a href="#">
												<h4 className="title">Shane Kyle</h4>
											</a>
											<span className="post">Designer, EventPro</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="owl-nav disabled">
						<div className="owl-prev">prev</div>
						<div className="owl-next">next</div>
					</div>
					<div className="owl-dots">
						<div className="owl-dot active">
							<span />
						</div>
						<div className="owl-dot">
							<span />
						</div>
					</div>
				</div>
				{/*End Testimonial Carousel*/}
			</div>
			{/*End Container*/}
		</section>
		{/*End Testimonial Area*/}
		{/* Start Speakers Area */}
		<div className="speaker_area">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						{/*Start Heading Title*/}
						<div className="heading-title text-center">
							<span className="subtitle">Our</span>
							<h2 className="f-weight-700 margin-0">Awesome Speakers</h2>
							<div className="bordershep" />
							<p>
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 col-xl-3">
						<div className="speaker">
							<div className="sk-img">
								<div className="img">
									<img className="img-fluid" src="assets/images/speakers/sk1.jpg" alt="" />
									<div className="overlay d-flex justify-content-center">
										<div className="slink">
											<a href="#">
												<i className="fa fa-facebook" />
												<i className="fa fa-twitter" />
												<i className="fa fa-linkedin" />
												<i className="fa fa-google-plus" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="sk-content">
								<a href="speakerprofile.html">
									<h4>Mamunur Rashid</h4>
								</a>
								<p>Founder, Edita</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-xl-3">
						<div className="speaker">
							<div className="sk-img">
								<div className="img">
									<img className="img-fluid" src="assets/images/speakers/sk2.jpg" alt="" />
									<div className="overlay d-flex justify-content-center">
										<div className="slink">
											<a href="#">
												<i className="fa fa-facebook" />
												<i className="fa fa-twitter" />
												<i className="fa fa-linkedin" />
												<i className="fa fa-google-plus" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="sk-content">
								<a href="speakerprofile.html">
									<h4>Melisa Lund</h4>
								</a>
								<p>Founder, Edita</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-xl-3">
						<div className="speaker">
							<div className="sk-img">
								<div className="img">
									<img className="img-fluid" src="assets/images/speakers/sk3.jpg" alt="" />
									<div className="overlay d-flex justify-content-center">
										<div className="slink">
											<a href="#">
												<i className="fa fa-facebook" />
												<i className="fa fa-twitter" />
												<i className="fa fa-linkedin" />
												<i className="fa fa-google-plus" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="sk-content">
								<a href="speakerprofile.html">
									<h4>Agaton Johansson</h4>
								</a>
								<p>Founder, Edita</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-xl-3">
						<div className="speaker">
							<div className="sk-img">
								<div className="img">
									<img className="img-fluid" src="assets/images/speakers/sk4.jpg" alt="" />
									<div className="overlay d-flex justify-content-center">
										<div className="slink">
											<a href="#">
												<i className="fa fa-facebook" />
												<i className="fa fa-twitter" />
												<i className="fa fa-linkedin" />
												<i className="fa fa-google-plus" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="sk-content">
								<a href="speakerprofile.html">
									<h4>Rebecca Henriksson</h4>
								</a>
								<p>Founder, Edita</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-xl-3">
						<div className="speaker">
							<div className="sk-img">
								<div className="img">
									<img className="img-fluid" src="assets/images/speakers/sk5.jpg" alt="" />
									<div className="overlay d-flex justify-content-center">
										<div className="slink">
											<a href="#">
												<i className="fa fa-facebook" />
												<i className="fa fa-twitter" />
												<i className="fa fa-linkedin" />
												<i className="fa fa-google-plus" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="sk-content">
								<a href="speakerprofile.html">
									<h4>Olle Gustavsson</h4>
								</a>
								<p>Founder, Edita</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-xl-3">
						<div className="speaker">
							<div className="sk-img">
								<div className="img">
									<img className="img-fluid" src="assets/images/speakers/sk1.jpg" alt="" />
									<div className="overlay d-flex justify-content-center">
										<div className="slink">
											<a href="#">
												<i className="fa fa-facebook" />
												<i className="fa fa-twitter" />
												<i className="fa fa-linkedin" />
												<i className="fa fa-google-plus" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="sk-content">
								<a href="speakerprofile.html">
									<h4>Romeo Gunnarsson</h4>
								</a>
								<p>Founder, Edita</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-xl-3">
						<div className="speaker">
							<div className="sk-img">
								<div className="img">
									<img className="img-fluid" src="assets/images/speakers/sk2.jpg" alt="" />
									<div className="overlay d-flex justify-content-center">
										<div className="slink">
											<a href="#">
												<i className="fa fa-facebook" />
												<i className="fa fa-twitter" />
												<i className="fa fa-linkedin" />
												<i className="fa fa-google-plus" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="sk-content">
								<a href="speakerprofile.html">
									<h4>Agaton Johnsson</h4>
								</a>
								<p>Founder, Edita</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-xl-3">
						<div className="speaker">
							<div className="sk-img">
								<div className="img">
									<img className="img-fluid" src="assets/images/speakers/sk3.jpg" alt="" />
									<div className="overlay d-flex justify-content-center">
										<div className="slink">
											<a href="#">
												<i className="fa fa-facebook" />
												<i className="fa fa-twitter" />
												<i className="fa fa-linkedin" />
												<i className="fa fa-google-plus" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="sk-content">
								<a href="speakerprofile.html">
									<h4>Greta Nyberg</h4>
								</a>
								<p>Founder, Edita</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* End Speakers Area */}
		{/* Start Sponsor Area */}
		<section className="sponsor_area">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="heading-title text-center">
							<span className="subtitle">Our</span>
							<h2 className="f-weight-700 margin-0">Event Sponsor</h2>
							<div className="bordershep" />
							<p>
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 text-center">
						<div className="title-gold">
							<span>Gold Sponsors</span>
						</div>
					</div>
					<div className="col-6 col-md text-center">
						<a href="#">
							<img className="img-fluid" src="assets/images/sponsor/golden/1.png" alt="" />
						</a>
					</div>
					<div className="col-6 col-md text-center">
						<a href="#">
							<img className="img-fluid" src="assets/images/sponsor/golden/2.png" alt="" />
						</a>
					</div>
					<div className="col-6 col-md text-center">
						<a href="#">
							<img className="img-fluid" src="assets/images/sponsor/golden/3.png" alt="" />
						</a>
					</div>
					<div className="col-6 col-md text-center">
						<a href="#">
							<img className="img-fluid" src="assets/images/sponsor/golden/4.png" alt="" />
						</a>
					</div>
					<div className="col-6 col-md text-center">
						<a href="#">
							<img className="img-fluid" src="assets/images/sponsor/golden/5.png" alt="" />
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-12 text-center">
						<div className="title-silver">
							<span>Sliver Sponsors</span>
						</div>
					</div>
					<div className="col-6 col-md text-center">
						<a href="#">
							<img className="img-fluid" src="assets/images/sponsor/silver/1.png" alt="" />
						</a>
					</div>
					<div className="col-6 col-md text-center">
						<a href="#">
							<img className="img-fluid" src="assets/images/sponsor/silver/2.png" alt="" />
						</a>
					</div>
					<div className="col-6 col-md text-center">
						<a href="#">
							<img className="img-fluid" src="assets/images/sponsor/silver/3.png" alt="" />
						</a>
					</div>
					<div className="col-6 col-md text-center">
						<a href="#">
							<img className="img-fluid" src="assets/images/sponsor/silver/4.png" alt="" />
						</a>
					</div>
					<div className="col-6 col-md text-center">
						<a href="#">
							<img className="img-fluid" src="assets/images/sponsor/silver/5.png" alt="" />
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-12 text-center">
						<a className="mr-btn-fill-2" href="eventSudle.html">
							More Event
						</a>
					</div>
				</div>
			</div>
		</section>
		{/* End Sponsor Area */}
		{/*Start Latest News Area*/}
		<section className="latest-news-area">
			{/*Start Container*/}
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						{/*Start Heading Title*/}
						<div className="heading-title text-center">
							<h2 className="f-weight-700 margin-0">Organized by</h2>
							<div className="bordershep" />
							<img src="assets/images/geekabyte-web.png" />
						</div>
						{/*End Heading Title*/}
					</div>
				</div>
			</div>
			{/*End Container*/}
		</section>
	</Fragment>
)

export default Home
