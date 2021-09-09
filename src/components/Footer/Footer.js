import "./style.css"
import {useSelector} from "react-redux";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import SocialIcons from "../CommonComponents/SocialIcons/SocialIcons";
const Footer = () => {
    const colorMode = useSelector(selectColorMode)
        const [linksToggleState, setLinksToggleState] = useState("");
        const [categoriesToggleState, setCategoriesToggleState] = useState("");
        const [contactToggleState, setContactToggleState] = useState("");
        const [socialToggleState, setSocialToggleState] = useState("");

    function linksToggle() {
        setLinksToggleState(linksToggleState === "" ? "show" : "");
    }
    function categoriesToggle() {
        setCategoriesToggleState(categoriesToggleState === "" ? "show" : "");
    }
    function contactToggle() {
        setContactToggleState(contactToggleState === "" ? "show" : "");
    }
    function socialToggle() {
        setSocialToggleState(socialToggleState === "" ? "show" : "");
    }
    return (
        <>
            <footer className={colorMode}>
                {/*<div className={`wave gray footer `}></div>*/}
                <div className="container margin_60_40 fix_mobile pb-0">

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <h3 className={colorMode} data-target="#collapse_1" onClick={linksToggle}>Quick Links</h3>
                            <div className={`collapse dont-collapse-sm links ${linksToggleState}`} id="collapse_1">
                                <ul>
                                    <li><NavLink to="/about-us">About us</NavLink></li>
                                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                                    <li><NavLink to="/profile">Profile</NavLink></li>
                                    <li><NavLink to="/offers">Offers</NavLink></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className={colorMode} data-target="#collapse_2" onClick={categoriesToggle}>Categories</h3>
                            <div className={`collapse dont-collapse-sm links ${categoriesToggleState}`} id="collapse_2">
                                <ul>
                                    <li><NavLink to="menu/chicken">Chicken</NavLink></li>
                                    <li><NavLink to="menu/beef">Beef</NavLink></li>
                                    <li><NavLink to="menu/drinks">Drinks</NavLink></li>
                                    <li><NavLink to="menu/sides">Sides</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className={colorMode} data-target="#collapse_3" onClick={contactToggle}>Contacts</h3>
                            <div className={`collapse dont-collapse-sm contacts ${contactToggleState}`} id="collapse_3">
                                <ul>
                                    <li><i className="icon_house_alt"></i>Hod El-Ders<br></br>SUEZ - EGYPT</li>
                                    <li><i className="icon_mobile"></i>0109 567 1171</li>
                                    {/*<li><i className="icon_mail_alt"></i><a href="#0">info@domain.com</a></li>*/}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className={colorMode} data-target="#collapse_4" onClick={socialToggle}>Follow Us</h3>
                            <div className={`collapse dont-collapse-sm ${socialToggleState}`} id="collapse_4">
                                <SocialIcons/>

                            </div>
                        </div>
                    </div>
                    <hr/>
                        <div className="row add_bottom_25">
                            <div className="col-lg-6">

                            </div>
                            <div className="col-lg-6">
                                <ul className="additional_links">
                                    <li><a href="#0">Terms and conditions</a></li>
                                    <li><a href="#0">Privacy</a></li>
                                    <li><span>© SuperBurger</span></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </footer>

            <div id="toTop"></div>
        </>
    )
}

export default Footer
