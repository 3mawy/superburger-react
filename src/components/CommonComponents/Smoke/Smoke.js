import "./style.css"
import {useSelector} from "react-redux";
import {selectColorMode} from "../../../redux/slices/nightModeSlice";

const Smoke = ({title, desc}) => {
    const colorMode = useSelector(selectColorMode)
    return (
        <div id="smoke">
            <span className="s0"></span>
            <span className="s1"></span>
            <span className="s2"></span>
            <span className="s3"></span>
            <span className="s4"></span>
            <span className="s5"></span>
            <span className="s6"></span>
            <span className="s7"></span>
            <span className="s8"></span>
            <span className="s9"></span>
        </div>

    )
}


export default Smoke
