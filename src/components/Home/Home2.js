import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Home3 from "./Home3";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <br/>
            <br/>
            <h1 style={{ fontSize: "2.6em" }}>
              Je suis étudiant en  <span className="purple"> BTS SIO </span>
            </h1>
            <p className="home-about-body">
              <br />
              Bac Pro SN option ssiht de <span className="purple">2019</span> à <span className="purple">2022</span>
              <span className="purple"> 
              <br/>
              (Sûrté et Sécurité des Infrastructure, de l'Habitat et du Tertiare)</span>
            </p>
            <p className="home-about-body">
              Actuellement en  2ème année BTS SIO options SLAM
              <span className="purple">
              <br/>
              (solutions logicielles et applications métiers)</span>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Home3 />
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Suivez moi sur</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Noone-J"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
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
