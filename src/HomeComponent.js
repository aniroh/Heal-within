import React, { Component } from 'react';
import './Home.css';
// import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import img1 from "./medimg.png"; 
import Button from 'react-bootstrap/Button';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
             <div className="mainbody">
                 <div className="mx-5 my-4 py-4">
                     <Row className="m-4">
                         <Col>
                         <Row className="sloganTitle text-wrap my-3">Heal your mind and soul</Row>
                         <Row className='sloganbody text-wrap my-3'>Mental health surveys, weekly blogs related to mental health and much more, join us now!</Row>
                         <Row><Button variant="dark">Join for free!</Button></Row>
                         </Col>
                         <Col className="ml-3 img1"> <Image src={img1} className="img11"/></Col>
                     </Row>
                 </div>
                 <hr></hr>
                 <div className="px-5 py-4">
                     <p className="surveytext">Take a quick 2-minute mental health related survey and check your results instantly. </p>
                     <div className="surveyb "> 
                     <Button variant="outline-info" className="mb-3" >Take the survey</Button>
                     </div>

                 </div>

             </div>
         );
    }
}
 
export default Home;