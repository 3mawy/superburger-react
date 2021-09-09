import "./style.css"
import {Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import AR from "../../../translations/ar/common.json";
import {useSelector} from "react-redux";
import {selectLanguage} from "../../../redux/slices/languageSlice";

const CategoryCard = ({category}) => {
    const [t] = useTranslation('common');
    const name = category.name
    const image = category.image.image

    function m(t, lang) {

        let text = AR
        for (let key of t.split('.')) {
            text = text[key]
        }
        return text
    }

    const lang = useSelector(selectLanguage)



    return (
        <Col className="pb-2">
            <div className={`item_version_2 ${lang} `}>
                <NavLink to={`/menu/${name}`}>
                    <figure>
                        <span>98</span>
                        <img src={image} alt=""
                             className="owl-lazy" width="350" height="450"/>
                        <div className="info pattern_orange">
                            <h3>{t(`categories.${name}`)}</h3>
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
