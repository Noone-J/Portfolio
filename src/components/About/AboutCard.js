import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Toujours <span className="purple">Moi </span>
            <br />
            Hormi le dévelopement je suis intérésser par:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Le Jeu vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Les vidéo Storytelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Les Webtoon, manga, etc
            </li>
          </ul>
          <footer className="blockquote-footer">Noone-J</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
