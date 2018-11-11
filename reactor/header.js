import React from 'react'

const navItems = [
	{ name: 'About', id: '#about' },
	{ name: 'Partners', id: '#partners' },
	{ name: 'Speakers', id: '#speakers' },
	{ name: 'Organizers', id: '#organizers' },
]

class Header extends React.Component {
	sticky = 0
	header = null
	state = {
		checked: false,
	}

	scrollPage = () => {
		if (window.pageYOffset > this.sticky) {
			this.header && this.header.classList.add('header-sticky')
		} else {
			this.header && this.header.classList.remove('header-sticky')
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.scrollPage)
		this.header = document.querySelector('.header-main')
		this.sticky = this.header.offsetTop
	}

	scrollToPath = (e, path) => {
		e.preventDefault()
		this.setState({ checked: false })
		document.querySelector(path).scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	toggleChecked = e => this.setState({ checked: e.target.checked })

	render() {
		const { checked } = this.state
		return (
			<header className="header-main">
				{/* <a href className="logo">
					CSS Nav
				</a> */}
				<input
					className="menu-btn"
					checked={checked}
					onChange={this.toggleChecked}
					type="checkbox"
					id="menu-btn"
				/>
				<label className="menu-icon" htmlFor="menu-btn">
					<span className="navicon" />
				</label>
				<ul className="menu">
					{navItems.map((item, i) => (
						<li key={i}>
							<a href={item.id} onClick={e => this.scrollToPath(e, item.id)}>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</header>
		)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollPage)
	}
}

/*
old header

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
*/

export default Header
