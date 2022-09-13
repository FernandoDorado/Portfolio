import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fernando Dorado </span>
            from <span className="purple"> Alcalá del Valle (Cádiz), España.</span>
            <br />I am MLOps engineer, although I'm continuously pursuing new challenges and learning new skills.
            <br />
            <br />
            Apart from work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Extreme sports, mainly Kitesurfing and Snowboarding
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing online games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
