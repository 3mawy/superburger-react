import "./style.css"
import {Container, Row} from "react-bootstrap";
import CardWithText from "./CardWithText";
import PropTypes from "prop-types";
import Loading from "../../Loading/Loading";


const CardWithTextList = ({offers, items, loading}) => {


    return (
        <div >
            {items ? (<Container fluid className="p-0">

                <Row className="padding-15-8 justify-content-end" xs={1} sm={2} md={2} lg={2} xl={2}>
                    {items.map((item) =>
                        <CardWithText key={item.id} id={item.id}
                                      name={item.name} name_ar={item.name_ar} sizes={item.sizes}
                                      desc={item.description} desc_ar={item.description_ar} img={item.image.image} offerPrice={item.price}>
                        </CardWithText>)
                    }
                </Row>
            </Container>) : (<Loading className={`mt-5`}/>)}
        </div>

    )
}
CardWithTextList.propTypes = {
    items: PropTypes.array
}
export default CardWithTextList
