import './style.css';
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {selectColorMode, toggle} from "../../../redux/slices/nightModeSlice";


const NavLanguage = () => {
    const dispatch = useDispatch()
    const colorMode = useSelector(selectColorMode)
    const colorModeToggle = () => dispatch(toggle())

    return (
        <a className={`night-mode-icon  ${colorMode} `}
           onClick={colorModeToggle}>
            <FontAwesomeIcon icon={colorMode === "" ? faSun : faMoon}
                             size="lg" spin
                             style={{animation: "fa-spin 3.5s infinite linear"}}/>
        </a>


    )
}

export default NavLanguage
