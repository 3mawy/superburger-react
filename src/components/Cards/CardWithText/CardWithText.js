import sample from './sample.jpeg'
import "./style.css"
import { Col, Row } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types';
import cartSlice from "../../../redux/slices/cartSlice";


const CardWithText = ({id, name, price, img}) => {
    let product = {id: "5", name: "ana", price: "53", img: "https://via.placeholder.com/150"}

    const colorMode = useSelector(state => state.nightMode.mode)
    const dispatch = useDispatch()
    const actions = cartSlice.actions
    const addToCart = () => dispatch(actions.addToCart({product: product }))
    return (
            <Col className="p-0 pr-2 pl-2" >
            <div className={` card-with-side-text ${colorMode}`} style={{border: "0", marginBottom:"1rem"}}>
                <NavLink to="/items-single" className={`${colorMode}`}>
                <Row className=" no-gutters">
                    <Col className="col-auto img-wrapper" >
                        <img src={sample} className="img-fluid hover-zoom" alt=""/>
                    </Col>
                    <Col>
                        <div className="card-block px-2">
                        <Row>
                            <Col>
                                    <h5 className={`${colorMode}`} style={{marginTop: ".3rem"}}>{name}</h5>
                            </Col>
                            {/*<Col xs={3} className="pl-1">*/}
                            {/*    <div className="score"><strong>8.9</strong></div>*/}
                            {/*</Col>*/}
                        </Row>
                        <Row>
                            <Col>
                                <p className={`card-text mb-1 `}>safaf  safaf safaf adfdasga adfdasga agadgdasg  fadfadf adf agdag adf</p>
                            </Col>
                        </Row>
                        <Row xs={2} className="align-items-end">
                            <Col xs={6}   className="text-left pr-0">
                                    <h5 className={`card-title mb-2 ${colorMode}`} style={{marginTop: ".3rem"}}>{price}
                                        <span style={{color: ''}}>
                                            EGP
                                        </span>
                                    </h5>
                            </Col>
                            <Col xs={5} className="text-right pr-0 pl-1">
                                <NavLink to="#" onClick={addToCart} className="btn-primary btn_1 small gradient pulse_bt mb-1 ml-1">Order</NavLink>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
                </NavLink>
            </div>
        </Col>
)
}

CardWithText.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
}
export default CardWithText
