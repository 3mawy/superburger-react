import {useSelector} from "react-redux";
import {selectColorMode} from "../../../redux/slices/nightModeSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = ({className}) => {
    const colorMode = useSelector(selectColorMode)

    return (
            <div className={`follow_us ${colorMode} ${className}`} >
                <ul>
                    <li><a href="https://www.facebook.com/superburgeregypt/" >
                        <FontAwesomeIcon size="lg" icon={faFacebookSquare} /></a>
                    </li>
                    <li><a href="https://www.instagram.com/superburgersuez/">
                        <FontAwesomeIcon size="lg" icon={faInstagram}/></a>
                    </li>
                </ul>
            </div>
    )
}

export default SocialIcons
