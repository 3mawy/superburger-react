import {
  NavLink,
} from "react-router-dom";
import { useState } from "react";

import "./style.css"
import logo from './logo_final-trimmy.png'
import NavCart from "./NavCart";
import {Container} from "react-bootstrap";
const NavBar = (props) => {
    const [menuState, setToggleState] = useState("");
    function sideNavToggle() {
        setToggleState(menuState === "" ? "show" : "");
    }

    return (
            <header className=" header_in clearfix">
                <Container className="">
                    <div id="logo">
                        <NavLink to="/" className='m-auto'>
                            <img src={logo} className={`logo-super`} alt=""></img>
                        </NavLink>
                    </div>
                    <div className="layer"></div>
                    <ul id="top_menu">
                        <li><NavLink to="/register" id="sign-in" className="login">Sign In</NavLink></li>
                        <li >
                            <NavCart/>
                        </li>
                    </ul>
                    <a href="#0" className="open_close" onClick={sideNavToggle}>
                        <i className="icon_menu"></i><span>Menu</span>
                    </a>
                    <nav className={`main-menu ${menuState}`} >
                        <div id="header_menu">
                            <a href="#0" className="open_close" onClick={sideNavToggle}>
                                <i className="icon_close"></i><span>Menu</span>
                            </a>
                            <a href="index.html"><img src="../img/logo.svg" width="162" height="35" alt=""></img></a>
                        </div>
                        <ul>
                            <li><NavLink to="/about-us">About Us</NavLink></li>
                            <li><NavLink to="/about-us">About Us</NavLink></li>
                            <li style={{width: "190px"}}></li>
                            <li className="submenu">
                                <a href="#0" className="show-submenu">Home</a>
                                <ul>
                                    <li><NavLink to="/about-us">About Us</NavLink></li>
                                    <li><NavLink to="/checkout">Checkout</NavLink></li>
                                    <li><NavLink to="/items-list">Items List</NavLink></li>
                                    <li><NavLink to="/confirm">confirm order</NavLink></li>
                                    <li><a href="index-5.html">GDPR Cookie Bar EU Law</a></li>
                                    <li><a href="header-user-logged.html">Header User Logged</a></li>
                                    <li><a href="header-cart-top.html">Header Cart Top</a></li>
                                </ul>
                            </li>
                            <li><NavLink to="/offers">Offers</NavLink></li>
                        </ul>

                    </nav>
                </Container>
            </header>

)
}

export default NavBar
