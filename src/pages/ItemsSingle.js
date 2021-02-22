import SingleItemDetails from "../components/SingleItemDetails/SingleItemDetails";
import {useSelector} from "react-redux";
import {selectColorMode} from "../redux/slices/nightModeSlice";

const ItemsSingle = () => {
    const colorMode = useSelector(selectColorMode)
    return (
        <div className={`container pt-5`}>
            <SingleItemDetails/>
        </div>
    )
}

export default ItemsSingle
