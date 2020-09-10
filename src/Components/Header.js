import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import './Header.css';
import { withRouter, Link } from 'react-router-dom';

const Header = (props) => {

  return (
    <div className='nav-container'>
      <Navbar bg="light" expand="lg" style={{display: 'flex', justifyContent: 'space-between'}}>
        <div
          className='nav-image-container'
          onClick={() => props.history.push('/')}
        >
          <img
            src={props.badge}
            className='nav-image'
          />
        </div>
        <div>
          <h3 className='welcome'>
            Home of the San Jose Sharks
          </h3>
        </div>
        <div>
        </div>
        </Navbar>

    </div>
  )
}

export default withRouter(Header)