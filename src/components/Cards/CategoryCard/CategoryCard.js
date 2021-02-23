import "./style.css"
import sample from '../sample.jpeg'
import {Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

const CategoryCard = ({category}) => {
    const [t] = useTranslation('common');

    return (
        <Col className="pb-2">
            <div className="item_version_2">
                <NavLink to="/menu">
                    <figure>
                        <span>98</span>
                        <img src={sample} data-src="img/home_cat_pizza.jpg" alt=""
                             className="owl-lazy" width="350" height="450"/>
                        <div className="info">
                            <h3>{t('categories.'+category)}</h3>
                            {/*<small>Avg price $40</small>*/}
                        </div>
                    </figure>
                </NavLink>
            </div>
        </Col>
    )
}
CategoryCard.propTypes = {
    category: PropTypes.string,
}
export default CategoryCard
