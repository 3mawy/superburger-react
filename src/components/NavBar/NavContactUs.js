import "./style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons";
import {Col, Navbar, Row} from "react-bootstrap";
import SocialIcons from "../CommonComponents/SocialIcons/SocialIcons";

import {useSelector} from "react-redux";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import {useScrollState} from "../../hooks/scrollHook";
import {useMobileState} from "../../hooks/mobileScreenHook";

const NavContactUs = (props) => {
    const colorMode = useSelector(selectColorMode)
    const isScrolled = useScrollState();
    let isMobile = (useMobileState() <= 991);

    return (
        <>
            <Navbar className={`nav-contact-us pattern_orange ${isScrolled} ${colorMode}`} style={{zIndex: "1000"}}>
                <Row className={`align-items-center justify-content-between`} style={{width: '100%'}}>
                    <Col xs={6} className={`phone_nav d-inline-flex justify-content-start`}>
                        {isMobile ? (
                            <a href={`tel://01095671171`} className={`pb-3 phone-icon`}>
                                <FontAwesomeIcon className={` `} size="lg" icon={faPhoneSquareAlt}/>
                            </a>
                        ) : (<p className={`concert_one_font pb-2 
                        ${isScrolled === 'scrolled' ? ('collapse') : null}`}>
                            <i className={`icon_mobile `}/>
                            0109 567 1171</p>)}
                    </Col>
                    <Col xs={6} className={`social_icons_nav d-inline-flex justify-content-end`}>
                        <SocialIcons className={`${isScrolled === 'scrolled' ? ('collapse') : null}`}/>
                    </Col>
                </Row>
            </Navbar>

        </>

    )
}

export default NavContactUs
