import HeroCarousel from "../components/HeroCarosuel/HeroCarousel";

import Title from "../components/CommonComponents/Title/Title";
import CategoryCardList from "../components/Cards/CategoryCard/CategoryCardList";
import MyOwlCarousel from "../components/OwlCarousel/MyOwlCarousel";
import HighlightsBrand from "../components/HighlightsBrand/HighlightsBrand";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const Home = () => {
    const colorMode = useSelector(state => state.nightMode.mode)
    return (
        <>
            <HeroCarousel/>
            {/*<Title title="Categories" color={colorMode}/>*/}
            <br/>
            <CategoryCardList/>
            <Title title="Trending Sandwiches" color={colorMode}/>
            <MyOwlCarousel/>
            <HighlightsBrand/>
        </>
    )
}
Home.propTypes = {
    color: PropTypes.string
}

export default Home
