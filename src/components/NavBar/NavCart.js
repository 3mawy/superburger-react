import {
  NavLink,
} from "react-router-dom";
import {useState} from "react";
import "./style.css"

const NavCart = (props) => {

    const [cartState, setToggleState] = useState("");
    function cartToggle() {
        setToggleState(cartState === "" ? "show" : "");
    }

    return (
        <div className={`dropdown dropdown-cart `}>
            <a href="#" onClick={cartToggle} className="cart_bt"><strong>2</strong></a>
            <div className={`dropdown-menu ${cartState} ${props.color}`}>
                <ul>
                    <li>
                        <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-1.jpg" alt=""
                                     width="50" height="50" className="lazy"/></figure>
                        <strong><span>1x Pizza Napoli</span>$12.00</strong>
                        <a href="#0" className="action"><i className="icon_trash_alt"></i></a>
                    </li>
                    <li>
                        <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-2.jpg" alt=""
                                     width="50" height="50" className="lazy"/></figure>
                        <strong><span>1x Hamburgher Maxi</span>$10.00</strong>
                        <a href="#0" className="action"><i className="icon_trash_alt"></i></a>
                    </li>
                    <li>
                        <figure><img src="img/menu-thumb-placeholder.jpg" data-src="img/menu-thumb-3.jpg" alt=""
                                     width="50" height="50" className="lazy"/></figure>
                        <strong><span>1x Red Wine Bottle</span>$20.00</strong>
                        <a href="#0" className="action"><i className="icon_trash_alt"></i></a>
                    </li>
                </ul>
                <div className="total_drop">
                    <div className="clearfix add_bottom_15"><strong>Total</strong><span>$32.00</span></div>
                    <NavLink to="/checkout" className="btn_1 outline offers_btn">View Cart</NavLink>
                    <NavLink to="/checkout" className="btn_1 offers_btn">Checkout</NavLink>
                </div>
            </div>
        </div>

)
}

export default NavCart
