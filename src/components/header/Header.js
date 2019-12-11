import React from "react"
// import { Link } from "react-router-dom"
import Navbar from "../navbar/Navbar"
// import logo1 from "../../images/logo1.png"

function Header() {
    return (
        <header>
            <Navbar />
            {/* <nav className="position-sticky navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand float-right" href="/">Storytellers Macon</a>
                

                <div id="navbarSupportedContent float-left">

                    <Link className="text-muted mx-1" to="/">Home</Link>

                    <Link className="text-muted mx-1" to="/events">Events</Link>

                    <Link className="text-muted mx-1" to="/media">Media</Link>

                    <Link className="text-muted mx-1" to="/about">About</Link>

                    <Link className="text-muted mx-1" to="/contactus">Contact Us</Link>

                    <Link className="text-muted mx-1" to="/donors">Donors</Link>

                </div>

            </nav> */}
        </header>
    )
}

export default Header

