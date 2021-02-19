import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getMenuItems } from "../redux/remotes_thunk/menuItemsThunk"

const ContactUs = () => {
    const colorMode = useSelector(state => state.nightMode.mode)
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
