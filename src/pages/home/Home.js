import React, { useState, useEffect } from 'react';
// import yellowshirt from "../../images/yellowshirt.jpg"
import "./Home.css";
import { Container, Row, Col } from 'reactstrap';
import grants from "../../images/illustration.jpg";
import bw from "../../images/bw.jpg";
import bwMobile from "../../images/bwmobile.jpg";

const Home = () => {

  const imageUrl = useWindowWidth() >= 650 ? bw : bwMobile;

  return (
    <div>
    <div className="homepage" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* <img src={bw} alt='grants' className="img-fluid" style={{zIndex: 1, marginTop: "100px"}}/> */}
      <div class="homepageContent">
        <h1>Speak</h1>
        <h1>Your Truth</h1>
        
      </div>
    </div>

    <div>
      <Container fluid={true} className="bg-light">
          <Row>
            <Col>
              <div style={{align: "center", alignItems: "center"}}>
                <div className="text-dark" style={{ fontSize: "4vw", position: "relative" }}>Storytellers Macon</div>
                <br></br>
                <p className="text-dark" style={{ fontSize: "120%", textAlign: "left", width: "75%" }}>
                  Storytellers is an event held every Second Tuesday of the month at Grant’s Lounge located at 576 Poplar St, Macon, GA 31201. A different topic is given each month and storytellers are invited to speak on that topic. A featured Storyteller is asked to join us each month.
                <br></br>
                  All are welcome — even if you just want to listen.
                  <br></br>
                  Originally started by Crossroads with a Community Foundation Grant, the Storytellers event has been passed along to past resident Angel Collins and then on to Koryn Young, who is the current Executive Director along with volunteers Kevin Bradley, Rachel Gambill, George Cauble, and Bryan Beck.
                  Join us for this FREE event and hear what "off the beaten path" stories we have to offer. Storytellers are friendly, open, moving, life affirming, shocking, captivating, intimate, honest or just plain hilarious. Sign up to tell a story or grab a beer and some food and just listen.
              </p>
              <br></br>
              <br></br>

              <img src={grants} alt='grants' style={{width: "25%" , float: "left", }}/>
                <b></b>
                <p>
                  Storytellers Macon's Home: Grant's Lounge, 576 Poplar Street, Macon, GA 31201
                  <br></br>
                  Every Second Tuesday of the Month
                  <br></br>
                  6:30 pm Socials
                  <br></br>
                  7:00 pm Event Begins
                  <br></br>
                  Please see the events page for upcoming events and topic
              </p>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
    </div>
  );
};


const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return windowWidth;
};
export default Home