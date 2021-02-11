import Button from "react-bootstrap/Button";
import "./style.css"
import sample from '../sample.jpeg'
import {Col} from "react-bootstrap";

const CategoryCard = (props) => {
    return (
        <Col className="pb-2">
            <div className="item_version_2">
                <a href="grid-listing-filterscol.html">
                    <figure>
                        <span>98</span>
                        <img src={sample} data-src="img/home_cat_pizza.jpg" alt=""
                             className="owl-lazy" width="350" height="450"/>
                            <div className="info">
                                <h3>Pizza</h3>
                                <small>Avg price $40</small>
                            </div>
                    </figure>
                </a>
            </div>
        </Col>
)
}

export default CategoryCard
