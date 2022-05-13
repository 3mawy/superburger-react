import {NavLink,} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectColorMode} from "../../redux/slices/nightModeSlice";

import "./style.css"
import logo from './logo_final-trimmy.png'
import NavCart from "./NavCart";
import {Col, Container, Row} from "react-bootstrap";
import NavContactUs from "./NavContactUs";

import NavLanguage from "./NavLanguage/NavLanguage";
import {useTranslation} from "react-i18next";
import {selectLanguage} from "../../redux/slices/languageSlice";
import AR from '../../translations/ar/common.json'
import {useScrollState} from "../../hooks/scrollHook";
import {useMobileState} from "../../hooks/mobileScreenHook";
import NightModeToggle from "./NightModeToggle/NightModeToggle";


const NavBar = () => {
    const dispatch = useDispatch()
    const isScrolled = useScrollState();
    let isMobile = (useMobileState() <= 991);
    const colorMode = useSelector(selectColorMode)


    const [menuState, setToggleState] = useState("");

    function sideNavToggle() {
        setToggleState(menuState === "" ? "show" : "");
    }

    const [subMenuState, setSubMenuState] = useState("");

    function showSubMenu() {
        setSubMenuState(subMenuState === "" ? "show_normal" : "");
    }

//Language TODO:Refactor
    const lang = useSelector(selectLanguage)
    const [t] = useTranslation('common');

    function mt(t, lang) {

        let text = AR
        for (let key of t.split('.')) {
            text = text[key]
        }
        return text
    }


    return (
        <nav className={`fixed-top `}>
            <header className={` header_in clearfix ${isScrolled} ${colorMode} ${lang}`}
                    dir={lang === 'ar' ? ('rtl') : null}>
                <Container className="">
                    <Row className={`d-inline-flex`}>
                        <Col className={`d-inline-flex `}>
                            <NavLanguage/>
                        </Col>
                        <Col className={`d-inline-flex `}>
                            <NightModeToggle />
                        </Col>
                    </Row>


                    <div id="logo">
                        <NavLink to="/" className='m-auto'>
                            <img src={logo} className={`logo-super ${isScrolled}`} alt=""></img>
                        </NavLink>
                    </div>
                    <div className="layer"></div>
                    <ul id="top_menu" className={`top_menu ${isScrolled}`}>
                        <li><NavLink to="/register" id="sign-in" className="login"></NavLink></li>
                        <li>
                            {isMobile ? (<NavLink to="/cart"><NavCart isMobile={isMobile}/></NavLink>) : (<NavCart/>)}
                        </li>
                    </ul>
                    <a className="open_close" onClick={sideNavToggle}>
                        <i className="icon_menu"></i><span>Menu</span>
                    </a>
                    <nav className={`main-menu ${menuState} ${isScrolled} ${colorMode}`}>
                        <div id="header_menu">
                            <a className="open_close" onClick={sideNavToggle}>
                                <i className="icon_close"></i><span>Menu</span>
                            </a>
                            <NavLink to="/"><img onClick={sideNavToggle} src={logo} width="auto" height="70"
                                                 alt=""/></NavLink>
                        </div>
                        <ul>
                            <li className={` mr-3`} onClick={sideNavToggle}>
                                <NavLink to="/offers"
                                         className={`offers_btn btn_1 ${isScrolled} pulse_bt mb-1 ml-1 pt-2  pl-4`}>
                                    {t('navbar.offers')}
                                </NavLink></li>
                            <li className="submenu" onClick={showSubMenu}>
                                <NavLink to="/menu" className="show-submenu">{t('navbar.menu')}</NavLink>
                                <ul className={subMenuState}>
                                    <NavLink
                                        to="/menu/beef">
                                        <li onClick={sideNavToggle}>{t('categories.beef')}</li>
                                    </NavLink>
                                    <NavLink
                                        to="/menu/chicken">
                                        <li onClick={sideNavToggle}>{t('categories.chicken')}</li>
                                    </NavLink>
                                    <NavLink
                                        to="/menu/specials">
                                        <li onClick={sideNavToggle}>{t('categories.specials')}</li>
                                    </NavLink>
                                    <NavLink
                                        to="/menu/sides">
                                        <li onClick={sideNavToggle}>{t('categories.sides')}</li>
                                    </NavLink>

                                </ul>
                            </li>

                            <li style={{width: "175px"}}/>
                            <li onClick={sideNavToggle}><NavLink to="/about-us">{t('navbar.aboutUs')}</NavLink></li>
                            <li onClick={sideNavToggle}><NavLink to="/contact-us">{t('navbar.contactUs')}</NavLink></li>

                        </ul>

                    </nav>
                </Container>
            </header>
            <NavContactUs isScrolled={isScrolled}/>

        </nav>

    )
}

export default NavBar
