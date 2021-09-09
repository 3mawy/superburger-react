import {useDispatch, useSelector} from "react-redux";
import {selectColorMode} from "../redux/slices/nightModeSlice";
import SingleItemDetails from "../components/SingleItemDetails/SingleItemDetails";
import {useParams} from "react-router";
import {useEffect} from "react";
import {getSingleOffer} from "../redux/remotes_thunk/offersThunk";
import {selectSingleOffer} from "../redux/slices/singleOfferSlice";

const OffersSingle = () => {
    const colorMode = useSelector(selectColorMode)
    const dispatch = useDispatch()

    let {id} = useParams();
    console.log(useParams())
    const itemData = useSelector(selectSingleOffer)
    const loaded = itemData.status === 'success'
    useEffect(() => {
        dispatch(getSingleOffer({offerId: id}))
    }, [])

    return (
        <div className={`container pt-5 offer_single`}>
            <SingleItemDetails offer={true} itemData={itemData} loaded={loaded}/>
        </div>
    )
}

export default OffersSingle
