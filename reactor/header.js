import React from 'react'

const Header = () => (
  <header id='mainHeader' className='header stiky'>
    <nav className='navbar navbar-expand-lg navbar-light p-0'>
      <div className='container'>
        <a className='navbar-brand' href='index.html'>
          <img className='logo-dark' src='assets/images/logo_dark.png' alt='' />
          <img className='logo-light' height='100px' width='80px' src='assets/images/logo.png' alt='' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
                >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/home'>
                                Home
                            </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/contact-us'>
                                Contact Us
                            </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' data-toggle='modal' data-target='.bd-example-modal-sm'>
                <i className='fa fa-search' />
              </a>
              <div
                className='modal fade bd-example-modal-sm'
                tabIndex='-1'
                role='dialog'
                aria-hidden='true'
                            >
                <div className='modal-dialog modal-sm'>
                  <div className='modal-content'>
                    <form method='POST'>
                        <input type='text' className='mr-search' placeholder='Search' />
                        <button type='submit' className='submit'>
                            <i className='fa fa-search' />
                          </button>
                      </form>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <a href='pricingTable.html' className='mr_btn_fill'>
                        Buy Tickets
                    </a>
        </div>
      </div>
    </nav>

    <div className='clearfix' />
  </header>
)

export default Header
