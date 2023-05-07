import './body1.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Body1() {
    return (
        <div className='Body1'>
            <div className="Body1-filter">
                <Container className='Body1-main'>
                    <Row>
                        <Col xs={0} md={2} >
                        </Col>
                        <Col xs={12} md={10} >
                            <Container className='Body1-maincontent'>
                                <Row>
                                    <Container className='Body1-maincontentheader'>
                                        <p>Test</p>
                                    </Container>
                                </Row>
                                <Row>

                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>    
            </div>
        </div>
    );
}

export default Body1;