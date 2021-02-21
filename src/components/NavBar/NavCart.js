import {
    NavLink,
} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import cartSlice from "../../redux/slices/cartSlice";
import {cartTotal} from "./helperfunc"
const NavCart = (props) => {

    const [cartState, setToggleState] = useState("");

    function cartToggle() {
        setToggleState(cartState === "" ? "show" : "");
    }

    let product = {id: "5", name: "ana", price: "53", img: "https://via.placeholder.com/150"}

    const dispatch = useDispatch()
    const actions = cartSlice.actions
    const removeFromCart = () => dispatch(actions.removeFromCart({id: product.id}))

    const cartItems = useSelector(state => state.cart.cartItems)

    return (
        <div className={`dropdown dropdown-cart `}>
            <a href="#" onClick={cartToggle} className="cart_bt"><strong>2</strong></a>
            <div className={`dropdown-menu ${cartState} ${props.color}`}>
                <ul>
                    {cartItems.map((item, index) =>
                        <li>
                            <figure><img src={item.img} data-src="img/menu-thumb-1.jpg" alt=""
                                         width="50" height="50" className="lazy"/></figure>
                            <strong><span>{item.name}</span>{item.price} EGP
                                <strong style={{
                                    borderRadius: "50%",
                                    backgroundColor: "#f0802f",
                                    padding: ".1rem",
                                    position: "relative",
                                    right: "-5.5rem",
                                    bottom: ".8rem"
                                }}>
                                    <div style={{position: "relative", bottom: "-1px"}}>
                                        x{item.count}
                                    </div>
                                </strong>
                            </strong>
                            <a onClick={removeFromCart} className="action"><i className="icon_trash_alt"></i></a>
                        </li>
                    )}

                </ul>
                <div className="total_drop">
                    <div className="clearfix add_bottom_15"><strong>Total</strong><span>{cartTotal(cartItems)} EGP</span></div>
                    <NavLink to="/checkout" className="btn_1  offers_btn">View Cart</NavLink>
                    <NavLink to="/checkout" className="btn_1 offers_btn">Checkout</NavLink>
                </div>
            </div>
        </div>

    )
}

export default NavCart
