import './header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

function Header() {
    return (
        <div className='Header'>
            <Navbar bg='dark' variant='dark'>
                <Container >
                    <Navbar.Brand href="#home">
                        glhweb.com
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;