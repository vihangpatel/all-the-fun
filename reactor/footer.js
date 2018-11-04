import React from 'react'

const Footer = () => (
  <footer className='footer'>
    <div className='footer-top'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-sm-12'>
            <div className='footer-about'>
              <h3 className='title'>Follow Us</h3>
              <ul>
                <li>
                  <a href='https://www.facebook.com/ReactJSIndia/'>
                    <i className='fa fa-facebook' />
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/react_india/'>
                    <i className='fa fa-twitter' />
                  </a>
                </li>
              </ul>

            </div>
          </div>
          <div className='col-lg-3 col-sm-12'>
            <div className='footer-pages' />
          </div>
          <div className='col-lg-2 col-sm-12' />
          <div className='col-lg-4 col-sm-12'>
            <div className='footer-contact-info'>
              <h3>Contact info</h3>
              <ul>
                <li>
                  <a href='#'>
                    <i className='flaticon-location-pointer' />
                                        30/3, Acsona Waddo, Uttorda Beach, Salcette, Goa 403713, India
                                    </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='flaticon-mail-black-envelope-symbol' />
                                        react-india@geekabyte.tech
                                    </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='flaticon-phone-receiver' />
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

    <div className='footer-bottom'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='copyright-text'>
              <p className='color-white'>Copyright © 2018 All Rights Reserved, Powered by </p>
              <a href='index.html'>
                <span> React India 2019</span>
              </a>
            </div>
          </div>
          <div className='col-md-6'>
            <a
              className='pull-right code-of-conduct-link'
              href='https://www.notion.so/apherio/CODE-OF-CONDUCT-46e5dc50604a44e1be53a34d4937682f'
                        >
              <span>Code of Conduct</span>
            </a>
            <a
              className='pull-right code-of-conduct-link'
              href='https://www.notion.so/apherio/ACCESSIBILITY-STATEMENT-191ec2ad04d84deeb6dfe74b638047e4'
                        >
              <span>Accessibility</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className='totop'>
      <a href='#top'>
        <i className='fa fa-arrow-up' />
      </a>
    </div>
  </footer>
)

export default Footer
