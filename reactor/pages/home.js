import React, { Fragment, Component, useState } from "react"
import Logo from "./logo"

import speakersData from "../data/speakers"
import partners from "../data/partners"
import sponsors from "../data/sponsors"
import { addMap } from "./map"
import LazyImage from "../lazy-load"
import { registerLazyImageScrollHandler } from "../lazy-load/scroll-helper"
import Header from "../header"

class Home extends Component {
	constructor() {
		super()

		this.state = {
			loadSecondFold: true,
			showBanner: false,
			loadVideo: false,
			add: 'hello'
		}
		this.onImageLoad = this.onImageLoad.bind(this)
	}

	componentDidMount() {
		registerLazyImageScrollHandler()
		setTimeout(() => {
			addMap()
			this.setState({
				loadSecondFold: true,
				showBanner: true,
			})
		}, 100)
	}

	onImageLoad() {
		this.setState({
			loadVideo: true,
		})
	}

	render() {
		const { showBanner, loadSecondFold, loadVideo } = this.state
		return (
			<Fragment>
				<div className="video__wrapper">
					<div className="video__overlay" />
					<div className="video__content">
						<div className="logo__main">
							<Logo />
						</div>
						<div className="m-t-20">
							<div className="caption__small">
								<p className="caption__small--para event-date">
									<i className="fa fa-calendar" />
									26th - 28th September, 2019.
								</p>
								<p className="caption__small--para uppercase event-location">
									<i className="flaticon-location-pointer" />
									Goa, India
								</p>
							</div>
							<h3 className="content__desc">react india</h3>
							<h2 className="content__title" />
							<div className="content__button">
								<a
									rel="noreferrer"
									target="_blank"
									href="https://docs.google.com/forms/d/e/1FAIpQLSfhzeqiVWHCl1zWFoDzFwYRFPWSjzu4V877kbwT0gNm04D02A/viewform"
								>
									SUBMIT YOUR TALK
								</a>
							</div>
						</div>
					</div>
					<div className="video__main">
						<img
							src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/CABEIAA4AGQMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAGBwgJCv/aAAgBAQAAAACnsymK681yiEyT/8QAFQEBAQAAAAAAAAAAAAAAAAAABQf/2gAIAQIQAAAAvg//xAAVAQEBAAAAAAAAAAAAAAAAAAAFB//aAAgBAxAAAACOKf/EADAQAAEEAQAHBAsBAAAAAAAAAAMBAgQFBgAHERITIUEUUVaWFRYXIiUxMmGBkdTV/9oACAEBAAE/AH41q7KXYHO8T70+Nxk69V4ny/CdE0xrEsD47N3PMLb7yNcpMirWLvKqojXKQ6bHfZVavLvRU0wLCMM4QXtzjDjcm/RktKzYnJFRXPmps/XLry2aeo2I+KsV810f9umt7Jspoaqxp+3AjjLk9Y8j4KGLIBMBj8yG+NAspbvSUSodDNIMeG2Qo7KxIyTOE8keKUGK619Y4oj4NNlNlVVNe60kgiRjjCUsY5kPZJLkDjKWVKlMjs3HneVgFGwIOCMsl5ajI8pubqLTLk13HFZ2MmK8zbKyK9SOGyN2kzDT3jKZrHjY1URrdzeVzHKxiO9neZ+K5nmGy/ytP//EACYRAAIBAQQLAAAAAAAAAAAAAAECAxEABSFBBAcSFBgyQlFhgdH/2gAIAQIBAT8A4jC9THdMxiAILtLGrbVQOWhw819W0nX7Mzil2OmFQu85EgdMBzHf7b//xAAkEQACAAQEBwAAAAAAAAAAAAABAgMEESIAEiFRBQcXIzEycf/aAAgBAwEBPwDplMstH4hDJ0s7mXJaGu0JptQYluW0OGgRptWpT1hEAeN3+4//2Q=="
							className="dummy-image"
						/>

						{showBanner && (
							<LazyImage
								tinySrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/CABEIAA4AGQMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAGBwgJCv/aAAgBAQAAAACnsymK681yiEyT/8QAFQEBAQAAAAAAAAAAAAAAAAAABQf/2gAIAQIQAAAAvg//xAAVAQEBAAAAAAAAAAAAAAAAAAAFB//aAAgBAxAAAACOKf/EADAQAAEEAQAHBAsBAAAAAAAAAAMBAgQFBgAHERITIUEUUVaWFRYXIiUxMmGBkdTV/9oACAEBAAE/AH41q7KXYHO8T70+Nxk69V4ny/CdE0xrEsD47N3PMLb7yNcpMirWLvKqojXKQ6bHfZVavLvRU0wLCMM4QXtzjDjcm/RktKzYnJFRXPmps/XLry2aeo2I+KsV810f9umt7Jspoaqxp+3AjjLk9Y8j4KGLIBMBj8yG+NAspbvSUSodDNIMeG2Qo7KxIyTOE8keKUGK619Y4oj4NNlNlVVNe60kgiRjjCUsY5kPZJLkDjKWVKlMjs3HneVgFGwIOCMsl5ajI8pubqLTLk13HFZ2MmK8zbKyK9SOGyN2kzDT3jKZrHjY1URrdzeVzHKxiO9neZ+K5nmGy/ytP//EACYRAAIBAQQLAAAAAAAAAAAAAAECAxEABSFBBAcSFBgyQlFhgdH/2gAIAQIBAT8A4jC9THdMxiAILtLGrbVQOWhw819W0nX7Mzil2OmFQu85EgdMBzHf7b//xAAkEQACAAQEBwAAAAAAAAAAAAABAgMEESIAEiFRBQcXIzEycf/aAAgBAwEBPwDplMstH4hDJ0s7mXJaGu0JptQYluW0OGgRptWpT1hEAeN3+4//2Q=="
								imgClassName="dummy-image"
								alt="hero banner"
								src="assets/video/still-image-min.jpg"
								onLoad={this.onImageLoad}
							/>
						)}
						{loadVideo && (
							<video autoPlay loop muted>
								<source src="assets/video/video.mp4" type="video/mp4" />
								Please use a video supported browser
							</video>
						)}
					</div>
				</div>
				<Header />
				{/* End Slider Area */}
				{/* Start About Area */}
				{loadSecondFold && (
					<div className="content">
						<div className="about-area" id="about">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										{/* Start Heading Title */}
										<div className="heading-title text-center">
											<h2 className="f-weight-700 margin-0">First Beach Conference 🏖</h2>
											<div className="bordershep" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12 order-last order-md-first" id="tickets">
										<div className="about-text">
											<p className="first-text">
												React India is an international community-led non-profit initiative that
												provides a platform for developers to share and discuss their insights
												and experiences with React. The three-day conference is the first of its
												kind in India.
											</p>
											<div className="hidden-xs">
												The first of the three days will be focusing on workshops and the
												following two days will be dedicated to talks on topics revolving around
												React, React Native & GraphQL. The conference will bring together
												front-end and full-stack developers from across the globe to Goa, India.
												In this single track event, you will learn more about React and
												everything related to it while meeting some of the leading talents from
												around the globe in the developer community. In addition to enjoying the
												event, this is also your chance to explore Goa! Regular and lightning
												talks will cover various topics related to React.JS and FE, including
												React Native, GraphQL, VR and AR, Redux, Preact and more and more!
											</div>
											<div className="buttons">
												<div className="content__button">
													<a
														rel="noreferrer"
														target="_blank"
														href="/tickets"
													>
														BUY TICKETS
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* End About Area */}
						<section className="conferences">
							<div className="overlay" />
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-8">
										{/* Start Heading Title */}
										<div className="heading-title text-center">
											<span className="subtitle">BE A PART OF</span>
											<h2>React India 2019</h2>
											<div className="bordershep" />
											<p>
												Our Attendees, Speakers & Sponsors will be able to meet together and
												share a few exciting and fruitful days, while enjoying the food and warm
												weather from the western coastline streching along Arabian Sea.
											</p>
										</div>

										{/* End Heading Title */}
									</div>
								</div>
								<div className="row">
									<div className="col-12">
										<div className="text-center">
											<p className="date">26th - 28th SEPTEMBER | GOA, INDIA | 2019 EDITION</p>
											{/* <div className="timer" id="countdown"></div> */}
										</div>
									</div>
									<div className="hello content__button show-interest-btn">
										<a rel="noreferrer" target="_blank" href="http://bit.ly/subscribe-react-india">
											SHOW YOUR INTEREST?
										</a>
									</div>
								</div>
							</div>
						</section>
						{/* Start Company Info Area */}
						{/* End Company Info Area */}
						{/* Start Testimonial Area */}
						<section className="testimonial-area" id="partners">
							<div className="overlay" />
							{/* Start Container */}
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-12">
										{/* Start Heading Title */}
										<div className="heading-title text-center">
											<span className="subtitle">Our</span>
											<h2 className="f-weight-700 margin-0">Partners</h2>
											<div className="bordershep" />
										</div>
										{/* End Heading Title */}
										<div className="partners-wrapper text-center">
											{partners.partners.map(partner => (
												<a
													rel="noreferrer"
													href={partner.url}
													target="_blank"
													key={partner.url}
												>
													<LazyImage
														imgClassName={`partner-img ${partner.cssClass}`}
														src={partner.imageURL}
													/>
												</a>
											))}
										</div>
									</div>
								</div>

								{/* End Testimonial Carousel */}
							</div>
							{/* End Container */}
						</section>
						
						{/* Start Speakers Area */}
						<div className="speaker_area" id="speakers">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-8">
										{/* Start Heading Title */}
										<div className="heading-title text-center">
											<span className="subtitle">Our</span>
											<h2 className="f-weight-700 margin1 margin-0">Awesome Speakers</h2>
											<div className="bordershep" />
										</div>
									</div>
								</div>
								<div className="row">
									{speakersData.map(speakerInfo => (
										<SpeakerCard {...speakerInfo} key={speakerInfo.name} />
									))}
								</div>
							</div>
							<div className="more-speaker-text text-center">
								<span>More Speakers Coming soon....</span>
							</div>
						</div>
						{/* End Speakers Area */}
						{/* Start MC Area */}
						<section className="speaker_area mc_area" id="sponsors">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-8">
											{/* Start Heading Title */}
											<div className="heading-title text-center">
												<span className="subtitle">Our</span>
												<h2 className="f-weight-700 margin1 margin-0">MC's</h2>
												<div className="bordershep" />
											</div>
									</div>
								</div>
								<div class="row justify-content-center">
									<div class="col-sm-6 col-md-3">
										<div class="speaker">
											<div class="sk-img">
												<div class="img img-speaker">
													<img class="img-fluid " src="assets/images/mcs/mc_varsha_saha.jpeg" alt="varsha_saha.jpeg" preview="true" />
													<div class="overlay d-flex justify-content-center">
														<div class="slink">
															<div class="dumb">
																<a rel="noreferrer" target="_blank" href="https://twitter.com/saha_varsha" aria-label="Sunil Pai's twitter profile">
																	<i class="fa fa-twitter"></i>
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="sk-content">
												<a><h4>Varsha Saha</h4></a>
												<p>Front End engineer, Flipkart</p>
												<div class="sk-desc">
													<p class="sk-desc-p">
														JS enthusiast, tea addict and a shopoholic!
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-md-3">
										<div class="speaker">
											<div class="sk-img">
												<div class="img img-speaker">
													<img class="img-fluid " src="assets/images/mcs/mc_mariia_punda.jpg" alt="mariia_punda.jpg" preview="true" />
													<div class="overlay d-flex justify-content-center">
														<div class="slink">
															<div class="dumb">
																<a rel="noreferrer" target="_blank" href="https://twitter.com/mariiapunda" aria-label="Sunil Pai's twitter profile">
																	<i class="fa fa-twitter"></i>
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="sk-content">
												<a><h4>Mariia Punda</h4></a>
												<p>Web developer, N26</p>
												<div class="sk-desc">
													<p class="sk-desc-p">
													  Based in Berlin. End-to-end testing enthusiast, openly in love with Cypress.io. Writer wannabe.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						{/* End MC Area */}
						{/* Start Sponsors Area */}
						<section className="sponsor_area" id="sponsors">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-8">
										<div className="heading-title text-center">
											<span className="subtitle">Our</span>
											<h2 className="f-weight-700 margin-0">Event Sponsors</h2>
											<div className="bordershep" />
										</div>
									</div>
								</div>
								<div className="row mb-20">
									<div className="col-12 text-center">
										<div className="title-gold">
											<span>
												<b>PLATINUM SPONSORS</b>
											</span>
										</div>
									</div>
									<div className="col-12 text-center">
										<div className="row justify-content-center">
											{sponsors.platinum.map(sponsor => (
												<div key={sponsor.imgUrl} className="col-12 col-md-4 text-center">
													<a className="sponsor-link" href={sponsor.link}>
														<LazyImage
															imgClassName="sponsor-img platinum img-fluid"
															src={`assets/images/sponsor/${sponsor.category}/${
																sponsor.imgUrl
															}`}
															alt=""
														/>
													</a>
												</div>
											))}
										</div>
									</div>
								</div>
								<div className="row mb-20">
									<div className="col-12 text-center">
										<div className="title-gold">
											<span>GOLD SPONSORS</span>
										</div>
									</div>
									<div className="col-12 text-center">
										<div className="row justify-content-center">
											{sponsors.gold.map(sponsor => (
												<div key={sponsor.imgUrl} className="col-6 col-md text-center">
													<a className="sponsor-link" href={sponsor.link}>
														<LazyImage
															imgClassName="sponsor-img golden img-fluid"
															src={`assets/images/sponsor/${sponsor.category}/${
																sponsor.imgUrl
															}`}
															alt=""
														/>
													</a>
												</div>
											))}
										</div>
									</div>
								</div>
								<div className="row mb-20">
									<div className="col-12 text-center">
										<div className="title-gold">
											<span>SILVER SPONSORS</span>
										</div>
									</div>
									<div className="col-12 text-center">
										<div className="row justify-content-center">
											{sponsors.silver.map(sponsor => (
												<div key={sponsor.imgUrl} className="col-4 col-md text-center">
													<a className="sponsor-link" href={sponsor.link}>
														<LazyImage
															imgClassName="sponsor-img silver img-fluid"
															src={`assets/images/sponsor/${sponsor.category}/${
																sponsor.imgUrl
															}`}
															alt=""
														/>
													</a>
												</div>
											))}
										</div>
									</div>
								</div>
								<div className="row mb-20">
									<div className="col-12 text-center">
										<div className="title-silver">
											<span>BRONZE SPONSORS</span>
										</div>
									</div>
									<div className="col-12 text-center">
										<div className="row justify-content-center">
											{sponsors.bronze.map(sponsor => (
												<div key={sponsor.imgUrl} className="col-4 col-md-2 text-center">
													<a className="sponsor-link" href={sponsor.link}>
														<LazyImage
															imgClassName="sponsor-img bronze img-fluid"
															src={`assets/images/sponsor/${sponsor.category}/${
																sponsor.imgUrl
															}`}
															alt=""
														/>
													</a>
												</div>
											))}
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-12 text-center">
										<a
											rel="noreferrer"
											target="_blank"
											className="mr-btn-fill-2"
											href="http://bit.ly/React_India_Deck"
										>
											Know About Sponsorship
										</a>
									</div>
								</div>
							</div>
						</section>
					{/* End Sponsor Area */}
						          {/* Start Ticketing Partner Area */}
          <section className='ticketing_area'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-md-8'>
                  <div className='heading-title text-center'>
                        <span className='subtitle'>Our</span>
                        <h2 className='f-weight-700 margin-0'>Merchandise Partner</h2>
                        <div className='bordershep' />
                      </div>
                </div>
              </div>
              <div className='row mb-20'>
                <div className='col-12 text-center'>
                  <div className='row justify-content-center align-items-center'>
                        <div className='col-12 col-md-4 text-center'>
                          <a className='ticketing-link' href='https://www.stickermule.com/supports/ReactIndia'>
                                <img
                                  className='ticketing-img img-fluid'
                                  src='assets/images/ticketpartner/sticker-mule-logo-light.png'
                                  alt=''
                                  preview='true'
                                                    />
                              </a>
                        </div>
						<div className='col-12 col-md-4 text-center'>
                          <a className='ticketing-link' href='https://dev.to/'>
                                <img
                                  className='ticketing-img img-fluid full-width-img'
                                  src='assets/images/ticketpartner/dev_logo.svg'
                                  alt=''
                                  preview='true'
                                                    />
                              </a>
                        </div>
                      </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Ticketing Partner Area */}
						{/* Start Ticketing Partner Area */}
						<section className="ticketing_area">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-8">
										<div className="heading-title text-center">
											<span className="subtitle">Our</span>
											<h2 className="f-weight-700 margin-0">Ticketing Partner</h2>
											<div className="bordershep" />
										</div>
									</div>
								</div>
								<div className="row mb-20">
									<div className="col-12 text-center">
										<div className="row justify-content-center">
											<div className="col-12 col-md-4 text-center">
												<a className="ticketing-link" href="https://www.townscript.com/">
													<img
														className="ticketing-img img-fluid"
														src="assets/images/ticketpartner/townscript_logo.png"
														alt=""
														preview="true"
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						{/* End Ticketing Partner Area */}
						{/* Start Organizer Area */}
						<section className="latest-news-area" id="organizers">
							{/* Start Container */}
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-8">
										{/* Start Heading Title */}
										<div className="heading-title text-center">
											<h2 className="f-weight-700 margin-0">Organized by</h2>
											<div className="bordershep" />
											<a rel="noreferrer" target="_blank" href="http://geekabyte.tech">
												<LazyImage src="assets/images/geekabyte-web.png" />
											</a>
										</div>
										{/* End Heading Title */}
									</div>
								</div>
							</div>
							{/* End Container */}
						</section>
						<div id="map" />
					</div>
				)}
			</Fragment>
		)
	}
}

