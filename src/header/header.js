import './header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

function Header() {
    return (
        <div className='Header'>
            <Navbar className='Header-navbar' variant='dark'>
                <Container className='Header-container'>
                    <Navbar.Brand className='Header-navbrand' href="#home">
                        glhweb.com
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;