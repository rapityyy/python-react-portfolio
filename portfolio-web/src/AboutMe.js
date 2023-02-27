import React, { useRef, useEffect } from "react";
import avatar from './assets/avatar.jpg';
import { Container, Row, Col } from "reactstrap";




const AboutMe = () => {

  return (
    <section id="aboutme" className="d-flex align-items-center vh-100">
        <Container fluid className="d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                <Row>
                    <Col xs={12} md={4} className="d-flex justify-content-center mb-4 mb-md-0">
                    <img src={avatar} alt="Avatar" className="" style={{ width: "100%", maxWidth: "200px" }} />
                    </Col>
                    <Col xs={12} md={8} className="d-flex flex-column justify-content-center">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat tincidunt justo et consectetur. Vestibulum sollicitudin bibendum tellus in facilisis. Nullam feugiat venenatis dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed laoreet vel massa nec convallis. Fusce eu tristique augue.</p>
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>
    </section>
  );
}
export default AboutMe;
