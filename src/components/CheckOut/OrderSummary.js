import "react-datepicker/dist/react-datepicker.css";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, selectCartItems, selectTotal} from "../../redux/slices/cartSlice";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import {postOrder} from "../../redux/remotes_thunk/orderThunk";
import {PrepOrder} from "../../pages/CheckOut/PrepOrder";
import {selectOrder} from "../../redux/slices/orderSlice";

const OrderSummary = ({fee, delivery, date, time}) => {
    const dispatch = useDispatch()
    const colorMode = useSelector(selectColorMode)

    const cartItems = useSelector(selectCartItems)

    const total = useSelector(selectTotal)
    const removeItemFromCart = ({item}) => dispatch(removeFromCart({item: item}))

    const order = PrepOrder()
    console.log(order)
    return (
        <div className="col-xl-4 col-lg-4" id="">
            <div className={`box_order ${colorMode}`}>
                <div className="head ">
                    <h3>Order Summary</h3>
                    <div>Super Burger</div>
                </div>
                <div className="main">
                    <ul>
                        <li>Date<span>Today 23/11/2019</span></li>
                        <li>Hour<span>08.30pm</span></li>
                        <li>Type<span>Delivery</span></li>
                    </ul>
                    <hr/>
                    <ul className="clearfix">
                        {cartItems.map((item, index) =>
                            <li>
                                <a onClick={() => removeItemFromCart({item: item})}>
                                    {item.quantity}x {item.name}
                                </a><span>{item.price} EGP</span></li>
                        )}
                    </ul>

                    <ul className="clearfix ">
                        <li>Subtotal<span>{total} EGP</span></li>
                        <li>Delivery fee<span>{fee} EGP</span></li>
                        <li className="total">Total<span>{total} EGP</span></li>
                    </ul>
                    <a onClick={() => {
                        dispatch(postOrder({order: order}))
                    }}
                       className="order_button fixed_mobile btn_1 offers_btn full-width mb_5">Order Now</a>
                    <div className="text-center"><small>Or Call Us at <strong>0109 567 1171</strong></small></div>
                </div>
            </div>
        </div>

    )
}

export default OrderSummary
