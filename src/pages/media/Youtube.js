import React from 'react';
import YouTubePlayer from "../../components/youtube/YouTubePlayer";
import { Container, Row, Col } from 'reactstrap';

function YouTube() {
  return (
    <div>
      <Container style={{ marginTop: 60 }}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Row>
          <Col>
          <div style={{ width: 500, marginBottom: 20, marginTop: 10 }}>
            <YouTubePlayer link="https://www.youtube.com/embed/me2oKESuc8w" />
          </div>
          </Col>
          <Col>
          <div style={{ width: 500, marginBottom: 20, marginTop: 10 }}>
            <YouTubePlayer link="https://www.youtube.com/embed/X-uAGcMrKss" />
          </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
          <div style={{ width: 500, marginBottom: 20, marginTop: 10 }}>
            <YouTubePlayer link="https://www.youtube.com/embed/wZ_QhXpPkw0" />
          </div>
          </Col>
          <Col>
          <div style={{ width: 500, marginBottom: 20, marginTop: 10 }}>
            <YouTubePlayer link="https://www.youtube.com/embed/wdDExHiT3QM" />
          </div>
          </Col>
        </Row>

        <Row>
         <Col>
          <div style={{ width: 500, marginBottom: 20, marginTop: 10 }}>
            <YouTubePlayer link="https://www.youtube.com/embed/wdDExHiT3QM" />
          </div>
          </Col>
          <Col>
          <div style={{ width: 500, marginBottom: 20, marginTop: 10 }}>
            <YouTubePlayer link="https://www.youtube.com/embed/m2vi8QDye68" />
          </div>
        </Col>
        </Row>

        <Row>
        <Col>
          <div style={{ width: 500, marginBottom: 20, marginTop: 10 }}>
            <YouTubePlayer link="https://www.youtube.com/embed/FcTUXfFakuc" />
          </div>
          </Col>
          <Col>
          <div style={{ width: 500, marginBottom: 20, marginTop: 10 }}>
            <YouTubePlayer link="https://www.youtube.com/embed/ZoTyEk-KUTM" />
          </div>
          </Col>
        </Row>

        <Row>
          <Col>
          <div style={{ width: 500, marginBottom: 20, marginTop: 10 }}>
            <YouTubePlayer link="https://www.youtube.com/embed/STfq3ccvSB4" />
          </div>
          </Col>
          <Col>
          <div style={{ width: 500, marginBottom: 20, marginTop: 10 }}>
            <YouTubePlayer link="https://www.youtube.com/embed/V6LOOS757YA" />
          </div>
          </Col>
        </Row>

        <Row>
        <Col>
          <div style={{ width: 500, marginBottom: 20, marginTop: 10 }}>
            <YouTubePlayer link="https://www.youtube.com/embed/GIV1NnX1shw" />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default YouTube