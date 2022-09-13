import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import meImg from "../../Assets/Low-Poly-Neuronal-Brain.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I consider myself passionate about the world of Artificial Intelligence, Data, Infrastructure and DevOps. I am currently working as an MLOps engineer, focusing on pipeline development and managing the infrastructure required to develop AI applications. 
              <br />
              <br />
              To be able to dedicate myself to this field, I had to gain some previous experience as a Data Scientist, ML Engineer, Backend Engineer, Data Engineer, DevOps Engineer and Software Engineer, making a hard effort to understand the whole ecosystem. 
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, Bash and Python. </b>
              </i>
              <br />
              <br />Additionally, I manage a wide variety of tools and libraries such as 
              <i>
                <b className="purple"> Tensorflow Extended, PyTorch, Spark, Kafka, Hadoop, Docker, Kubernetes, KubeFlow, MLFlow, DvC, Apache Druid, Apache Trino/Presto, Grafana, MongoDB, Prometheus, Apache Hudi, Delta Lake, Apache Beam,  Pandas, Numpy,  </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Data-ML Pipelines </b> and
                also in areas related to{" "}
                <b className="purple">
                  Energies, Finances, Defense, Cybersecurity and Healthcare.
                </b>
              </i>
              <br />
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={meImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FernandoDorado"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/fdoradx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fernando-dorado-rueda/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fdoradx/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
