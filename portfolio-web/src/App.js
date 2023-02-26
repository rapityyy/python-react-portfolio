import React from 'react';
import Header from './Header';
import Home from './Home';
import LeftNavbar from './LeftNavbar';
import AboutMe from './AboutMe';
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
      <header>
        <Header />
      </header>
      <main className="flex-grow-1">
        <Container className="py-5">
          <Home />
          <AboutMe />

        </Container>
      </main>
    </Col>
  </Row>
</Container>


    // <Container fluid>
    //   <Row>
    //     <div style={{position: 'fixed'}}>
    //       <Col xs={3} className="bg-light flex-column" style={{  width:'15%', height: '100vh' }}>
    //         <LeftNavbar />
    //       </Col>
    //     </div>
    //     <Col xs={10} className="flex-column" >
    //       <header>
    //       <Header />
    //       </header>
    //       <main className="flex-grow-1">
    //         <Home />
    //       </main>
    //       <AboutMe />
    //     </Col>
    //   </Row>
    // </Container>


  );
}

export default App;

{/* <section id="aboutme" className="d-flex align-items-center vh-100">
<Row className="justify-content-center">
  <Col md={3}>
    <img src={avatar} alt="Avatar" className="img-fluid rounded-circle" />
  </Col>
  <Col md={9}>
    <h2>About Me</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus mi sit amet ligula accumsan, in euismod nulla vestibulum. Nunc id sem est. Nulla vitae gravida leo, quis gravida mauris. Donec vel justo in lectus hendrerit venenatis. Fusce porta interdum blandit. Duis dapibus lacus sed lectus egestas hendrerit.</p>
  </Col>
</Row>
</section> */}