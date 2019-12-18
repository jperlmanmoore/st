import React, { useState, useEffect } from 'react';
import "./Home.css";
import { Container, Row, Col } from 'reactstrap';
import grants from "../../images/image2.jpg";
// import grantsMobile from "../../images/image3.jpg";
import bw from "../../images/bw2.jpg";
import bwMobile from "../../images/bwmobile2.jpg";

const Home = () => {

  const imageUrl = useWindowWidth() >= 650 ? bw : bwMobile;


  return (
    <div>
      <div className="homepage" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div >
          <p className='text-warning' style={{ position: 'absolute', top: '65%', right: '15%', fontSize: '8vh', fontStyle: 'italic' }}>Speak</p>
          <p className='text-warning' style={{ position: 'absolute', top: '75%', right: '15%', fontSize: '8vh', fontStyle: 'italic' }}>Your Truth</p>

        </div>
      </div>

      <div>
        <Container fluid={true} className="bg-light">
          <Row>
            <Col>
              <br></br>
              <div style={{ alignItems: "center", marginLeft: "10vw", marginRight: "10vw" }}>
                <div className="text-dark" style={{ fontSize: "4vw", position: "relative", textAlign: 'center' }}>Storytellers Macon</div>
                <br></br>
                <div>
                  <p className="text-dark" style={{ fontSize: "1.5vw%", textAlign: "left", width: "100%" }}>
                    Storytellers is an event held every Second Tuesday of the month at Grant’s Lounge located at 576 Poplar St, Macon, GA 31201.
                    A different topic is given each month and storytellers are invited to speak on that topic. A featured Storyteller is asked to
                    join us each month.
                </p>
                  <p>
                    All are welcome — even if you just want to listen.
                </p>
                  <p>
                    Originally started by Crossroads with a Community Foundation Grant, the Storytellers event has been passed along to past
                    resident Angel Collins and then on to Koryn Young, who is the current Executive Director along with volunteer Board Members
                    Kevin Bradley, Rachel Gambill, George Cauble, and Bryan Beck.
                    Join us for this FREE event and hear what "off the beaten path" stories.
                    Storytellers are friendly, open, moving, life affirming, shocking, captivating, intimate, honest or just plain hilarious.
                    Sign up to tell a story or grab a beer and some food and just listen.
                </p>
                </div>
                <br></br>
                <br></br>

                <div className='clearfix' style={{ alignItem: 'center', height: '50vh' }}>
                  <img className='float-left' src={grants} alt='grants' style={{marginBottom: '2vh', marginRight: '2vw'}} />
                  <p >
                    Storytellers Macon's Home: Grant's Lounge, 576 Poplar Street, Macon, GA 31201
                  <br></br>
                    Every Second Tuesday of the Month
                  <br></br>
                    6:30 pm Socials
                  <br></br>
                    7:00 pm Event Begins
                  <br></br>
                    <br></br>
                    Please see the events page for upcoming events and topic
                </p>
                </div>
                
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