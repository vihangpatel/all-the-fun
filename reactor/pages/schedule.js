import React, { memo, useState } from 'react'

function Schedule() {
	const [currentTab, changeTab] = useState(0)

	function onTabChange(e, tab) {
		e.preventDefault()
		changeTab(tab)
	}

	return (
		<section id="schedule" className="schedule_area">
			<div className="container">
				<div className="row">
					<div className="col-sm-8 offset-sm-2 text-center">
						<div className="center-title">
							<h2>Event Schedule 2019</h2>
							{/* <p className="lead">Are you ready for it? :-)</p> */}
						</div>
					</div>
				</div>
				<div className="row margin-b-30 margin-t-30">
					<div className="col-md-10 offset-md-1">
						<div>
							{/* Nav tabs */}
							<ul className="tabs-schedule list-inline" role="tablist">
								<li role="presentation" className={currentTab === 0 ? 'active' : ''}>
									<a
										className="schedule-navlink"
										onClick={e => onTabChange(e, 0)}
										aria-controls="01"
										role="tab"
										data-toggle="tab"
										aria-expanded={currentTab === 0}
									>
										Workshop Day<span>Thu, Sep 13</span>
									</a>
								</li>
								<li role="presentation" className={currentTab === 1 ? 'active' : ''}>
									<a
										className="schedule-navlink"
										onClick={e => onTabChange(e, 1)}
										aria-controls="02"
										role="tab"
										data-toggle="tab"
										aria-expanded={currentTab === 1}
									>
										Conference Day 1<span>Fri, Sep 14</span>
									</a>
								</li>
								<li role="presentation" className={currentTab === 2 ? 'active' : ''}>
									<a
										className="schedule-navlink"
										onClick={e => onTabChange(e, 2)}
										aria-controls="03"
										role="tab"
										data-toggle="tab"
										aria-expanded={currentTab === 2}
									>
										Conference Day 2<span>Sat, Sep 15</span>
									</a>
								</li>
							</ul>
							{/* Tab panes */}
							{currentTab === 0 && (
								<div className="tab-content">
									<div role="tabpanel" className={`tab-pane ${currentTab === 0 && 'active in'} fade`}>
										<div className="row">
											<div className="col-sm-3 event-info">
												<span>Thursday</span>
												<span>9:00 - 13:00</span>
												<span className="event-hall">Terra Lucis II</span>
											</div>
											<div className="col-sm-9 event-detail">
												<h3>Workshop: Introduction to React.js</h3>
												<div className="row margin-b-20">
													<div className="col-sm-2">
														<img
															src="uploads/images/speakers/forbes.jpg"
															alt="speaker"
															className="img-responsive"
														/>
													</div>
													<div className="col-sm-10">
														<h4>Forbes Lindesay</h4>
														<p>
															This workshop will get you ready to start working on your
															first React app. It will include all the concepts you need
															to understand, including ES6, JSX, State Management and how
															to structure your components. Everything will be taught with
															examples for you to work through during the workshop, to
															ensure you have fully understood. <br />
															<i>[Short coffee-break at 11:00]</i>
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="row margin-b-30" style={{ opacity: '0.7' }}>
											<div className="col-sm-3 event-info">
												<span>Thursday</span>
												<span>13:00 - 14:00</span>
												<span className="event-hall">First floor</span>
											</div>
											<div className="col-sm-9 event-detail">
												<h3>lunch</h3>
												<p />
											</div>
										</div>
										<div className="row">
											<div className="col-sm-3 event-info">
												<span>Thursday</span>
												<span>14:00 - 18:00</span>
												<span className="event-hall">Room Terra Mitica</span>
											</div>
											<div className="col-sm-9 event-detail collapse-group">
												<h3>Workshop: Advanced React Native</h3>
												<div className="row">
													<div className="col-sm-2">
														<img
															src="uploads/images/speakers/ferran.jpg"
															alt="speaker"
															className="img-responsive"
														/>
													</div>
													<div className="col-sm-10">
														<h4>To be decided</h4>
														<p>
															In this workshop, we’ll cover a handful of common advanced
															UI patterns with React Native, focusing on declarative
															animations and interactions that can be leveraged at 60 fps.
															For that, we’ll make use of Animated API, as well as
															react-native-gesture-handler to build top of the line
															components that you’ll be able to plug in your commercial
															projects. Snack and Expo will be our tooling to make that
															happen.
															<br />
															<i>[Short coffee-break at 16:00]</i>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}

							{currentTab === 1 && (
								<div className="tab-content">
									<div role="tabpanel" className={`tab-pane ${currentTab === 1 && 'active in'} fade`}>
										<div className="row">
											<div className="col-sm-3 event-info">
												<span>Thursday</span>
												<span>9:00 - 13:00</span>
												<span className="event-hall">Terra Lucis II</span>
											</div>
											<div className="col-sm-9 event-detail">
												<h3>Workshop: Introduction to React.js</h3>
												<div className="row margin-b-20">
													<div className="col-sm-2">
														<img
															src="uploads/images/speakers/forbes.jpg"
															alt="speaker"
															className="img-responsive"
														/>
													</div>
													<div className="col-sm-10">
														<h4>Forbes Lindesay</h4>
														<p>
															This workshop will get you ready to start working on your
															first React app. It will include all the concepts you need
															to understand, including ES6, JSX, State Management and how
															to structure your components. Everything will be taught with
															examples for you to work through during the workshop, to
															ensure you have fully understood. <br />
															<i>[Short coffee-break at 11:00]</i>
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="row margin-b-30" style={{ opacity: '0.7' }}>
											<div className="col-sm-3 event-info">
												<span>Thursday</span>
												<span>13:00 - 14:00</span>
												<span className="event-hall">First floor</span>
											</div>
											<div className="col-sm-9 event-detail">
												<h3>lunch</h3>
												<p />
											</div>
										</div>
										<div className="row">
											<div className="col-sm-3 event-info">
												<span>Thursday</span>
												<span>14:00 - 18:00</span>
												<span className="event-hall">Room Terra Mitica</span>
											</div>
											<div className="col-sm-9 event-detail collapse-group">
												<h3>Workshop: Advanced React Native</h3>
												<div className="row">
													<div className="col-sm-2">
														<img
															src="uploads/images/speakers/ferran.jpg"
															alt="speaker"
															className="img-responsive"
														/>
													</div>
													<div className="col-sm-10">
														<h4>To be decided</h4>
														<p>
															In this workshop, we’ll cover a handful of common advanced
															UI patterns with React Native, focusing on declarative
															animations and interactions that can be leveraged at 60 fps.
															For that, we’ll make use of Animated API, as well as
															react-native-gesture-handler to build top of the line
															components that you’ll be able to plug in your commercial
															projects. Snack and Expo will be our tooling to make that
															happen.
															<br />
															<i>[Short coffee-break at 16:00]</i>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}

							{currentTab === 2 && (
								<div className="tab-content">
									<div role="tabpanel" className={`tab-pane ${currentTab === 2 && 'active in'} fade`}>
										<div className="row">
											<div className="col-sm-3 event-info">
												<span>Thursday</span>
												<span>9:00 - 13:00</span>
												<span className="event-hall">Terra Lucis II</span>
											</div>
											<div className="col-sm-9 event-detail">
												<h3>Workshop: Introduction to React.js</h3>
												<div className="row margin-b-20">
													<div className="col-sm-2">
														<img
															src="uploads/images/speakers/forbes.jpg"
															alt="speaker"
															className="img-responsive"
														/>
													</div>
													<div className="col-sm-10">
														<h4>Forbes Lindesay</h4>
														<p>
															This workshop will get you ready to start working on your
															first React app. It will include all the concepts you need
															to understand, including ES6, JSX, State Management and how
															to structure your components. Everything will be taught with
															examples for you to work through during the workshop, to
															ensure you have fully understood. <br />
															<i>[Short coffee-break at 11:00]</i>
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="row margin-b-30" style={{ opacity: '0.7' }}>
											<div className="col-sm-3 event-info">
												<span>Thursday</span>
												<span>13:00 - 14:00</span>
												<span className="event-hall">First floor</span>
											</div>
											<div className="col-sm-9 event-detail">
												<h3>lunch</h3>
												<p />
											</div>
										</div>
										<div className="row">
											<div className="col-sm-3 event-info">
												<span>Thursday</span>
												<span>14:00 - 18:00</span>
												<span className="event-hall">Room Terra Mitica</span>
											</div>
											<div className="col-sm-9 event-detail collapse-group">
												<h3>Workshop: Advanced React Native</h3>
												<div className="row">
													<div className="col-sm-2">
														<img
															src="uploads/images/speakers/ferran.jpg"
															alt="speaker"
															className="img-responsive"
														/>
													</div>
													<div className="col-sm-10">
														<h4>To be decided</h4>
														<p>
															In this workshop, we’ll cover a handful of common advanced
															UI patterns with React Native, focusing on declarative
															animations and interactions that can be leveraged at 60 fps.
															For that, we’ll make use of Animated API, as well as
															react-native-gesture-handler to build top of the line
															components that you’ll be able to plug in your commercial
															projects. Snack and Expo will be our tooling to make that
															happen.
															<br />
															<i>[Short coffee-break at 16:00]</i>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
							{/* Tab panes end */}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default memo(Schedule)
