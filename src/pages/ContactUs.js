import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getMenuItems } from "../redux/remotes_thunk/menuItemsThunk"
import {selectColorMode} from "../redux/slices/nightModeSlice";

const ContactUs = () => {
    const colorMode = useSelector(selectColorMode)
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(getMenuItems())
    }, [dispatch])
    // const menuItems = useSelector(state => state.menuItems.menuItems['results'])
    return (
        <div>
            <h1>

            </h1>
        </div>
    )
}

export default ContactUs
