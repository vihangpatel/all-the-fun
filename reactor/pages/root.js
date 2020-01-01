import React, { Fragment, Component } from "react";
import Logo from "./logo";

import LazyImage from "../lazy-load";
import { registerLazyImageScrollHandler } from "../lazy-load/scroll-helper";
import Header from "../header";

const navItems = [
  { name: "About", id: "#about", scrollToPath: true },
  { name: "Organizers", id: "#organizers" , scrollToPath: true },
  { name: "React India 2019", id: "/conferences/2019" }
];

class Home extends Component {
  constructor() {
    super();

    this.state = {
      loadSecondFold: true,
      showBanner: false,
      loadVideo: false,
      add: "hello"
    };
  }

  componentDidMount() {
    registerLazyImageScrollHandler();
    window.scrollTo(0, 0);
    this.setState({ showBanner : true })
  }

  render() {
    const { showBanner } = this.state;
    return (
      <Fragment>
        <div className="video__wrapper" key="root">
          <div className="video__overlay" />
          <div className="video__content">
            <div className="logo__main">
              <Logo />
            </div>
            <div className="m-t-20">
              <div className="caption__small">
                <p className="caption__small--para event-date">
                  <i className="fa fa-calendar" />
                  REACT INDIA 2020
                </p>
                <p className="caption__small--para uppercase event-location">
                  <i className="flaticon-location-pointer" />
                  NOVEMBER 2020, INDIA
                </p>
              </div>

              <h3 className="content__desc">react India</h3>
              <h2 className="content__title" />
              <div className="content__button">
                <div>
                  <a href="mailto:react-india@geekabyte.tech">
                    Email Us for Sponsorship
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="video__main">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAKBueIx4ZKCMgoy0qqC+8P//8Nzc8P//////////////////////////////////////////////////////////2wBDAaq0tPDS8P//////////////////////////////////////////////////////////////////////////////wAARCACCAMMDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EACEQAQEBAAIDAAIDAQAAAAAAAAABESExAkFREmEicYGh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwAq4YaYgoaIKAgqAAgKgYApggCAKIKKIoKIAoaAmChooyIqqioCNYnEBEUUQxQRMVFUBFBDABBQEFEUFyJhohogi6IKEtJdasn5EgprXjWRBqd8nGMqgqGigAICFqijMvKgf0meX6LcPyES2zdTavum0F8bta9My/TUVq83DcjJTFNZrcW4DnRvgUxP2m4fYZ0qG5wbwm8rP+oLvML2zbyu+wLMTatmxLx/oG3Db0bZC9Adl/ZOqS72BBfKTe0wA9m88LP7BIt2pel3JoKlN3lAWp3T0s5AtN5Td4Paho1kAY3F75qzx21naBO13nUuF5Qa9J0npeL2Cy5Tyu1mRu5gM7w1eYx+o1PgJOeEa8cmpe6CNTmxPFZ5elCSLfpL9iXuQDYz+jPq57QSH3DONJ/YDc4Ya8b2Bm+kl/k1tS3m0E5+Cy3O4A14zO2PK8rb9Zt2rUheiGERV8fbUkY34vjcVGr3F2fjrFur427PiLC/9Z6a8oxAXrou2mnoF9T6l3tfhesFpOfaXknH+nfsRfK9Hl6S9l4oG8YQPYL9SJFt5BbiU9aYBwIAC4AeiIoLiGpqotN4TQVdJ3wiz2gZTOIi7/EF59p6LdiAvdOjeDeFQh2hCK1lMqaa0yuYm8iJVi2iDKgoCAAoigmLIq6qIcKAyKAgpgIYuAJhigJwWKAyoIqCoCoCgAgAAKAgoKEUAEAFABAAAAAAEAABBABQAH//2Q=="
              className="dummy-image"
            />
            {showBanner && (
              <div>
                <LazyImage
                  tinySrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAKBueIx4ZKCMgoy0qqC+8P//8Nzc8P//////////////////////////////////////////////////////////2wBDAaq0tPDS8P//////////////////////////////////////////////////////////////////////////////wAARCACCAMMDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EACEQAQEBAAIDAAIDAQAAAAAAAAABESExAkFREmEicYGh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwAq4YaYgoaIKAgqAAgKgYApggCAKIKKIoKIAoaAmChooyIqqioCNYnEBEUUQxQRMVFUBFBDABBQEFEUFyJhohogi6IKEtJdasn5EgprXjWRBqd8nGMqgqGigAICFqijMvKgf0meX6LcPyES2zdTavum0F8bta9My/TUVq83DcjJTFNZrcW4DnRvgUxP2m4fYZ0qG5wbwm8rP+oLvML2zbyu+wLMTatmxLx/oG3Db0bZC9Adl/ZOqS72BBfKTe0wA9m88LP7BIt2pel3JoKlN3lAWp3T0s5AtN5Td4Paho1kAY3F75qzx21naBO13nUuF5Qa9J0npeL2Cy5Tyu1mRu5gM7w1eYx+o1PgJOeEa8cmpe6CNTmxPFZ5elCSLfpL9iXuQDYz+jPq57QSH3DONJ/YDc4Ya8b2Bm+kl/k1tS3m0E5+Cy3O4A14zO2PK8rb9Zt2rUheiGERV8fbUkY34vjcVGr3F2fjrFur427PiLC/9Z6a8oxAXrou2mnoF9T6l3tfhesFpOfaXknH+nfsRfK9Hl6S9l4oG8YQPYL9SJFt5BbiU9aYBwIAC4AeiIoLiGpqotN4TQVdJ3wiz2gZTOIi7/EF59p6LdiAvdOjeDeFQh2hCK1lMqaa0yuYm8iJVi2iDKgoCAAoigmLIq6qIcKAyKAgpgIYuAJhigJwWKAyoIqCoCoCgAgAAKAgoKEUAEAFABAAAAAAEAABBABQAH//2Q=="
                  imgClassName="dummy-image"
                  alt="hero banner"
                  src="/assets/images/ri2020.jpg"
                  onLoad={this.onImageLoad}
                />
              </div>
            )}
          </div>
        </div>
        <Header navItems={navItems} />
        <div class="content">
          <div className="about-area" id="about">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* Start Heading Title */}
                  <div className="heading-title text-center">
                    <h2 className="f-weight-700 margin-0">About React India</h2>
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
                      React.
                    </p>
                    <div className="hidden-xs">
                      The first of the three days will be focusing on workshops
                      and the following two days will be dedicated to talks on
                      topics revolving around React, React Native & GraphQL. The
                      conference will bring together front-end and full-stack
                      developers from across the globe to India. In this
                      conference, you will learn more about React and everything
                      related to it while meeting some of the leading talents
                      from around the globe in the developer community. In
                      addition to enjoying the event, this is also your chance
                      to India! Regular and lightning talks will cover various
                      topics related to React.JS and FE, including React Native,
                      GraphQL, VR and AR, Redux, Preact and more and more!
                    </div>
                    <div className="buttons">
                      <div className="content__button"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
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
                        <LazyImage src="assets/images/geekabyte-web.png" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
