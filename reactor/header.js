import React from "react";

const navItems = [
  { name: "About", id: "#about" },
  { name: "Partners", id: "#partners" },
  { name: "Speakers", id: "#speakers" },
  { name: "Schedule", id: "#schedule" },
  { name: "Workshops", id: "/workshop" },
  { name: "Sponsors", id: "#sponsors" },
  { name: "Organizers", id: "#organizers" },
  { name: "Buy Tickets", id: "/tickets" }
];

class Header extends React.Component {
  sticky = 0;
  isSticked = false;
  header = React.createRef();
  state = {
    checked: false
  };

  scrollPage = () => {
    const header = this.header.current;
    if (window.pageYOffset > this.sticky) {
      !this.isSticked && header && header.classList.add("header-sticky");
      this.isSticked = true;
    } else {
      this.isSticked && header && header.classList.remove("header-sticky");
      this.isSticked = false;
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollPage);
    this.sticky = this.header.current.offsetTop;
  }

  scrollToPath = (e, path) => {
    e.preventDefault();
    if (this.props.hardRefresh) {
      location.href = `/${path}`;
    } else {
      this.setState({ checked: false });
      document
        .querySelector(path)
        .scrollIntoView({ behavior: "smooth", block: "start" });
      history &&
        history.pushState &&
        history.pushState({}, `/${path}`, `/${path}`);
    }
  };

  toggleChecked = e => this.setState({ checked: e.target.checked });

  render() {
    const { checked } = this.state;

    const lastDate = new Date("2019-09-23");
    const today = Date.now();

    if (today > lastDate) {
      navItems.length = 7
    }

    return (
      <header ref={this.header} className="header-main">
        <a href="/" className="logo">
          <img src="assets/images/logo-transparent.png" />
        </a>
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
              {item.name !== "Buy Tickets" && item.name !== "Workshops" ? (
                <a href={item.id} onClick={e => this.scrollToPath(e, item.id)}>
                  {item.name}
                </a>
              ) : (
                <a href={item.id}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
      </header>
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollPage);
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

*/

export default Header;
