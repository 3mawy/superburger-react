import {
    BrowserRouter as Router,
    NavLink,
} from "react-router-dom";
import { useState, useEffect} from "react";

import "./style.css"
import logo from './logo_final-trimmy.png'
import NavCart from "./NavCart";
import {Col, Container} from "react-bootstrap";
import NavContactUs from "./NavContactUs";

const NavBar = (props) => {

    const [menuState, setToggleState] = useState("");
    function sideNavToggle() {
        setToggleState(menuState === "" ? "show" : "");
    }

    const [scrollState, setPos] = useState("")

    useEffect (()=>{
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 5){
               setPos("scrolled")
            } else {
               setPos("")
            }
        })
    },[])

    return (
        <nav className="fixed-top">
            <header className={` header_in clearfix ${scrollState} ${props.color}`}>
                <Container className="">
                    <div id="logo">
                        <NavLink to="/" className='m-auto'>
                            <img src={logo} className={`logo-super ${scrollState}`} alt=""></img>
                        </NavLink>
                    </div>
                    <div className="layer"></div>
                    <ul id="top_menu" className={`top_menu ${scrollState}`}>
                        <li><NavLink to="/register" id="sign-in" className="login">Sign In</NavLink></li>
                        <li >
                            <NavCart/>
                        </li>
                    </ul>
                    <a href="#0" className="open_close" onClick={sideNavToggle}>
                        <i className="icon_menu"></i><span>Menu</span>
                    </a>
                    <nav  className={`main-menu ${menuState} ${scrollState}`} >
                        <div id="header_menu">
                            <a href="#0" className="open_close" onClick={sideNavToggle}>
                                <i className="icon_close"></i><span>Menu</span>
                            </a>
                            <a href="index.html"><img src="../img/logo.svg" width="162" height="35" alt=""></img></a>
                        </div>
                        <ul>
                            <li><NavLink to="/about-us">ABOUT US!</NavLink></li>
                            <li><NavLink to="/about-us">CONTACT US</NavLink></li>
                            <li style={{width: "190px"}} ></li>
                            <li className="submenu">
                                <a href="#2" className="show-submenu">MENU</a>
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
                            <li>
                                <NavLink to="/offers" className="offers_btn btn_1  pulse_bt mb-1 ml-1 pt-2  pl-4"
                                         >
                                    OFFERS
                                </NavLink></li>
                        </ul>

                    </nav>
                </Container>
            </header>
        <NavContactUs className={`${scrollState} ${props.color}`}/>

        </nav>

)
}

export default NavBar
