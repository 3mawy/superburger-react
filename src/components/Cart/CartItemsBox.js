import {useSelector} from "react-redux";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import "./style.css"
import CartList from "./CartList";
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { selectItemCount} from "../../redux/slices/cartSlice";

const CartItemsBox = () => {
    const colorMode = useSelector(selectColorMode)
    const itemsCount = useSelector(selectItemCount)
    return (
        <div className="col-xl-7 col-lg-7">
            <div className={`box_order_form ${colorMode}`}>
                <div className="pt-2">
                </div>
                <div className="box_order_form m-0 cart_banner" >
                    <Row className={`justify-content-lg-between`}>
                        <Col xs={7} className={` d-inline-flex`}>
                            <p className={`pl-3  cart_text `}>cart
                                <span> ( {itemsCount} items) </span>
                            </p>
                        </Col>
                        <Col className={`mr-3 justify-content-sm-end d-inline-flex`}>
                            <NavLink to={`/menu`} className={` add_more_items_button`}>+ ADD MORE ITEMS</NavLink>
                        </Col>

                    </Row>

                </div>
                <div className="">
                    <CartList/>

                </div>
            </div>
        </div>
    )
}

export default CartItemsBox
