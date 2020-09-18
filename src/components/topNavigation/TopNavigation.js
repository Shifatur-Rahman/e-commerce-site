import React, { Component, Fragment } from "react";
import "../../asset/css/custom.css";
import { Navbar, Nav } from "react-bootstrap";

export default class TopNavigation extends Component {
  state = {
    navbar: "navbarTitle",
    navColor: "navBackground",
    navBarItem: "navItem",
  };
  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navbar: "navTitleScroll",
        navColor: "navBackgroundScroll",
        navBarItem: "navItemScroll",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navbar: "navTitle",
        navColor: "navBackground",
        navBarItem: "navItem",
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  render() {
    return (
      <Fragment>
        <Navbar
          fixed='top'
          collapseOnSelect
          expand='sm'
          className={this.state.navColor}
        >
          <Navbar.Brand className={this.state.navbar} href='#home'>
            Apparel 360
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Nav>
              <Nav.Link className={this.state.navBarItem}>Home</Nav.Link>
              <Nav.Link className={this.state.navBarItem}>Store</Nav.Link>
              <Nav.Link className={this.state.navBarItem}>Collection</Nav.Link>
              <Nav.Link className={this.state.navBarItem}>Gallery</Nav.Link>
              <Nav.Link className={this.state.navBarItem}>Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
