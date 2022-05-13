import {getTokenExpiration} from "./redux/remotes_thunk/helper";
import {useDispatch} from "react-redux";
import {refreshToken} from "./redux/remotes_thunk/userThunk";
import {useEffect} from "react";

// TODO get access token expiration date and compare with current time stamp to refresh token
const useRefreshToken = () => {
    const dispatch = useDispatch();
    const ex = getTokenExpiration();
    useEffect(() => {
        setInterval(() => {
            if (ex > 0) {
                dispatch(refreshToken())
            }
        }, 10000)
    }, [])

}


export default useRefreshToken;