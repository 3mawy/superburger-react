import "./style.css"
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {selectColorMode} from "../../../redux/slices/nightModeSlice";

const Banner = ({title, desc}) => {
    const colorMode = useSelector(selectColorMode)
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
