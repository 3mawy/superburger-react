import {useDispatch, useSelector} from "react-redux";
import {selectTotal} from "../../redux/slices/cartSlice";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import VoucherCodeBox from "./VoucherCodeBox";
import PriceDetailsBox from "./PriceDetailsBox";

const CartSideDetails = ({fee, delivery, date, time}) => {
    const dispatch = useDispatch()
    const colorMode = useSelector(selectColorMode)

    const total = useSelector(selectTotal)

    return (
        <div className={`col-xl-4 col-lg-4`}>
                    <div className={`row`}>

            <VoucherCodeBox/>
            <PriceDetailsBox/>

        </div>
        </div>




)
}

export default CartSideDetails
