import React from 'react'

const Header = () => (
  <header id='mainHeader' className='header stiky'>
    <nav className='navbar navbar-expand-lg navbar-light p-0'>
      <div className='container'>
        <a className='navbar-brand' href='index.html'>
          <img className='logo-dark' src='assets/images/logo_dark.png' alt='' />
          <img className='logo-light' src='assets/images/logo.png' alt='' />
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
          <ul className='navbar-nav ml-auto' />
        </div>
      </div>
    </nav>

    <div className='clearfix' />
  </header>
)

export default Header
