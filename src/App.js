import React from "react"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import ContactUS from './pages/contactus/ContactUs'
import Media from './pages/media/Media'
import Support from "./pages/support/Support"
import Sponsors from "./pages/support/Sponsors"
import Events from './pages/events/Events'
import FeaturedStoryteller from './pages/events/FeaturedStoryteller'
import SpecialEvents from './pages/events/SpecialEvents'
import UpcomingEvents from './pages/events/UpcomingEvents'
import Youtube from './pages/media/Youtube'
import News from './pages/media/News'

import { Switch, Route } from "react-router-dom"

function App() {
    return (
        <div>
            <Header />
            <Switch>
                
                <Route exact path="/">
                    <Home />
                </Route>
                
                <Route exact path="/about">
                    <About />
                </Route>
                
                <Route exact path="/events">
                    <Events />
                </Route>
                <Route path="events/upcomingevents">
                    <UpcomingEvents />
                </Route>
                <Route path="events/specialevents">
                    <SpecialEvents />
                </Route>
                <Route path="events/featuredstoryteller">
                    <FeaturedStoryteller />
                </Route>
                
                <Route exact path="/media">
                    <Media />
                </Route>
                <Route path="/media/youtube">
                    <Youtube />
                </Route>
                <Route path="/media/news">
                    <News />
                </Route>
                
                <Route path="/contactus">
                    <ContactUS />
                </Route>
                <Route exact path="/support">
                    <Support />
                </Route>
                <Route path="/support/sponsors">
                    <Sponsors />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App
