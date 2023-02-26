import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import avatar from './assets/avatar.jpg';
import './styles/Home.css';

import LeftNavbar from './LeftNavbar';


const Home = () => {
  return (
    <section id="home" className="d-flex align-items-center vh-100">
      <Container>
        <Row>
          <Col className="text-center">
            <img
              src={avatar}
              alt="avatar"
              className="rounded-circle mb-3"
              width="200"
            />
            <h1>Hello</h1>
            <h2 className="mb-4">My name is Anh Le</h2>
            <h3 className="mb-4">I'm a coder</h3>
            <div className="social-icons d-flex justify-content-center">

              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://github.com/AnhHoang16" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://twitter.com/AnhHoang16" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  );
};

export default Home;

/*
import React from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import avatar from './assets/avatar.jpg';
import './styles/Home.css';

const Home = () => {
  return (
    <section className="d-flex align-items-center vh-100">
      <Row className='main-row-avatar'>
        <Col>
          <img
            src={avatar}
            alt="avatar"
            style={{ width: '150px', borderRadius: '50%' }}
            className="mb-3"
          />
          <h1>Hello,</h1>
          <h2>My name is Anh Le</h2>
          <h3>I'm a coder</h3>
          <div className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faGithub} size="2x" className="mx-3" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-3" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
*/