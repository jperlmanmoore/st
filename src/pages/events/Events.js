// import React from 'react';
// // import UpcomingEvents from '../upcomingevents/UpcomingEvents'
// import { Link } from "react-router-dom";
// import UpcomingEvents from './UpcomingEvents';
// import SpecialEvents from './SpecialEvents';

// function Events() {
//   return (
//     <div>
//         <h1>Events</h1>
//         <ul>
//             <li><Link to="/events/upcomingevents">Upcoming Events</Link></li>
//             <li><Link to="/events/specialevents">Special Events</Link></li>
//         </ul>
//     </div>
// )
// } 

// export default Events

import React from "react"
import {Link} from "react-router-dom"

// import SpecialEvents from "./SpecialEvents"
// import UpcomingEvents from "./UpcomingEvents"

function Events() {
    return (
        <div>
            <h1>Events</h1>
            <ul>
                <li><Link to="/events/specialevents">Special Events</Link></li>
                <li><Link to="/events/upcomingevents">Upcoming Events</Link></li>
                <li><Link to="/events/featuredstoryteller">Featured Storyteller</Link></li>
            </ul>

        </div>
    )
}

export default Events