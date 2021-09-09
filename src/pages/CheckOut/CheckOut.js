import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import CheckOutForm from "../../components/CheckOut/CheckOutForm";
import OrderSummary from "../../components/CheckOut/OrderSummary";
import PaymentForm from "../../components/CheckOut/PaymentForm";
import {selectLanguage} from "../../redux/slices/languageSlice";
import {selectOrder} from "../../redux/slices/orderSlice";
import {Redirect} from "react-router";

const CheckOut = () => {
    const colorMode = useSelector(selectColorMode)
    const lang = useSelector(selectLanguage)
    const dispatch = useDispatch();

    const order_redux = useSelector(selectOrder)
    const order_status = order_redux.status
    if (order_status === 'success') {
        return <Redirect to='/success'/>
    }

    return (
        <div className="container order_margin_fix">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">

                    <CheckOutForm/>
                    <PaymentForm/>
                </div>
                <OrderSummary/>

            </div>
        </div>
    )
}

export default CheckOut
