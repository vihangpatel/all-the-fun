import React, { Fragment, Component, useState } from "react";
import Logo from "./logo";

import speakersData from "../data/2019/speakers";
import partners from "../data/2019/partners";
import sponsors from "../data/2019/sponsors";
import { addMap } from "./map";
import LazyImage from "../lazy-load";
import { registerLazyImageScrollHandler } from "../lazy-load/scroll-helper";
import Header from "../header";
import Countdown from "react-countdown-now";
import Endorsement from './tweets';

const navItems = [
  { name: "About", id: "#about" },
  { name: "Partners", id: "#partners", scrollToPath: true },
  { name: "Speakers", id: "#speakers", scrollToPath: true },
  { name: "Sponsors", id: "#sponsors", scrollToPath: true },
  { name: "Organizers", id: "#organizers", scrollToPath: true },
  { name: "React India 2020", id: "/", highlight: true }
];

const BuyTickets = () => (
  <a
    rel="noreferrer"
    href="http://www.geekabyte.tech/conferences/1/react-india-2019"
    target="_blank"
    key={Date.now()}
  >
    REACT INDIA 2019 TALKS
  </a>
);

class Home extends Component {
  constructor() {
    super();

    this.state = {
      loadSecondFold: true,
      showBanner: false,
      loadVideo: false,
      add: "hello"
    };
    this.onImageLoad = this.onImageLoad.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    registerLazyImageScrollHandler();
    setTimeout(() => {
      addMap();
      this.setState({
        loadSecondFold: true,
        showBanner: true
      });
    }, 100);
  }

  onImageLoad() {
    this.setState({
      loadVideo: false
    });
  }

