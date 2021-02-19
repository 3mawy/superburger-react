import {useSelector} from "react-redux";

const SignIn = () => {
    const colorMode = useSelector(state => state.nightMode.mode)
    return (
        <div>
            Register
        </div>
    )
}

export default SignIn
