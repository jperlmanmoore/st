import React from 'react';
// import yellowshirt from "../../images/yellowshirt.jpg"
import "./home.css";
import { Container, Row, Col } from 'reactstrap';


export default function Home() {
  return (
    <div className="homepage">

      <div>
        <Container fluid={true}>
          <Row>
            <Col>
              <div color="light" style={{ lineHeight: 1.25, marginTop: 425, fontSize: "6vw", textAlign: "right", fontStyle: "italic", fontSynthesis: "bold", marginRight: 25 }} className="text-white">Speak<br></br>Your Truth</div>
            </Col>
          </Row>
        </Container>
      </div>

      <br></br>
      <br></br>

      <div>
        <Container fluid={true} className="bg-light">
          <Row>
            <Col>
            <div>
              <div className="text-dark" style={{ fontSize: "4vw", position: "relative" }}>who, what, when, where</div>
              <p>Storytellers Macon</p>
            </div>
            </Col>
          </Row>
        </Container>
      </div>

      



    </div>


  );
};