const charLimit = 120

const SpeakerCard = props => {
	const charLimit = 120
	const [showMore, setFlag] = useState(props.description.length <= charLimit)
	const { description } = props

	return (
		<div className="col-sm-6 col-xl-3" key={props.name}>
			<div className="speaker">
				<div className="sk-img">
					<div className="img img-speaker">
						<LazyImage
							tinySrc={props.tinySrc}
							imgClassName="img-fluid"
							src={`assets/images/speakers/${props.imgPath}`}
							alt={props.imgPath}
						/>
						<div className="overlay d-flex justify-content-center">
							<div className="slink">
								<div className="dumb">
									<a
										rel="noreferrer"
										target="_blank"
										href={props.github}
										aria-label={`${props.name}'s github profile`}
									>
										<i className="fa fa-github" />
									</a>
									<a
										rel="noreferrer"
										target="_blank"
										href={props.twitter}
										aria-label={`${props.name}'s twitter profile`}
									>
										<i className="fa fa-twitter" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sk-content">
					<a>
						<h4>{props.name}</h4>
					</a>
					<p>{props.jobrole}</p>
					<div className="sk-desc">
						<p className="sk-desc-p">
							{props.description.substr(
								0,
								description.length > charLimit
									? showMore
										? description.length
										: charLimit
									: description.length
							)}
							{!showMore && "..."}
							<br />
							{description.length > charLimit && (
								<span>
									{showMore ? (
										<span className="toggle-text-length" onClick={() => setFlag(false)}>
											[...]
										</span>
									) : (
										<span className="toggle-text-length" onClick={() => setFlag(true)}>
											[...]
										</span>
									)}
								</span>
							)}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
