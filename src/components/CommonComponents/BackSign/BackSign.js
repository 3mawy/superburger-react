import "./style.css"
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {selectColorMode} from "../../../redux/slices/nightModeSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import {selectLanguage} from "../../../redux/slices/languageSlice";

const BackSign = ({linkTo}) => {
    const colorMode = useSelector(selectColorMode)
    const lang = useSelector(selectLanguage)

    return (
        <NavLink to={linkTo}>
            <FontAwesomeIcon className={`back-sign ${colorMode} ${lang}`} size="lg"
                             icon={faArrowCircleLeft}/>
        </NavLink>
    )
}
BackSign.propTypes = {
    linkTo: PropTypes.string,
}

export default BackSign
