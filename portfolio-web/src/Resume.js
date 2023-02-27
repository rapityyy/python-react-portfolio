import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import resumePDF from './assets/AnhLe2022Resume.pdf';

const navHeight = 50; // Replace with the height of your navbar in pixels

const Resume = () => {
  return (
    <section id="resume" className="d-flex align-items-center vh-100">
        <Container fluid className="d-flex justify-content-center align-items-center">
            <Row>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-center pr-md-4">
                {/* <iframe src={resumePDF} title="Resume" width="800px" height="100vh" /> */}
                <iframe
                    src={resumePDF}
                    title="Resume"
                    width="800px"
                    height={`calc(100vh - ${navHeight}px)`}
                    style={{ border: "none" }}
                />
            </Col>
            <Col xs={12} md={3} className="d-flex justify-content-center align-items-center mb-4 mb-md-0 pl-md-4">
                <Button color="primary" href={resumePDF} target="_blank" download>Download Resume</Button>
            </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Resume;
