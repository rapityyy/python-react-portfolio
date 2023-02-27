import React from "react";
import { Container, Row, Col } from "reactstrap";
import projectData from "./projectData"; // Assuming you have an array of project data stored in projectData.js

const Projects = () => {
  const renderProjects = () => {
    return projectData.map((project, index) => {
      return (
        <Col xs={12} md={6} lg={4} key={index}>
          <div className="project-box">
            <img src={project.img} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <section id="projects" className="d-flex align-items-center vh-100">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>
        <Row>{renderProjects()}</Row>
      </Container>
    </section>
  );
};

export default Projects;
