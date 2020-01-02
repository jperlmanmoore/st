import React, { useState, useEffect } from 'react';
// import "./Home.css";
import { Container, Row, Col } from 'reactstrap';
import grants from "../../images/image2.jpg";
// import grantsMobile from "../../images/image3.jpg";
import bw from "../../images/bw2.jpg";
import bwMobile from "../../images/bwmobile2.jpg";

const Home = () => {
  
  const imageUrl = useWindowWidth() >= 650 ? bw : bwMobile;

  return (
    <div>
      <div className="homepage" style={{ backgroundImage: `url(${imageUrl})`, height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top center'}}>
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
            <div className="text-dark, mb-1" style={{ position: "relative", textAlign: 'center', marginBottom:'-3vh' }}><h1 style={{fontWeight: 'lighter'}}>Storytellers Macon</h1></div>
                <br></br>
                <div>
                  <p className="text-dark" style={{ textAlign: "left", fontWeight: 'lighter' }}>
                    Storytellers is an event held every Second Tuesday of the month at Grant’s Lounge located at 576 Poplar St, Macon, GA 31201.
                    A different topic is given each month and storytellers are invited to speak on that topic. A featured Storyteller is asked to
                    join us each month.
                  </p>
                  <p className="text-dark" style={{ textAlign: "left", fontWeight: 'lighter' }}>
                    All are welcome — even if you just want to listen.
                  </p>
                  <p className="text-dark" style={{ textAlign: "left", fontWeight: 'lighter' }}>
                    Originally started by Crossroads with a Community Foundation Grant, the Storytellers event has been passed along to past
                    resident Angel Collins and then on to Koryn Young, who is the current Executive Director along with volunteer Board Members
                    Kevin Bradley, Rachel Gambill, George Cauble, and Bryan Beck.
                    Join us for this FREE event and hear what "off the beaten path" stories.
                    Storytellers are friendly, open, moving, life affirming, shocking, captivating, intimate, honest or just plain hilarious.
                    Sign up to tell a story or grab a beer and some food and just listen.
                </p>
                </div>

                <div className='my-5'>
                  <Row>
                    <Col>
                      <div>
                        <img src={grants} alt='grants' style={{ width: '100%', marginTop: 'auto', marginBottom: 'auto', marginRight: '2vw' }} />
                      </div>
                    </Col>
                    <Col>
                      <div className="text-dark"> 
                        <p style={{lineHeight: '4.5vh', fontWeight: 'lighter'}}>
                          Storytellers Macon's Home: <br></br>Grant's Lounge, 576 Poplar Street, Macon, GA 31201
                            <br></br>
                            <br></br>
                          When we tell stories:
                            <br></br>
                          Every Second Tuesday of the Month
                            <br></br>
                          6:30 pm Socials
                            <br></br>
                          7:00 pm Event Begins
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='text-dark, mt-2, mb-2 text-center'>
                  <Row>
                    <Col>
                      <p style={{ fontSize: '3vh', fontWeight: 'lighter'}}>Checkout upcoming and special events to see topics and speakers, and even signup to be a featured speaker.</p>
                    </Col>
                  </Row>
                </div>
                <br></br>
                <br></br>
                <br></br>
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