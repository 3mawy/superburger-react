import {useSelector} from "react-redux";
import {selectColorMode} from "../redux/slices/nightModeSlice";

const SignIn = () => {
    const colorMode = useSelector(selectColorMode)
    return (
        <div>
            Register
        </div>
    )
}

export default SignIn
