import PropTypes from "prop-types";
import Banner from "../Banner/Banner";
import {useSelector} from "react-redux";
import {selectColorMode} from "../../../redux/slices/nightModeSlice";

const Title = ({title, desc, className}) => {
    const colorMode = useSelector(selectColorMode)
    return (
        <div className={`${className} main_title mb-1 mt-4 center `}>
            <h2 className={`${colorMode}`}>{title}</h2>
            <p className={`${colorMode}`}>{desc}</p>
            <span><em></em></span>
        </div>
    )
}
Banner.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
}
export default Title
