import {
  NavLink,
} from "react-router-dom";
import {useState} from "react";
import {Navbar} from "react-bootstrap";
import "./style.css"
const NavContactUs = (props) => {
    return (
        <>
          <Navbar bg="dark"  className={`nav-contact-us nav-gradient ${props.className}`} style={{zIndex:"1000"}}>
          </Navbar>
          {/*<Navbar bg="dark" className= "p-0" style={{height:"3px"}}>*/}
          {/*</Navbar>*/}
        </>

)
}

export default NavContactUs
