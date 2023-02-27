import React, { useRef, useEffect } from "react";
import Header from './Header';
import Home from './Home';
import LeftNavbar from './LeftNavbar';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Projects from './Projects';

import avatar from './assets/avatar.jpg';



import { Container, Row, Col } from "reactstrap";


function App() {

  return (
    <Container fluid>
  <Row>
    <Col xs={1} className="LeftNavbar bg-light d-flex flex-column" style={{ height: '100vh' }}>
      <LeftNavbar />
    </Col>
    <Col xs={12} className="d-flex flex-column">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col className="flex-grow-1">
          <main className="flex-grow-1">
            <Container className="py-5">
              <Home />
              <AboutMe />
              <Resume />
              <Projects />
            </Container>
          </main>
        </Col>
      </Row>
    </Col>
  </Row>
</Container>


//     <Container fluid>
//   <Row style={{ display: 'flex' }}>
//     <Col xs={1} className="LeftNavbar bg-light d-flex flex-column" style={{ height: '100vh' }}>
//       <LeftNavbar />
//     </Col>
//     <Col xs={12} className="d-flex flex-column">
//       <header>
//         <Header />
//       </header>
//       <main className="flex-grow-1">
//         <Container className="py-5">
//           <Home />
//           <AboutMe />

//         </Container>
//       </main>
//     </Col>
//   </Row>
// </Container>



  );
}

export default App;

