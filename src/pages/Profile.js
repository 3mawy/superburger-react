import {useSelector} from "react-redux";
import {selectColorMode} from "../redux/slices/nightModeSlice";

const Profile = () => {
    const colorMode = useSelector(selectColorMode)
    return (
        <div>
            
        </div>
    )
}

export default Profile
