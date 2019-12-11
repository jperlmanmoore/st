// import React from "react";
// import Home from '../../pages/home/Home';
// import Events from '../../pages/events/Events';
// import Media from '../../pages/media/Media';
// import About from '../../pages/about/About';
// import Donors from '../../pages/donors/Donors';
// import ContactUs from '../../pages/contactus/ContactUs';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
//   useRouteMatch
// } from "react-router-dom";

// export default function Navbar() {
//     return (
//       <Router>
//         <div>
//           <nav>
//               <Link to="/">Home</Link>
//               <Link to="/events">Events</Link>
//               <Link to="/media">Media</Link>
//               <Link to="/about">About</Link>
//               <Link to="/contactus">Contact Us</Link>
//               <Link to="/donors">Donors</Link>
//             </nav>
  
//           <hr />
  
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/events">
//               <Events />
//             </Route>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/donors">
//               <Donors />
//             </Route>
//             <Route path="/media">
//               <Media />
//             </Route>
//             <Route path="/contactus">
//               <ContactUs />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     );
//   }