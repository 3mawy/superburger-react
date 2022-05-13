import "./style.css"
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../../redux/slices/cartSlice"
import {selectColorMode} from "../../../redux/slices/nightModeSlice";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {array, number, string} from "prop-types";
import {selectLanguage} from "../../../redux/slices/languageSlice";
// import DropDownSize from "./DropDownSize";
import SeeMore from "./SeeMore/SeeMore";

const CardWithText = ({id, name, name_ar, sizes, desc, desc_ar, img, offerPrice}) => {
    const dispatch = useDispatch()
    const lang = useSelector(selectLanguage)
    const colorMode = useSelector(selectColorMode)

    const defaultValues = {
        size: 1
    };
    const {register, handleSubmit, watch, errors} = useForm({defaultValues});
    const size = watch("size");
    const [price, setPrice] = useState('');
    let product = {item: id, name: name, name_ar: name_ar, img: img, size: parseInt(size), price: price, extras: []}
    useEffect(() => {
        if (!offerPrice) {
            let sizePriceObj = sizes.find(o => o.id === parseInt(size));
            if (sizePriceObj) setPrice(sizePriceObj.price)
        } else {
            setPrice(offerPrice)
        }
    }, [size])

    const addItemToCart = () => dispatch(addToCart({product: product, quantity: 1}))
    return (
        <Col className={`p-0 pr-2 pl-2 ${lang === 'ar' ? ('text-right') : null}`}>
            <div className="form-group">
                <div className={` card-with-side-text ${colorMode}`} style={{border: "0", marginBottom: "1rem"}}>
                    <Row className=" no-gutters">
                        <Col className="col-auto img-wrapper">
                            <NavLink to={sizes ? (`/menu-items/${id}`) : (`/offers/${id}`)} className={`${colorMode}`}>

                                <img src={img} className="img-fluid hover-zoom" alt=""/>
                            </NavLink>
                        </Col>
                        <Col>
                            <div className="card-block px-2">
                                <NavLink to={sizes ? (`/menu-items/${id}`) : (`/offers/${id}`)}
                                         className={`${colorMode} row clickable_card`}>
                                    <Col xs={12} className="align-self-start">
                                        <h4 className={`${colorMode} mb-0 sandwich_name`}>{lang === 'ar' ? name_ar : name}</h4>
                                    </Col>
                                    {/*<Col xs={3} className="pl-1">*/}
                                    {/*    <div className="score"><strong>8.9</strong></div>*/}
                                    {/*</Col>*/}
                                    <Col xs={12}>
                                        <SeeMore desc={desc} desc_ar={desc_ar}/>
                                    </Col>
                                </NavLink>
                                <form onSubmit={handleSubmit(addItemToCart)}>

                                    <Row xs={3} className="align-items-end order_row_fix">

                                        <Col xs={3} className=" d-inline-flex pr-0 ">
                                            {sizes ? (<select name="size" className={`size_select`}
                                                              ref={register({required: true})}>
                                                {sizes.map((item) =>
                                                    <option value={item.id.toString()}>{item.size}</option>
                                                )}
                                            </select>) : null}
                                        </Col>
                                        <Col xs={4} className=" justify-content-end d-inline-flex pr-0 ">
                                            <h5 className={` ${colorMode}`}>
                                                <span className={`sandwich_price`}>
                                            {price}<span style={{fontSize: "12px"}}>EGP</span>
                                        </span>
                                            </h5>
                                        </Col>
                                        <Col xs={4} className="text-right pr-0 pl-1">
                                            <button type="submit"
                                                    className="btn-primary btn_1 order_btn offers_btn order_button pulse_bt mb-1 ml-1">Order
                                            </button>
                                        </Col>

                                    </Row>
                                </form>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
    )
}
CardWithText.propTypes = {
    id: number,
    name: string,
    sizes: array,
    img: string,
}
CardWithText.defaultProps = {
    name: "",
    price: "",
    desc: "",
    img: "https://via.placeholder.com/150",
}
export default CardWithText
