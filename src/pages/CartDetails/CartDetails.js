import {useSelector} from "react-redux";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import "./style.css"
import CartItemsBox from "../../components/Cart/CartItemsBox";
import CartSideDetails from "../../components/Cart/CartSideDetails";

const CartDetails = () => {
    const colorMode = useSelector(selectColorMode)
    return (
        <div className="container-fluid cart_margin_fix pl-xl-5 pr-xl-5 pt-5">
            <div className="row justify-content-center pl-xl-1 pr-xl-1">
                <CartItemsBox/>
                <CartSideDetails/>

            </div>
        </div>
    )
}

export default CartDetails
