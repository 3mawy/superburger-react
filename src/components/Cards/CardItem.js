import "./style.css"
import {Col} from "react-bootstrap";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const CardItem = ({id, name, sizes, description, category, img, withCheckBox}) => {

    const [price, setPrice] = useState('');

    useEffect(() => {
        if (sizes) {
            const size = sizes[0]
            if (size) {
                const price = size.price
                setPrice(price)
            }
        }


    }, [sizes])
    console.log(price)
    return (
        <Col>
            <div className="strip text-uppercase">
                <figure className={`card_small`}>
                    {withCheckBox ? null : (<span className="ribbon off">{price}LE</span>)}

                    <img src={img} data-src="img/location_1.jpg" className="img-fluid lazy" alt=""/>
                    {withCheckBox ? (null) : (<NavLink to={`/menu-items/${id}`} className="strip_info">
                        <small><NavLink to={`/menu/${category}`}>{category}</NavLink></small>
                        <div className="text-center item_title">
                            <h3>{name}</h3>
                        </div>
                    </NavLink>)}

                </figure>
                {/*<ul><li><span className="take yes">Takeaway</span> <span className="deliv yes">Delivery</span></li></ul>*/}
            </div>
        </Col>
    )
}

export default CardItem
