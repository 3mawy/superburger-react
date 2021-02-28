import {useSelector} from "react-redux";
import {selectColorMode} from "../redux/slices/nightModeSlice";

const Offers = () => {
    const colorMode = useSelector(selectColorMode)
    return (
        <div>
            
        </div>
    )
}

export default Offers
