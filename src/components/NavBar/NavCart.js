import {NavLink,} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, selectCartItems, selectItemCount, selectTotal} from "../../redux/slices/cartSlice";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import {useTranslation} from "react-i18next";
import {selectLanguage} from "../../redux/slices/languageSlice";

const NavCart = ({isMobile}) => {

    const [cartState, setToggleState] = useState("hide");

    function cartToggle() {
        setToggleState(cartState === "hide" ? "show" : "hide")
        if (isMobile === true) {
            setToggleState("hide")
        }
    }


    const ref = useRef(null);


    useEffect(() => {

        function handleClickOutside(event) {
            const baseClassName = ref.current.className
            if (ref.current && !ref.current.contains(event.target)) {
                setToggleState("hide")
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    // let product = {id: "5", name: "ana", price: "53", img: "https://via.placeholder.com/150"}

    const dispatch = useDispatch()

    const colorMode = useSelector(selectColorMode)
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotal)
    const itemCount = useSelector(selectItemCount)
    const lang = useSelector(selectLanguage)

    const removeItemFromCart = ({item}) => dispatch(removeFromCart({item: item}))

    const [t] = useTranslation('common');
    return (
        <div className={`dropdown dropdown-cart`} ref={ref}>
            <a onClick={cartToggle} className="cart_bt"><strong>{itemCount}</strong></a>
            <div className={`dropdown-menu ${cartState}  `}>
                <ul className={`overflow-scroll `} style={{maxHeight: '50vh'}}>
                    {cartItems.map((item, index) =>
                        <li>
                            <figure><img src={item.img} data-src="img/menu-thumb-1.jpg" alt=""
                                         width="50" height="50" className="lazy"/></figure>
                            <strong><span>{lang === 'ar' ? item.name_ar : item.name}</span>
                                <strong className={`counter_fix pt-1`}>{item.size}</strong>
                                {item.price} EGP
                                <strong className={`counter_fix`}>
                                    <div>
                                        x{item.quantity}
                                    </div>
                                </strong>
                            </strong>
                            <a onClick={() => removeItemFromCart({item: item})} className="action"><i
                                className="icon_trash_alt"></i></a>
                        </li>
                    )}

                </ul>
                <div className="total_drop">
                    <div className="clearfix add_bottom_15">
                        <strong>Total</strong><span>{total} EGP</span></div>
                    <NavLink to="/cart" className="btn_1 cart offers_btn">{t('cart.viewCart')}</NavLink>
                    <NavLink to="/checkout" className="btn_1 cart offers_btn">{t('cart.checkOut')}</NavLink>
                </div>
            </div>
        </div>

    )
}

export default NavCart
