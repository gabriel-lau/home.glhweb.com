import './footer.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import React from 'react';

function Footer() {
    return (
        <div className='Footer'>
            <Navbar className='Footer-navbar' variant='dark' sticky='bottom' >
                <Container className='Footer-container' id='Footer-container'>
                    <Navbar.Text className='Footer-navtext'>
                        Designed and made by Gabriel
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
}

export default Footer;