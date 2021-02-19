import "./style.css"
import {useSelector} from "react-redux";

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

export default Banner
