import PropTypes from "prop-types";
import Banner from "../Banner/Banner";
import {useSelector} from "react-redux";

const Title = ({title, desc}) => {
    const colorMode = useSelector(state => state.nightMode.mode)

    return (
        <div className="main_title mb-1 mt-4 center ">
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
