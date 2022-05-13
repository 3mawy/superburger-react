import "react-datepicker/dist/react-datepicker.css";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {selectColorMode} from "../../redux/slices/nightModeSlice";

const PaymentForm = () => {
    const colorMode = useSelector(selectColorMode)

    return (
        <div className="box_order_form">
            <div className="head">
                <div className="title">
                    <h3>Payment Method</h3>
                </div>
            </div>
            <div className="main">
                <div className={`payment_select ${colorMode}`}>
                    <label className="container_radio">Pay with Cash
                        <input type="radio" value="" checked name="payment_method"/>
                        <span className="checkmark"></span>
                    </label>
                    <i className="icon_wallet"></i>
                </div>

            </div>
        </div>
    )
}

export default PaymentForm

                // <div className="payment_select">
                //     <label className="container_radio">Credit CardItemOld
                //         <input type="radio" value=""  name="payment_method"/>
                //         <span className="checkmark"></span>
                //     </label>
                //     <i className="icon_creditcard"></i>
                // </div>
                // <div className="form-group">
                //     <label>Name on card</label>
                //     <input type="text" className="form-control" id="name_card_order"
                //            name="name_card_order" placeholder="First and last name"/>
                // </div>
                // <div className="form-group">
                //     <label>CardItemOld number</label>
                //     <input type="text" id="card_number" name="card_number" className="form-control"
                //            placeholder="CardItemOld number"/>
                // </div>
                // <div className="row">
                //     <div className="col-md-6">
                //         <label>Expiration date</label>
                //         <div className="row">
                //             <div className="col-md-6 col-6">
                //                 <div className="form-group">
                //                     <input type="text" id="expire_month" name="expire_month"
                //                            className="form-control" placeholder="mm"/>
                //                 </div>
                //             </div>
                //             <div className="col-md-6 col-6">
                //                 <div className="form-group">
                //                     <input type="text" id="expire_year" name="expire_year"
                //                            className="form-control" placeholder="yyyy"/>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                //     <div className="col-md-6 col-sm-12">
                //         <div className="form-group">
                //             <label>Security code</label>
                //             <div className="row">
                //                 <div className="col-md-4 col-6">
                //                     <div className="form-group">
                //                         <input type="text" id="ccv" name="ccv" className="form-control"
                //                                placeholder="CCV"/>
                //                     </div>
                //                 </div>
                //                 <div className="col-md-8 col-6">
                //                     <img src="img/icon_ccv.gif" width="50" height="29" alt="ccv"/><small>Last
                //                     3 digits</small>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>