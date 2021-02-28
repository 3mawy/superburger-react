import {
    NavLink,
} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, selectCartItems} from "../../redux/slices/cartSlice";
import {cartTotal, cartTotalCount} from "./helperfunc"
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import {useTranslation} from "react-i18next";

const NavCart = () => {

    const [cartState, setToggleState] = useState("");

    function cartToggle() {
        setToggleState(cartState === "" ? "show" : "");
    }

    let product = {id: "5", name: "ana", price: "53", img: "https://via.placeholder.com/150"}

    const dispatch = useDispatch()
    const removeItemFromCart = () => dispatch(removeFromCart({id: product.id}))

    const colorMode = useSelector(selectColorMode)
    const cartItems = useSelector(selectCartItems)

    const [t] = useTranslation('common');
    return (
        <div className={`dropdown dropdown-cart `}>
            <a href="#" onClick={cartToggle} className="cart_bt"><strong>{cartTotalCount(cartItems)}</strong></a>
            <div className={`dropdown-menu ${cartState} ${colorMode}`}>
                <ul>
                    {cartItems.map((item, index) =>
                        <li>
                            <figure><img src={item.img} data-src="img/menu-thumb-1.jpg" alt=""
                                         width="50" height="50" className="lazy"/></figure>
                            <strong><span>{item.name}</span>{item.price} EGP
                                <strong id={`counter_fix`}>
                                    <div style={{position: "relative", bottom: "-1px"}}>
                                        x{item.count}
                                    </div>
                                </strong>
                            </strong>
                            <a onClick={removeItemFromCart} className="action"><i className="icon_trash_alt"></i></a>
                        </li>
                    )}

                </ul>
                <div className="total_drop">
                    <div className="clearfix add_bottom_15">
                        <strong>Total</strong><span>{cartTotal(cartItems)} EGP</span></div>
                    <NavLink to="/checkout" className="btn_1 cart offers_btn">{t('cart.viewCart')}</NavLink>
                    <NavLink to="/checkout" className="btn_1 cart offers_btn">{t('cart.checkOut')}</NavLink>
                </div>
            </div>
        </div>

    )
}

export default NavCart
