import "./style.css"
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import PropTypes from 'prop-types';
import {selectColorMode} from "../../redux/slices/nightModeSlice";
// import {addToCart} from "../../../redux/slices/cartSlice"
import {useEffect, useState} from "react";
import {useMobileState} from "../../hooks/mobileScreenHook";

const CartItem = ({id, name, size, price, img, quantity}) => {
    const colorMode = useSelector(selectColorMode)

    let product = {item: id, name: name, img: img, size: size}
    console.log(product)


let isMobile = (useMobileState() <= 575);
    return (
        <Col className="p-0 pr-2 pl-2">
            <div className="form-group">
                <div className={` card-with-side-text cart ${colorMode}`} style={{border: "0", marginBottom: "1rem"}}>

                    <Row className=" no-gutters ">
                        <Col className="col-auto img-wrapper ml-md-3">
                            <NavLink to={`/menu-items/${id}`} className={`${colorMode}`}>
                                <img src={img} className="img-fluid hover-zoom" alt=""/>
                            </NavLink>

                        </Col>

                        <Col>
                            <div className="card-block px-2 ">
                                <Row className={`mt-2`}>
                                    <Col xs={6} sm={6} className="d-inline-flex">
                                        <h4 className={`text-uppercase ${colorMode} mb-0`}
                                            >{name}</h4>
                                    </Col>
                                    <Col xs={6} sm={6} className="justify-content-end d-inline-flex">
                                        <span className={`mr-4  counter_font`}>{quantity}</span>
                                    </Col>
                                </Row>

                                <Row xs={2} className="align-items-end pb-1">
                                    <Col xs={6} className="text-left pr-0 pb-1">
                                        <span style={{fontSize: "1.1rem"}}>Double</span>
                                    </Col>

                                </Row>

                                <Row xs={2} className="align-items-end">
                                    <Col xs={2} sm={6} className="justify-content-start pr-0">
                                        {/*<a href=""*/}
                                        {/*   className="order_button btn_1 offers_btn customize_btn">*/}
                                        {/*    {isMobile? (<FontAwesomeIcon*/}
                                        {/*                     icon={faEdit}/>):("Customize")}</a>*/}

                                    </Col>

                                    <Col xs={6} className="text-right pr-4 pl-1 justify-content-end d-inline-flex">
                                        <p className={`card-title mb-1 ${colorMode}`}
                                           style={{}}>{}
                                            <span style={{fontSize: '1.2rem'}}>
                                                <strong>{price * quantity}</strong> EGP
                                        </span>
                                        </p>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        </Col>
    )
}
CartItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    size: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
}
CartItem.defaultProps = {
    name: "",
    price: "",
    desc: "",
    img: "https://via.placeholder.com/150",
    quantity: 1
}
export default CartItem
