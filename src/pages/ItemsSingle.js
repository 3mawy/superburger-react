import SingleItemDetails from "../components/SingleItemDetails/SingleItemDetails";
import {useDispatch, useSelector} from "react-redux";
import {selectColorMode} from "../redux/slices/nightModeSlice";
import {useParams} from "react-router";
import {selectSingleMenuItem} from "../redux/slices/singleMenuItemSlice";
import {useEffect} from "react";
import {getSingleMenuItem} from "../redux/remotes_thunk/menuItemsThunk";
import Loading from "../components/Loading/Loading";
import {selectLanguage} from "../redux/slices/languageSlice";

const ItemsSingle = () => {
    const colorMode = useSelector(selectColorMode)
    const dispatch = useDispatch()

    let {id} = useParams();
    const itemData = useSelector(selectSingleMenuItem)
    const loaded = itemData.status === 'success'
    useEffect(() => {
        dispatch(getSingleMenuItem({itemId: id}))

    }, [])
    return (
        <div className={`container pt-5`} >
            {loaded ? (<SingleItemDetails itemData={itemData} loaded={loaded}/>
            ) : (<Loading/>)}
        </div>
    )
}

export default ItemsSingle
