import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { List, ListItem, Button, colors } from '@material-ui/core';

const Styles = styled.div`
  .navbar {
    background-color: white;
  }
  .navbar-brand,
  .navbar-dark .navbar-nav .nav-link {
    color: #bbb;
    font-size: 1rem;
    &:hover {
      color: #fff;
    }
  }
  .navbar-dark .navbar-toggler {
    color: #fff;
    border-color: transparent;
  }
`;

const Navigation = () => {
  return (
    <Styles>
      <Navbar fixed='top' bg='primary' expand='lg' variant='dark'>
        <Navbar.Brand>Code Life</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <NavItem>
              <Nav.Link>Home</Nav.Link>{' '}
            </NavItem>
            <Nav.Item>
              <Nav.Link>
                <Link to='/new'>New</Link>{' '}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>About</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
export default Navigation;
