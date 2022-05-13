import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import CardItem from "../Cards/CardItem";
import Title from "../CommonComponents/Title/Title";
import {addToCart, addOfferToCart} from "../../redux/slices/cartSlice";
import {selectOfferItems} from "../../redux/slices/singleOfferSlice";
import Extras from "./Extras";
import SmallCardWithTextList from "../Cards/SmallCardWithText/SmallCardWithTextList";

const OfferForm = ({maxOfferItems, product}) => {
    const colorMode = useSelector(selectColorMode)
    const [offersCount, setOffersCount] = useState(1);

    const offerItems = useSelector(selectOfferItems)

    function addOffer() {
        setOffersCount(offersCount + 1);
    }

    function removeOffer() {
        if (offersCount > 1) {
            setOffersCount(offersCount - 1);
        }
    }

    const dispatch = useDispatch()
    //Form
    const {register, handleSubmit, errors, watch, setValue} = useForm();
    console.log(errors);

    const comments = watch("OfferNotes");

    //CheckBox Control value by custom functions

    const [offerExtras, setOfferExtras] = useState([]);
    const [offerSelectedItems, setOfferSelectedItems] = useState([]);
    let offer_pojo = {
        offer: product.id,
        comments: comments,
        name: product.name,
        img: product.img,
        extras: offerExtras,
        items: offerSelectedItems, // TODO
    }
    const extrasCallback = (extras) => {
        console.log(extras);
        setOfferExtras(extras);
        offer_pojo.extras = offerExtras
    };
    const offerItemsCallback = (offerSelectedItems) => {
        console.log(offerSelectedItems);
        setOfferSelectedItems(offerSelectedItems);
        offer_pojo.items = offerSelectedItems
    };

    const addOffersToCart = () => dispatch(addOfferToCart({product: offer_pojo, quantity: offersCount}))


    return (
        <form onSubmit={handleSubmit(addOffersToCart)}>

            <Row>
                <Col xs={12} style={{marginTop: "-1.5rem"}}>
                    <Title title={`Select ${maxOfferItems} Sandwiches`}/>
                </Col>
                <Col className={`pt-2`}>
                    <SmallCardWithTextList items={offerItems} offerItemsCallback={offerItemsCallback}/>
                </Col>


            </Row>


            <Extras itemsCount={maxOfferItems} extrasCallback={extrasCallback}/>
            <div className="form-group pt-2">
                <input className={`form-control ${colorMode}`} name="OfferNotes"
                       ref={register({required: false, maxLength: 250})}
                       placeholder="Offer Notes"/>
            </div>
            <Row sm={2} xs={1}>

                <Col>
                </Col>
            </Row>
            <Row className={`pb-2`}>
                <Col xs={6} lg={3} className={`d-inline-flex justify-content-center`}>
                    <FontAwesomeIcon className={`plus_minus`} size="lg"
                                     icon={faMinusCircle} onClick={removeOffer}/>
                    <span className={`counter_font`}>{offersCount}</span>
                    <FontAwesomeIcon className={`plus_minus`} size="lg"
                                     icon={faPlusCircle} onClick={addOffer}/>
                </Col>
                <Col xs={6} lg={3} className={`d-inline-flex justify-content-center`}>
                    <h4 className={`pt-1`}>
                        40LE
                    </h4>
                </Col>
                <Col xs={12} lg={6}>
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

export default OfferForm



                    // <Row className={`justify-content-center`}>
                    //
                    //     {offerItems.map((item) =>
                    //         <Col xs={6} md={3} className={`d-inline-flex `}
                    //         >
                    //             <CardItem withCheckBox={true} name={item.name} img={item.image?.image}
                    //                       category={item.category} description={item.description}>
                    //             </CardItem>
                    //
                    //             <input name="offerSandwiches" type="checkbox"
                    //                    value={item.id}
                    //                    ref={register()}/>
                    //         </Col>
                    //     )}
                    // </Row>