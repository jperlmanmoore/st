import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <nav>
               <Link to="/">Home</Link>
               <Link to="/events">Events</Link>
               <Link to="/media">Media</Link>
               <Link to="/about">About</Link>
               <Link to="/contactus">Contact Us</Link>
               <Link to="/donors">Donors</Link>
             </nav>
        </header>
    )
}

export default Header