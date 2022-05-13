import {useDispatch, useSelector} from "react-redux";
import {selectTotal} from "../../redux/slices/cartSlice";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import {Col, Row} from "react-bootstrap";

const VoucherCodeBox = ({fee, delivery, date, time}) => {
    const dispatch = useDispatch()
    const colorMode = useSelector(selectColorMode)

    const total = useSelector(selectTotal)

    return (
        <div className="col-sm-12 " id="">
            <div className={`box_order voucher ${colorMode}`}>

                <div className="main">
                    <Row className="form-group">
                        <Col xs={6} sm={8} lg={7} className={`pr-0`}>
                            <input className={`form-control ${colorMode}`} name="voucherCode" s
                                   placeholder="Voucher Code"/>
                        </Col>
                        <Col xs={6} sm={4} lg={5}>
                            <a href="confirm.html" className="order_button btn_1 offers_btn full-width mb_5">Redeem</a>

                        </Col>
                    </Row>
                    <div className="form-group">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default VoucherCodeBox
