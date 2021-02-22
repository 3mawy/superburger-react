import "./style.css"
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import CategoryCardList from "../../Cards/CategoryCard/CategoryCardList";

const Banner = ({title, desc}) => {
    const colorMode = useSelector(state => state.nightMode.mode)
    return (
        <div className={`promo ${colorMode}`}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <i className="icon-food_icon_delivery"></i>
        </div>
    )
}
Banner.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
}

export default Banner
