import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StageCards from "./StageCards";
import Particle from "../Particle"; 


import spychoquizz from "../../Assets/Spychoquizz.png";
import metierInfo from "../../Assets/MetierInfo.png";
import formMetier from "../../Assets/FormMetier.png";
import postgres from "../../Assets/postgres-logo.png"
import symphony from "../../Assets/symfony.png"
import react from "../../Assets/react-logo.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes Projects de <strong className="purple">Stage et Scolaire </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici tout mes projet réaliser pendant mes études
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <StageCards
              imgPath={metierInfo}
              isBlog={false}
              title="SiteMetier"
              description="Site web présentent le métier de développeur UX/UI, projet réaliser en HTML, CSS"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <StageCards
              imgPath={formMetier}
              isBlog={false}
              title="Formulmaire Metier"
              description="Intégration d'une base de donné SQL, et premier pas avec PHP"
              // ghLink=""
              // demoLink=""              
            />
          </Col>

          <Col md={6} className="project-card">
            <StageCards
              imgPath={spychoquizz}
              isBlog={false}
              title="spychoquizz"
              description="Création d'un site dynamique en équipe"
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <StageCards
              imgPath={postgres}
              isBlog={false}
              title="Gestion de data Api"
              description="L'objectif ici était d'automatiser le trier des donnés JSON pour les exploités facilement"
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <StageCards
              imgPath={symphony}
              isBlog={false}
              title="Premier pas Symphony"
              description=""
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <StageCards
              imgPath={react}
              isBlog={false}
              title="Premier pas react"
              description=""
              // ghLink=""
              // demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
