import './style.css'
import {Col, Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import Loading from "../../Loading/Loading";
import {useState} from "react";
import _ from "underscore";
import {useSelector} from "react-redux";
import {selectLanguage} from "../../../redux/slices/languageSlice";


const SmallCardWithTextList = ({items, offerItemsCallback}) => {
    console.log(items)
    const lang = useSelector(selectLanguage)


    let [offerItems, setOfferItems] = useState([]);

    function addOrRemoveOfferItem(itemId) {
        if (_.indexOf(offerItems, itemId) === -1) {
            addExtra(itemId)
        } else {
            removeExtra(itemId)
        }
    }

    function addExtra(itemId) {
        const arr = [...offerItems, itemId];
        setOfferItems(arr)
        document.getElementById('offerItems' + itemId).className = 'checked';
    }

    function removeExtra(itemId) {
        setOfferItems(_.without(offerItems, itemId))
        document.getElementById('offerItems' + itemId).className = 'gete';
    }

    offerItemsCallback(offerItems)
    return (
        <div>
            {items ? (<Container fluid className="p-0">

                <Row className="padding-15-8 justify-content-end" xs={1} sm={2} md={2} lg={2} xl={2}>
                    {items.map((item) =>
                        <Col className={`p-0 pr-2 pl-2 ${lang === 'ar' ? ('text-right') : null}`}>
                            <div id={`offerItems${item.id}`}>
                                <div className="form-group">
                                    <div className={`card-with-side-text small-card`}
                                         style={{border: "0", marginBottom: "1rem"}}>
                                        <Row className=" no-gutters"
                                             onClick={() => addOrRemoveOfferItem(item.id)}>
                                            <Col className="col-auto img-wrapper">

                                                <img src={item.image.image} className=" small-card-image" alt=""/>
                                            </Col>
                                            <Col className="align-self-center">
                                                <p>{item.name}</p>

                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                            </div>
                        </Col>)
                    }
                </Row>
            </Container>) : (<Loading className={`mt-5`}/>)}
        </div>

    )
}
SmallCardWithTextList.propTypes = {
    items: PropTypes.array
}
export default SmallCardWithTextList
