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
                            <NavCart color = {props.color}/>
                        </li>
                    </ul>
                    <a href="#0" className="open_close" onClick={sideNavToggle}>
                        <i className="icon_menu"></i><span>Menu</span>
                    </a>
                    <nav  className={`main-menu ${menuState} ${scrollState} ${props.color}`} >
                        <div id="header_menu">
                            <a href="#0" className="open_close" onClick={sideNavToggle}>
                                <i className="icon_close"></i><span>Menu</span>
                            </a>
                            <a href="index.html"><img src={logo} width="auto" height="70" alt=""></img></a>
                        </div>
                        <ul>
                            <li><NavLink to="/about-us">ABOUT US!</NavLink></li>
                            <li><NavLink to="/about-us">CONTACT US</NavLink></li>
                            <li style={{width: "190px"}} ></li>
                            <li className="submenu">
                                <NavLink to="/menu" className="show-submenu">MENU</NavLink>
                                <ul>
                                    <li><NavLink to="/menu/beef">Beef</NavLink></li>
                                    <li><NavLink to="/menu/chicken">Chicken</NavLink></li>
                                    <li><NavLink to="/menu/appetizers">appetizers</NavLink></li>
                                    <li><NavLink to="/checkout">Checkout</NavLink></li>
                                    <li><NavLink to="/confirm">confirm order</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/offers" className="offers_btn btn_1  pulse_bt mb-1 ml-1 pt-2  pl-4">
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
