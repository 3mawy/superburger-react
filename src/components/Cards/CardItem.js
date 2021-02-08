import Button from "react-bootstrap/Button";

import sample from './sample.jpeg'

const CardItem = (props) => {
    return (
        <div className="strip">
            <span><div className="score"><strong>8.9</strong></div></span>
            <figure>
                <span className="ribbon off">Spicy</span>
                <img src={sample} data-src="img/location_1.jpg" className="img-fluid lazy" alt=""/>
                    <a href="detail-restaurant.html" className="strip_info">
                        <small>Chicken</small>
                        <div className="item_title">
                            <h3>Da Alfredo</h3>
                            <small>27 Old Gloucester St</small>
                        </div>
                    </a>

            </figure>
            <ul>
                <li><span className="take yes">Takeaway</span> <span className="deliv yes">Delivery</span></li>

            </ul>
        </div>

)
}

export default CardItem
