import "./style.css"
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {selectColorMode} from "../../../redux/slices/nightModeSlice";
import BackSign from "../BackSign/BackSign";
import {Col, Row} from "react-bootstrap";
import Smoke from "../Smoke/Smoke";

const Banner = ({title, desc}) => {
    const colorMode = useSelector(selectColorMode)
    // const name = window.location.pathname;

    return (

        <div className={`promo ${colorMode} `}  >
            <Row className={`justify-content-between`}>
                <Col xs={6} className={`justify-content-start text-left d-inline-flex`}>
                    <div>
                        <BackSign linkTo={`/`}/>
                        <h3 className={`pr-1 concert_one_font  text-uppercase d-inline`}>{title || 'menu'}</h3>
                    </div>

                </Col>
                <Col xs={2} className={`mb-1 justify-content-end text-right d-inline-flex`}>
                  <Smoke/>
                    <i className="flipped icon-food_icon_delivery pt-1 "></i>
                </Col>
            </Row>
            <p>{desc}</p>
        </div>
    )
}
Banner.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
}

export default Banner
