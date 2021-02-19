import SingleItemDetails from "../components/SingleItemDetails/SingleItemDetails";
import {useSelector} from "react-redux";

const ItemsSingle = () => {
    const colorMode = useSelector(state => state.nightMode.mode)
    return (
        <div className={`container pt-5`}>
            <SingleItemDetails color={colorMode}/>
        </div>
    )
}

export default ItemsSingle
