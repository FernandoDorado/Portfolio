import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import agricore from "../../Assets/Projects/agricore.jpg";
import denim from "../../Assets/Projects/denim.png";
import suicide from "../../Assets/Projects/suicide.png";
import heroes from "../../Assets/Projects/logo-heroes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denim}
              isBlog={false}
              title="DENiM"
              description="The EU-funded DENiM project is developing an integrated toolchain for the provision of advanced digital services including secure-edge connectivity leveraging the Internet of Things (IoT), data analytics, digital twin, energy modelling and automation. Digital technologies will play a significant role by providing the ability to automatically monitor and optimise energy usage, while continuously informing users about the environmental and economic impact of decisions made at all stages of the manufacturing process."
              ghLink="https://gitlab.com/denim-project"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heroes}
              isBlog={false}
              title="HEROES"
              description="The number of people, including children, falling victim to human trafficking and child sexual abuse and exploitation (CSA/CSE) around the world continues to grow, despite increased international attention and resources. In Europe, sexually exploited women and girls make up the majority of human trafficking victims. Moreover, assistance to victims is often limited by the lack of coordination among stakeholders. In this context, the EU-funded HEROES project will explore how to use the latest technological advances and new strategies to prevent and combat CSA/CSE and human trafficking, investe the crimes and better protect victims. It will develop an ambitious, interdisciplinary, international and victim-centred approach. Its aim is to establish a coordinated contribution with law enforcement agencies to address the specific needs of victims and provide protection."
              ghLink="https://heroes-fct.es/"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agricore}
              isBlog={false}
              title="AGRICORE"
              description="The EU-funded AGRICORE project aims to use an agent-based approach to improve on traditional methods with modelling and information and communication technology (ICT). It will use computational modelling to simulate farmers’ actions as autonomous or collective entities, with contexts ranging from local to global scales. Artificial intelligence, Big Data, cloud services will be involved in the process. This open source tool will permit more efficient, optimised policies with its predictive and monitoring capabilities while ensuring transparency and constant improvement."
              ghLink="https://agricore-project.eu/"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
