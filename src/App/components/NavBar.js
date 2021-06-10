import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // Button
} from 'reactstrap';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const authButtons = () => (
  //   <>
  //     <NavItem>
  //       {
  //         user !== null
  //         && <div>
  //           {
  //             user
  //               ? <Button color='danger' onClick={signOutUser}>SIGN OUT</Button>
  //               : <Button color='info' onClick={signInUser}>SIGN IN</Button>
  //           }
  //         </div>
  //       }
  //       </NavItem>
  //   </>
  // );
  return (
    <div>
      <div>
      <Navbar dark color="dark" expand="md">
        <NavbarBrand href="/">Social Services Explorer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link className="nav-link" to="/add-player">Browse Service Sites</Link>

            </NavItem>
            <NavItem>
            <Link className="nav-link" to="/add-player">My List</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </div>
  );
}

NavBar.propTypes = {

};

export default NavBar;
