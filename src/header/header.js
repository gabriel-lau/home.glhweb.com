import './header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import React from 'react';

function Header() {
    return (
        <div className='Header'>
            <Navbar className='Header-navbar' variant='dark' fixed="top" >
                <Container className='Header-container' id='Header-container'>
                    <Navbar.Brand className='Header-navbrand' href="#home">
                        DevOps Example
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;