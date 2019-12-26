import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
//   NavbarText
} from 'reactstrap';
import logo from "../../images/transparent_storytellers.png"

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top text-dark" color="light" light expand="md">
        <NavbarBrand  className="ml-5" href="/"><img className="logo" alt="logo" src={logo}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mt-5 pt-4" navbar>

            <NavItem className="mx-2">
              <NavLink className="text-dark" style={{fontWeight: 'lighter'}} href="/about/">About</NavLink>
            </NavItem>

            <NavItem className="mx-2">
              <NavLink className="text-dark" style={{fontWeight: 'lighter'}} href="/contactus/">Contact</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar className="mx-2">
              <DropdownToggle nav className="text-dark" style={{fontWeight: 'lighter'}}>
                Sponsors & Donors
              </DropdownToggle>
              <DropdownMenu center="true">
                <DropdownItem>
                <NavItem>
              <NavLink className="text-dark" style={{fontWeight: 'lighter'}} href="/support/sponsors/">Sponsors</NavLink>
            </NavItem>
                </DropdownItem>               
              </DropdownMenu>
            </UncontrolledDropdown>
            
            <UncontrolledDropdown  nav inNavbar className="mx-2">
              <DropdownToggle nav className="text-dark" style={{fontWeight: 'lighter'}}>
                Media
              </DropdownToggle>
              <DropdownMenu center="true">
                <DropdownItem>
                <NavItem>
              <NavLink className="text-dark" style={{fontWeight: 'lighter'}} href="/media/youtube/">Youtube</NavLink>
            </NavItem>
                </DropdownItem>
                <DropdownItem>
                <NavItem>
              <NavLink className="text-dark" style={{fontWeight: 'lighter'}} href="/media/news/">News</NavLink>
            </NavItem>
                </DropdownItem>              
              </DropdownMenu>
            </UncontrolledDropdown>


            <UncontrolledDropdown  nav inNavbar className="mx-2">
              <DropdownToggle nav className="text-dark" style={{fontWeight: 'lighter'}}>
                Events
              </DropdownToggle>
              <DropdownMenu right="true">
                <DropdownItem>
                <NavItem>
              <NavLink className="text-dark" style={{fontWeight: 'lighter'}} href="/events/featuredstoryteller/">Featured Storyteller</NavLink>
            </NavItem>
                </DropdownItem>
                <DropdownItem>
                <NavItem>
              <NavLink className="text-dark" style={{fontWeight: 'lighter'}} href="/events/specialevents/">Special Events</NavLink>
            </NavItem>
                </DropdownItem> 
                <DropdownItem>
                <NavItem>
              <NavLink className="text-dark" style={{fontWeight: 'lighter'}} href="/events/upcomingevents/">Upcoming Events</NavLink>
            </NavItem>
                </DropdownItem>              
              </DropdownMenu>
            </UncontrolledDropdown>          
          
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;