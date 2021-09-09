import {useDispatch, useSelector} from "react-redux";
import {selectTotal} from "../../redux/slices/cartSlice";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import {NavLink} from "react-router-dom";

const PriceDetailsBox = ({fee, delivery, date, time}) => {
    const dispatch = useDispatch()
    const colorMode = useSelector(selectColorMode)

    const total = useSelector(selectTotal)

    return (
        <div className="col-sm-12 pt-1">
            <div className={`box_order ${colorMode} price_details`}>

                <div className="main ">
                    <div className={` main_title price_details_title center `}>
                        <h2 className={`${colorMode} pt-1`}>Price Details</h2>
                        <span><em className={`mt-1`}/></span>
                    </div>
                    <ul className="clearfix ">
                        <li>Subtotal<span>{total} EGP</span></li>
                        <li className="total">Total<span>{total} EGP</span></li>
                    </ul>
                    <NavLink to="/checkout" className="order_button btn_1 fixed_mobile offers_btn full-width mb_5">CheckOut</NavLink>
                    <div className="text-center"><small>Or Call Us at <strong>0109 567 1171</strong></small></div>
                </div>
            </div>
        </div>

    )
}

export default PriceDetailsBox
