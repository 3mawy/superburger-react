import "./style.css"
import sample from '../sample.jpeg'
import {Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const CategoryCard = (props) => {
    console.log(props)

    return (

        <Col className="pb-2" >
            <div className="item_version_2" >
                <NavLink to = "/menu">
                    <figure >
                        <span>98</span>
                        <img src={sample} data-src="img/home_cat_pizza.jpg" alt=""
                             className="owl-lazy" width="350" height="450"/>
                            <div className="info">
                                <h3 className={``} >{props.category}</h3>
                                {/*<small>Avg price $40</small>*/}
                            </div>
                    </figure>
                </NavLink>
            </div>
        </Col>
)
}

export default CategoryCard
