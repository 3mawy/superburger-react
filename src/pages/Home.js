import HeroCarousel from "../components/HeroCarousel/HeroCarousel";

import Title from "../components/CommonComponents/Title/Title";
import CategoryCardList from "../components/Cards/CategoryCard/CategoryCardList";
import MyOwlCarousel from "../components/OwlCarousel/MyOwlCarousel";
import HighlightsBrand from "../components/HighlightsBrand/HighlightsBrand";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {selectColorMode} from "../redux/slices/nightModeSlice";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {clearState, logOut, userSelector} from "../redux/slices/userSlice";
import {useHistory} from "react-router-dom";
import {getCategories} from "../redux/remotes_thunk/categoriesThunk";
import {getCarouselImages} from "../redux/remotes_thunk/carouselImagesThunk";
import {selectCarouselImages} from "../redux/slices/carouselImageSlice";

const Home = () => {
    const colorMode = useSelector(selectColorMode)
    const [t] = useTranslation('common');
    const history = useHistory();
    const dispatch = useDispatch();
    const {isFetching, isError} = useSelector(userSelector);
    useEffect(() => {
        // dispatch(refreshToken())
        // dispatch(fetchUserBytoken({token: localStorage.getItem('token')}));
    }, []);
    useEffect(() => {
        dispatch(getCategories())
    }, [])
    const {username, email} = useSelector(userSelector);




    useEffect(() => {
        if (isError) {
            dispatch(clearState());
            // history.push('/login');
        }
    }, [isError]);

    const onLogOut = () => {
        dispatch(logOut())
        history.push('/login');
    };
    // const [anserd,setanserd] = useState()
    return (
        <>
            <HeroCarousel/>
            {/*onSumbit={(obeject1, ob2)=>{*/}
            {/*   // obeject1.length*/}
            {/*    setanserd(obeject1.length)*/}
            {/*}}*/}
            {/*<Title title="Categories" color={colorMode}/>*/}
            <br/>



            <CategoryCardList/>
            <div>
                <Title  title={t('home.trendingTitle')} color={colorMode}/>
                <MyOwlCarousel className={`pt-4`}/>
            </div>
            <button
                onClick={onLogOut}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Log Out
            </button>
            <HighlightsBrand/>
        </>
    )
}
Home.propTypes = {
    color: PropTypes.string
}

export default Home
