import {Col , Row} from "react-bootstrap";
import sample from './sample.jpeg'
import ImgBox from "./ImgBox";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import {getMenuItems, getSingleMenuItem} from "../../redux/remotes_thunk/menuItemsThunk";
import {useEffect} from "react";
import {selectSingleMenuItem} from "../../redux/slices/singleMenuItemSlice";

const SingleItemDetails = () => {
    const colorMode = useSelector(selectColorMode)

    let { id } = useParams();
    const itemData = useSelector(selectSingleMenuItem)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSingleMenuItem(id))
    }, [])

    return (
        <Row className="row pt-3">
            <Col lg={5}>
                <ImgBox img={sample}></ImgBox>
            </Col>
            <Col lg={7}>
                <div className="detail_page_head clearfix">
                    <div className="rating">
                        <div className="score"><span>Superb<em>15 Reviews</em></span><strong>8.9</strong></div>
                    </div>
                    <div className="title">
                        <h1 className={colorMode}>{itemData.name}</h1>
                        27 Old Gloucester St, 4530 London - <a
                        href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                        target="blank">Get directions</a>
                        <ul className="tags">
                            <li><a href="#0">Pizza</a></li>
                            <li><a href="#0">Italian Food</a></li>
                            <li><a href="#0">Best Price</a></li>
                        </ul>
                    </div>
                </div>
                <h6 className={colorMode}>About "da Alfredo"</h6>
                <p>Mei at intellegat reprehendunt, te facilisis definiebas dissentiunt usu. Choro delicata voluptatum cu
                    vix.<br/>Sea error splendide at. Te sed facilisi persequeris definitiones, ad per scriptorem
                    instructior, vim latine adipiscing no. Cu tacimates salutandi his, mel te dicant quodsi aperiri.
                    Unum timeam his eu.</p>
            </Col>
        </Row>

    )
}

export default SingleItemDetails
