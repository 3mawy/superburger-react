import {
    NavLink,
} from "react-router-dom";
import { useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectColorMode, toggle} from "../../redux/slices/nightModeSlice";

import "./style.css"
import logo from './logo_final-trimmy.png'
import NavCart from "./NavCart";
import {Container} from "react-bootstrap";
import NavContactUs from "./NavContactUs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {

    const [menuState, setToggleState] = useState("");
    function sideNavToggle() {
        setToggleState(menuState === "" ? "show" : "");
    }

    const [subMenuState, setSubMenuState] = useState("");
    function showSubMenu() {
        setSubMenuState(subMenuState === "" ? "show_normal" : "");
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

    const dispatch = useDispatch()
    const colorModeToggle = () => dispatch(toggle())

    const colorMode = useSelector(selectColorMode)
    return (
        <nav className="fixed-top">
            <header className={` header_in clearfix ${scrollState} ${colorMode}`}>
                <Container className="">
                     <a className={`night-mode-icon  ${colorMode}`}
                            onClick={colorModeToggle}>
                    <FontAwesomeIcon icon={colorMode === "" ? faSun : faMoon }
                                     size="lg" spin
                                     style={{animation: "fa-spin 3.5s infinite linear"}}/>
                    </a>
                    <div id="logo">
                        <NavLink to="/" className='m-auto'>
                            <img src={logo} className={`logo-super ${scrollState}`} alt=""></img>
                        </NavLink>
                    </div>
                    <div className="layer"></div>
                    <ul id="top_menu" className={`top_menu ${scrollState}`}>
                        <li><NavLink to="/register" id="sign-in" className="login">Sign In</NavLink></li>
                        <li >
                            <NavCart />
                        </li>
                    </ul>
                    <a  className="open_close" onClick={sideNavToggle}>
                        <i className="icon_menu"></i><span>Menu</span>
                    </a>
                    <nav  className={`main-menu ${menuState} ${scrollState} ${colorMode}`} >
                        <div id="header_menu">
                            <a  className="open_close" onClick={sideNavToggle}>
                                <i className="icon_close"></i><span>Menu</span>
                            </a>
                            <NavLink to="/"><img onClick={sideNavToggle} src={logo} width="auto" height="70" alt=""></img></NavLink>
                        </div>
                        <ul>
                            <li onClick={sideNavToggle}><NavLink to="/about-us">ABOUT US!</NavLink></li>
                            <li onClick={sideNavToggle}><NavLink to="/about-us">CONTACT US</NavLink></li>
                            <li style={{width: "190px"}} ></li>
                            <li  className="submenu" onClick={showSubMenu}>
                                <NavLink to="/menu" className="show-submenu">MENU</NavLink>
                                <ul className={subMenuState}>
                                    <li onClick={sideNavToggle}><NavLink to="/menu/beef">Beef</NavLink></li>
                                    <li onClick={sideNavToggle}><NavLink to="/menu/chicken">Chicken</NavLink></li>
                                    <li onClick={sideNavToggle}><NavLink to="/menu/appetizers">appetizers</NavLink></li>
                                    <li onClick={sideNavToggle}><NavLink to="/checkout">Checkout</NavLink></li>
                                    <li onClick={sideNavToggle}><NavLink to="/confirm">confirm order</NavLink></li>
                                </ul>
                            </li>
                            <li onClick={sideNavToggle}>
                                <NavLink to="/offers" className={`offers_btn btn_1 ${scrollState} pulse_bt mb-1 ml-1 pt-2  pl-4`}>
                                    OFFERS
                                </NavLink></li>
                        </ul>

                    </nav>
                </Container>
            </header>
        <NavContactUs className={`${scrollState} ${colorMode}`}/>

        </nav>

)
}

export default NavBar
