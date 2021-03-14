import React, { Component, useLayoutEffect } from 'react';
import "./foot.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
 
 
class Foot extends Component {
    
    render() { 
        return (
           <div className="page-container">
               <div className="content-wrap">
                    <div className="footer">
                        <Container className="py-4">
                            <Row>
                                <Col>
                                    <p className="foottitle">Address and Contact info</p>
                                    <ul className="list-unstyled">
                                        <li>1234567890</li>
                                        <li>Somewhere in Mumbai,</li>
                                        <li>Maharshtra</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <p className="foottitle">Social Media Platforms</p>
                                    <ul className="list-unstyled">
                                        <li><a href="facebook.com">Facebook</a></li>
                                        <li><a href="youtube.com">Youtube</a></li>
                                        <li><a href="instagram.com">Instagram</a></li>
                                        <li><a href="twitter.com">Twitter</a></li>    
                                    </ul> 
                                </Col>
                                <Col>
                                    <p className="foottitle"> Related Information</p>
                                    <ul className="list-unstyled">
                                        <li>Terms of Service</li>
                                        <li>Privacy Policy</li>
                                        <li>About us</li>
                                    </ul>

                                </Col>
                            </Row>
                            <hr></hr>
                            <p className="rights">Copyright © 2021 Healwithin</p>
                        </Container>   
                    </div>
                </div>
            </div>  
         );
    }
}
 
export default Foot;