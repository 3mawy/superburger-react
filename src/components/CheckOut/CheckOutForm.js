import {useForm} from "react-hook-form";
import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useSelector} from "react-redux";
import {selectColorMode} from "../../redux/slices/nightModeSlice";

const CheckOutForm = () => {
    const defaultValues = {
        delivery: "true",
        orderTime: "Now"
    };
    const {register, handleSubmit, watch, Select, errors} = useForm({defaultValues});
    const delivery = watch("delivery");
    const orderTime = watch("orderTime")
    const onSubmit = data => console.log(data);

    const colorMode = useSelector(selectColorMode)

    const [date, setDate] = useState(new Date());
    return (
        <div className={`box_order_form ${colorMode}`}>
            <div className="head">
                <div className="title">
                    <h3>Order Details</h3>
                </div>
            </div>
            <div className="main">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className="container_radio" style={{width: "50%"}}>Delivery
                            <input type="radio" name="delivery" value={true} ref={register}/>
                            <span className="checkmark"/>
                        </label>
                        <label className="container_radio" style={{width: "50%"}}>PickUp
                            <input type="radio" name="delivery" value={false} ref={register}/>
                            <span className="checkmark"/>
                        </label>

                        {delivery === "true" && (
                            <div>
                                <div className={`form-group`} >
                                    <label>Address</label>
                                    <input className={`form-control ${colorMode}`} name="address" ref={register({required: true})}
                                           placeholder="Address"/>
                                    {errors.address && <span>Address is required</span>}
                                </div>
                                <div className="form-group">
                                    <label>Delivery Notes</label>
                                    <input className={`form-control ${colorMode}`} name="deliverNotes" ref={register}
                                           placeholder="Delivery Notes"/>
                                </div>
                                <div>
                                    <label>Area</label>
                                    <select name="Area" ref={register({required: true})}>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Dr">Dr</option>
                                    </select>
                                    {errors.area && <span>Area is required</span>}
                                </div>
                            </div>
                        )}
                        {delivery === "false" && (
                            <div>
                                <div>
                                    <label>Branch</label>
                                    <select name="branch" ref={register({required: true})}>
                                        <option value="station">Station</option>
                                        <option value="hod_elders">Hod Elders</option>
                                    </select>
                                    {errors.area && <span>Area is required</span>}
                                </div>
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="container_radio" style={{width: "50%"}}>Now
                            <input type="radio" name="orderTime" value={"Now"} ref={register}/>
                            <span className="checkmark"/>
                        </label>
                        <label className="container_radio" style={{width: "50%"}}>Future
                            <input type="radio" name="orderTime" value={"Future"} ref={register}/>
                            <span className="checkmark"/>
                        </label>

                        {orderTime === "Now" && (
                            <div>
                            </div>
                        )}
                        {orderTime === "Future" && (
                            <div>
                                <DatePicker
                                    selected={date}
                                    onChange={date => setDate(date)}
                                    minDate={new Date()}
                                    showTimeSelect
                                    showDisabledMonthNavigation
                                />
                            </div>
                        )}
                    </div>

                    <input type="submit"/>
                </form>

            </div>
        </div>


    )
}

export default CheckOutForm
