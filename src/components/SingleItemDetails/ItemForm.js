import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import {addToCart, resetStatus, selectItemCount, selectStatus} from "../../redux/slices/cartSlice";
import Extras from "./Extras";
import {useAlertState} from "../../hooks/alertHook";


const ItemForm = ({product}) => {
    const dispatch = useDispatch()
    const colorMode = useSelector(selectColorMode)
    const [sandwichesCount, setSandwichesCount] = useState(1);

    function addSandwich() {
        setSandwichesCount(sandwichesCount + 1);
    }

    function removeSandwich() {
        if (sandwichesCount > 1) {
            setSandwichesCount(sandwichesCount - 1);
        }
    }

    //Form
    const {register, handleSubmit, errors, setValue, watch} = useForm({
        defaultValues: {
            size: "1",
            sandwichNotes: ""
        }
    });
    console.log(errors);

    //to set price
    const sizes = product.sizes
    const size = watch("size");
    const extras = watch("extras");
    const comments = watch("sandwichNotes");

    const [price, setPrice] = useState(0);


    useEffect(() => {

        let basePrice = '0'
        if (sizes) {
            let sizePriceObj = sizes.find(o => o.id === parseInt(size));
            if (sizePriceObj) {
                basePrice = sizePriceObj.price
            }
        }

        if (extras) {
            let extrasPrice = 0;
            extras.forEach(extra => extrasPrice += parseInt(extra));
            const totalPrice = (parseFloat(basePrice) + extrasPrice) * sandwichesCount
            setPrice(totalPrice)
        } else {
            const totalPrice = parseInt(basePrice) * sandwichesCount
            setPrice(totalPrice)
        }
    }, [size, extras, sandwichesCount])

    const [itemExtras, setitemExtras] = useState([]);

    let product_pojo = {
        item: product.item,
        name: product.name,
        name_ar: product.name_ar,
        img: product.img.image,
        size: parseInt(size),
        price: price,
        comments: comments,
        extras: itemExtras
    }
    const extrasCallback = (extras) => { // the callback. Use a better name
        console.log(extras);
        setitemExtras(extras);
        product_pojo.extras = itemExtras
    };

    const addItemToCart = () => dispatch(addToCart({product: product_pojo, quantity: sandwichesCount}))

    return (
        <form onSubmit={handleSubmit(addItemToCart)}>
            <Row sm={2} xs={1}>
                <Col>
                    <h4 className={`pl-1 pt-1`}>
                        {price}LE
                    </h4>
                </Col>
                <Col>
                    <Row className={`justify-content-center`}>

                        {sizes.map((item) =>
                            <Col xs={5} onClick={() => setValue("size", item.id.toString())}
                                 className={`size_indicators d-inline-flex`}>
                                <input name="size" type="radio" value={item.id.toString()}
                                       ref={register({required: true})} hidden={true}/>
                                <label className="container_radio item_form_radio mt-1">
                                    <input id={item.id} type="radio" name="sizeMock"
                                           checked={item.id.toString() === size}/>
                                    <span className="checkmark "/>
                                </label> <span className={`text-uppercase item_form_label`}>{item.size}</span>

                            </Col>)}
                    </Row>

                </Col>
            </Row>

            <Extras itemsCount={sandwichesCount} extrasCallback={extrasCallback}/>

            <div className="form-group pt-2">
                <input className={`form-control ${colorMode}`} name="sandwichNotes"
                       ref={register({required: false, maxLength: 250})}
                       placeholder="Sandwich Notes"/>
            </div>
            <Row className={`pb-2`}>
                <Col xs={12} lg={6} className={`d-inline-flex justify-content-center`}>
                    <FontAwesomeIcon className={`plus_minus`} size="lg"
                                     icon={faMinusCircle} onClick={removeSandwich}/>
                    <span className={`counter_font`}>{sandwichesCount}</span>
                    <FontAwesomeIcon className={`plus_minus`} size="lg"
                                     icon={faPlusCircle} onClick={addSandwich}/>
                </Col>
                <Col>
                    <input type="submit"
                           className="order_button fixed_mobile btn_1 offers_btn full-width mb_5"
                           style={{fontSize: "1.5rem"}}
                           value={`ADD TO CART`}
                    />
                </Col>

            </Row>


        </form>


    )
}

export default ItemForm


// <div className="card pt-2">
//                 <div className="card-header pt-1 pb-1" role="tab">
//                     <h5>
//                         <a className="collapsed pt-2 pb-2" data-toggle="collapse"
//                            onClick={extrasToggle}
//                            aria-expanded="false">
//                             <i className="indicator icon_plus"></i>Extras
//                         </a>
//                     </h5>
//                 </div>
//                 <div id="collapseTwo" className={`collapse ${extrasToggleState}`}
//                      role="tabpanel"
//                      data-parent="#accordion_group">
//                     <div className="card-body">
//                         <Row>
//                             {res.map((item) =>
//                                 <Col xs={6} className={`pb-1`}>
//                                     <input name="extras" type="checkbox"
//                                            value={item.price}
//                                            ref={register()}/>
//                                     <span className={`extras_font`}> {item.name}</span>
//                                 </Col>
//                             )}
//                         </Row>
//                     </div>
//                 </div>
//             </div>