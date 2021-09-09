import './style.css'
import {Col, Row} from "react-bootstrap";
import ImgBox from "./ImgBox";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import Loading from "../Loading/Loading";
import {NavLink} from "react-router-dom";
import ItemForm from "./ItemForm";
import OfferForm from "./OfferForm";
import {selectLanguage} from "../../redux/slices/languageSlice";
import {getExtras} from "../../redux/remotes_thunk/extrasThunk";


const SingleItemDetails = ({offer, itemData, loaded}) => {
    const colorMode = useSelector(selectColorMode)
    const lang = useSelector(selectLanguage)
    const dispatch = useDispatch()

    const item = itemData.item
    const maxOfferItems = item.max_offer_items
    const image = item.image

    const product = {item: item.id, name: item.name,name_ar: item.name_ar , sizes: item.sizes, img: image}
    useEffect(() => {
        dispatch(getExtras())
    }, [])

    return (
        <div className={`pt-lg-4 ${lang === 'ar' ? ('text-right') : null}`} dir={lang === 'ar' ? ('rtl') : null}>
            {loaded ? (
                <Row className="row ">
                    <Col lg={5}>
                        <ImgBox img={item.image.image}/>
                    </Col>
                    <Col lg={7}>
                        <div className={`detail_page_head ${colorMode} clearfix`}>
                            {/*<div className="rating">*/}
                            {/*    <div className="score"><span>Superb<em>15 Reviews</em></span><strong>8.9</strong></div>*/}
                            {/*</div>*/}
                            <div className="title">
                                <h1 className={colorMode}>{lang === 'ar' ? item.name_ar : item.name}</h1>

                                {lang === 'ar' ? item.description_ar : item.description}
                                <ul className="tags">
                                    <li>
                                        {offer ? (
                                            <NavLink
                                                to="/offers">
                                                Offers
                                            </NavLink>
                                        ) : (
                                            <NavLink
                                                to={`/menu/${item.category.name}`}>
                                                {item.category.name}
                                            </NavLink>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div role="tablist" className="add_bottom_15 accordion_2" id="accordion_group">

                            <div className="card">
                                <div className="card-body">
                                    {offer ? (<OfferForm maxOfferItems={maxOfferItems} product={product}/>) : (
                                        <ItemForm product={product}/>)}
                                </div>
                            </div>
                        </div>


                    </Col>
                </Row>) : <Loading className={`mt-5`}></Loading>
            }
        </div>

    )
}

export default SingleItemDetails