  render() {
    const { showBanner, loadSecondFold, loadVideo } = this.state;
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
              <Countdown
                date={new Date("2019-09-26T04:00:00.000Z")}
                renderer={renderer}
              />
              <h3 className="content__desc">react India</h3>
              <h2 className="content__title" />
              <div className="content__button">
                <BuyTickets />
              </div>
            </div>
          </div>
          <div className="video__main">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAJAA0DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcJ/8QAJBAAAQQCAQIHAAAAAAAAAAAABQIDBAYBBwAINwkUFXZ4tLf/xAAVAQEBAAAAAAAAAAAAAAAAAAACBf/EAB0RAAMBAAIDAQAAAAAAAAAAAAIDBAEGEgUREwf/2gAMAwEAAhEDEQA/AJDqfrWP69qw62U40AjFrdPJHz9VULsKLcXOmJ89gxDp87BcmKJVOtLECbKSdjwfQWhkpkdHID5PmZ7S/YfiTb8Hs1hcWFqi3Knisznn2as+MyMWtMZpYxyNPteHXcsSWZWWp7anI85hTTrS8YxltvODpD7wk/jrsH8w2rxVoPttG9wGfrCeOH8z4tectyPGySW32XrdRqnOMkxxxkANMKp3NLfqGDuuFa+rOqvTcxc0+SV5lUVeFVJBFAwEiaUjrX0szSWGzOQnM3t29JNrR+eMaRL7l//Z"
              className="dummy-image"
            />

            {showBanner && (
              <LazyImage
				        tinySrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAJAA0DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcJ/8QAJBAAAQQCAQIHAAAAAAAAAAAABQIDBAYBBwAINwkUFXZ4tLf/xAAVAQEBAAAAAAAAAAAAAAAAAAACBf/EAB0RAAMBAAIDAQAAAAAAAAAAAAIDBAEGEgUREwf/2gAMAwEAAhEDEQA/AJDqfrWP69qw62U40AjFrdPJHz9VULsKLcXOmJ89gxDp87BcmKJVOtLECbKSdjwfQWhkpkdHID5PmZ7S/YfiTb8Hs1hcWFqi3Knisznn2as+MyMWtMZpYxyNPteHXcsSWZWWp7anI85hTTrS8YxltvODpD7wk/jrsH8w2rxVoPttG9wGfrCeOH8z4tectyPGySW32XrdRqnOMkxxxkANMKp3NLfqGDuuFa+rOqvTcxc0+SV5lUVeFVJBFAwEiaUjrX0szSWGzOQnM3t29JNrR+eMaRL7l//Z"
                imgClassName="dummy-image"
                alt="hero banner"
                src="/assets/images/ri2019.jpeg"
                onLoad={this.onImageLoad}
              />
            )}
            {loadVideo && (
              <video autoPlay loop muted>
                <source src="/assets/video/video.mp4" type="video/mp4" />
                Please use a video supported browser
              </video>
            )}
          </div>
        </div>
        <Header navItems={navItems} />
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
                      <h2 className="f-weight-700 margin-0">
                        First Beach Conference 🏖
                      </h2>
                      <div className="bordershep" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-12 order-last order-md-first"
                    id="tickets"
                  >
                    <div className="about-text">
                      <p className="first-text">
                        React India is an international community-led non-profit
                        initiative that provides a platform for developers to
                        share and discuss their insights and experiences with
                        React. The three-day conference is the first of its kind
                        in India.
                      </p>
                      <div className="hidden-xs">
                        The first of the three days will be focusing on
                        workshops and the following two days will be dedicated
                        to talks on topics revolving around React, React Native
                        & GraphQL. The conference will bring together front-end
                        and full-stack developers from across the globe to Goa,
                        India. In this single track event, you will learn more
                        about React and everything related to it while meeting
                        some of the leading talents from around the globe in the
                        developer community. In addition to enjoying the event,
                        this is also your chance to explore Goa! Regular and
                        lightning talks will cover various topics related to
                        React.JS and FE, including React Native, GraphQL, VR and
                        AR, Redux, Preact and more and more!
                      </div>
                      <div className="buttons">
                        <div className="content__button">
                          <BuyTickets />
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
              <div className="row">
                <div className="col-sm-7">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        {/* Start Heading Title */}
                        <div className="heading-title text-center">
                          <span className="subtitle">BE A PART OF</span>
                          <h2>React India 2019</h2>
                          <div className="bordershep" />
                          <p>
                            Our Attendees, Speakers & Sponsors will be able to
                            meet together and share a few exciting and fruitful
                            days, while enjoying the food and warm weather from
                            the western coastline streching along Arabian Sea.
                          </p>
                        </div>

                        {/* End Heading Title */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="text-center">
                          <p className="date">
                            26th - 28th SEPTEMBER | GOA, INDIA | 2019 EDITION
                          </p>
                          {/* <div className="timer" id="countdown"></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-5">
                  <img
                    className="react-lady-img"
                    src="/assets/video/GirlAnimation-no-BG.gif"
                  />
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
                          {partner.name === "zeit" ? (
                            <LazyImage
                              imgClassName={`partner-imgzeit ${partner.cssClass}`}
                              src={`/assets/images/partners/${partner.imageURL}`}
                              width="250"
                            />
                          ) : (
                            <LazyImage
                              imgClassName={`partner-img ${partner.cssClass}`}
                              src={`/assets/images/partners/${partner.imageURL}`}
                              width="250"
                            />
                          )}
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
                      <h2 className="f-weight-700 margin1 margin-0">
                        Awesome Speakers
                      </h2>
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
              {/* <div className="more-speaker-text text-center">
								<span>More Speakers Coming soon....</span>
							</div> */}
            </div>
            {/* End Speakers Area */}
            {/* Start schedule area */}
            {/* End schedule area */}
            {/* Start MC Area */}
            <section className="speaker_area mc_area" id="mcs">
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
                <div className="row justify-content-center">
                  <div className="col-sm-6 col-md-4">
                    <div className="speaker">
                      <div className="sk-img">
                        <div className="img img-speaker">
                          <img
                            className="img-fluid "
                            src="/assets/images/mcs/mc_varsha_saha.png"
                            alt="varsha_saha.png"
                            preview="true"
                          />
                          <div className="overlay d-flex justify-content-center">
                            <div className="slink">
                              <div className="dumb">
                                <a
                                  rel="noreferrer"
                                  target="_blank"
                                  href="https://twitter.com/saha_varsha"
                                  aria-label="Sunil Pai's twitter profile"
                                >
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sk-content">
                        <a>
                          <h4>Varsha Saha</h4>
                        </a>
                        <p>Front End engineer, Flipkart</p>
                        <div className="sk-desc">
                          <p className="sk-desc-p">
                            JS enthusiast, tea addict and a shopoholic!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="speaker">
                      <div className="sk-img">
                        <div className="img img-speaker">
                          <img
                            className="img-fluid "
                            src="/assets/images/mcs/mc_mariia_punda.png"
                            alt="mariia_punda.png"
                            preview="true"
                          />
                          <div className="overlay d-flex justify-content-center">
                            <div className="slink">
                              <div className="dumb">
                                <a
                                  rel="noreferrer"
                                  target="_blank"
                                  href="https://twitter.com/mariiapunda"
                                  aria-label="Sunil Pai's twitter profile"
                                >
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sk-content">
                        <a>
                          <h4>Mariia Punda</h4>
                        </a>
                        <p>Web developer, N26</p>
                        <div className="sk-desc">
                          <p className="sk-desc-p">
                            Based in Berlin. End-to-end testing enthusiast,
                            openly in love with Cypress.io. Writer wannabe.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End MC Area */}
            {/* Start Artist Area */}
            <section className="speaker_area mc_area" id="mcs">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    {/* Start Heading Title */}
                    <div className="heading-title text-center">
                      <span className="subtitle">Our</span>
                      <h2 className="f-weight-700 margin1 margin-0">Artists</h2>
                      <div className="bordershep" />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-sm-6 col-md-4">
                    <div className="speaker">
                      <div className="sk-img">
                        <div className="img img-speaker">
                          <img
                            className="img-fluid "
                            src="/assets/images/speakers/ken_wheeler.jpg"
                            alt="ken_wheeler.jpg"
                            preview="true"
                          />
                          <div className="overlay d-flex justify-content-center">
                            <div className="slink">
                              <div className="dumb">
                                <a
                                  rel="noreferrer"
                                  target="_blank"
                                  href="https://twitter.com/ken_wheeler"
                                  aria-label=""
                                >
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sk-content">
                        <a>
                          <h4>Ken Wheeler</h4>
                        </a>
                        <p>
                          Remote Artist, Not to be mistaken with Ken who is
                          international speaker/developer
                        </p>
                        <div className="sk-desc">
                          <p className="sk-desc-p">
                            Synthwave & Hip Hop Producer - Dad - Grilling
                            Enthusiast - Half of @theundefinedio - Not
                            associated with programming anymore
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
                        <div
                          key={sponsor.imgUrl}
                          className="col-12 col-md-4 text-center"
                        >
                          <a className="sponsor-link" href={sponsor.link}>
                            <LazyImage
                              imgClassName="sponsor-img platinum img-fluid"
                              src={`/assets/images/sponsor/${sponsor.category}/${sponsor.imgUrl}`}
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
                        <div
                          key={sponsor.imgUrl}
                          className="col-6 col-md-3 text-center"
                        >
                          <a className="sponsor-link" href={sponsor.link}>
                            <LazyImage
                              imgClassName="sponsor-img golden img-fluid"
                              src={`/assets/images/sponsor/${sponsor.category}/${sponsor.imgUrl}`}
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
                        <div
                          key={sponsor.imgUrl}
                          className="col-4 col-md text-center"
                        >
                          <a className="sponsor-link" href={sponsor.link}>
                            <LazyImage
                              imgClassName="sponsor-img silver img-fluid"
                              src={`/assets/images/sponsor/${sponsor.category}/${sponsor.imgUrl}`}
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
                        <div
                          key={sponsor.imgUrl}
                          className="col-4 col-md-2 text-center"
                        >
                          <a className="sponsor-link" href={sponsor.link}>
                            <LazyImage
                              imgClassName="sponsor-img bronze img-fluid"
                              src={`/assets/images/sponsor/${sponsor.category}/${sponsor.imgUrl}`}
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
                      <span>DIVERSITY SPONSORS</span>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <div className="row justify-content-center">
                      {sponsors.diversity.map(sponsor => (
                        <div
                          key={sponsor.imgUrl}
                          className="col-6 col-md-3 text-center"
                        >
                          <a className="sponsor-link" href={sponsor.link}>
                            <LazyImage
                              imgClassName="sponsor-img diversity img-fluid"
                              src={`/assets/images/sponsor/${sponsor.category}/${sponsor.imgUrl}`}
                              alt=""
                            />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Sponsor Area */}
            {/* Start Ticketing Partner Area */}
            <section className="ticketing_area">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="heading-title text-center">
                      <span className="subtitle">Our</span>
                      <h2 className="f-weight-700 margin-0">
                        Merchandise Partner
                      </h2>
                      <div className="bordershep" />
                    </div>
                  </div>
                </div>
                <div className="row mb-20">
                  <div className="col-12 text-center">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-12 col-md-4 text-center">
                        <a
                          className="ticketing-link"
                          href="https://www.stickermule.com/supports/ReactIndia"
                        >
                          <img
                            className="ticketing-img img-fluid"
                            src="/assets/images/ticketpartner/sticker-mule-logo-light.png"
                            alt=""
                            preview="true"
                          />
                        </a>
                      </div>
                      <div className="col-12 col-md-4 text-center">
                        <a className="ticketing-link" href="https://dev.to/">
                          <img
                            className="ticketing-img img-fluid full-width-img"
                            src="/assets/images/ticketpartner/dev_logo.svg"
                            alt=""
                            preview="true"
                          />
                        </a>
                      </div>
                      <div className="col-12 col-md-4 text-center">
                        <a
                          className="ticketing-link"
                          href="https://inkmonk.com/"
                        >
                          <img
                            className="ticketing-img img-fluid full-width-img"
                            src="/assets/images/ticketpartner/inkmonk-logo.png"
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
            {/* START WIFI SPONSOR*/}
            <section className="sponsor_area">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="heading-title text-center">
                      <span className="subtitle">Our</span>
                      <h2 className="f-weight-700 margin-0">WIFI SPONSOR</h2>
                      <div className="bordershep" />
                    </div>
                  </div>
                </div>
                <div className="row mb-20">
                  <div className="col-12 text-center">
                    <div className="row justify-content-center">
                      <div className="col-12 col-md-4 text-center">
                        <a
                          className="ticketing-link"
                          href="https://www.archimydes.com/"
                        >
                          <img
                            className="ticketing-img img-fluid"
                            src="/assets/images/wifi/archimydes.svg"
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
            {/* END WIFI SPONSOR */}

            {/* Start Ticketing Partner Area */}
            <section className="ticketing_area">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="heading-title text-center">
                      <span className="subtitle">Our</span>
                      <h2 className="f-weight-700 margin-0">
                        Ticketing Partner
                      </h2>
                      <div className="bordershep" />
                    </div>
                  </div>
                </div>
                <div className="row mb-20">
                  <div className="col-12 text-center">
                    <div className="row justify-content-center">
                      <div className="col-12 col-md-4 text-center">
                        <a
                          className="ticketing-link"
                          href="https://www.townscript.com/"
                        >
                          <img
                            className="ticketing-img img-fluid"
                            src="/assets/images/ticketpartner/townscript_logo.png"
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
            <Endorsement/>
            <section className="speaker_area mc_area" id="organizers">
              {/* Start Container */}
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    {/* Start Heading Title */}
                    <div className="heading-title text-center">
                      <h2 className="f-weight-700 margin-0">
                        Cinematography By
                      </h2>
                      <div className="bordershep" />
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="http://artnest.in"
                      >
                        <LazyImage
                          src="/assets/images/ticketpartner/artnest.png"
                          imgClassName="cinemetography-img img-fluid"
                        />
                      </a>
                    </div>
                    {/* End Heading Title */}
                  </div>
                </div>
              </div>
              {/* End Container */}
            </section>

            <section className="latest-news-area" id="organizers">
              {/* Start Container */}
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    {/* Start Heading Title */}
                    <div className="heading-title text-center">
                      <h2 className="f-weight-700 margin-0">Organized by</h2>
                      <div className="bordershep" />
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="http://geekabyte.tech"
                      >
                        <LazyImage src="/assets/images/geekabyte-web.png" />
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
    );
  }
}

const charLimit = 120;

const SpeakerCard = props => {
  const charLimit = 120;
  const [showMore, setFlag] = useState(props.description.length <= charLimit);
  const { description } = props;

  return (
    <div className="col-sm-6 col-xl-3" key={props.name}>
      <div className="speaker">
        <div className="sk-img">
          <div className="img img-speaker">
            <LazyImage
              tinySrc={props.tinySrc}
              imgClassName="img-fluid"
              src={`/assets/images/speakers/${props.imgPath}`}
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
                    <span
                      className="toggle-text-length"
                      onClick={() => setFlag(false)}
                    >
                      [...]
                    </span>
                  ) : (
                    <span
                      className="toggle-text-length"
                      onClick={() => setFlag(true)}
                    >
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
  );
};

const NavigateIcon = () => (
  <div className="icon navigate-icon">
    <a target="_blank" href="http://bit.ly/2m4Oh8g">
      <i class="fa fa-location-arrow" aria-hidden="true"></i>
    </a>
  </div>
);

const GuideIcon = () => (
  <div className="icon guide-icon">
    <a target="_blank" href="http://bit.ly/2kySUqI">
      <img src="/assets/images/user-guide.jpg" />
    </a>
  </div>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return null;
  } else {
    // Render a countdown
    return (
      <div className="count-down">
        <div>{days}d</div>
        <div>{hours}h</div>
        <div>{minutes}m</div>
        <div>{seconds}s</div>
      </div>
    );
  }
};

export default Home;
