import HeroCarousel from "../components/HeroCarosuel/HeroCarousel";
import Title from "../components/CommonComponents/Title/Title";
import CategoryCardList from "../components/Cards/CategoryCard/CategoryCardList";
import MyOwlCarousel from "../components/OwlCarousel/MyOwlCarousel";
import HighlightsBrand from "../components/HighlightsBrand/HighlightsBrand";

type HomeProps = {
    color?: string
};

const Home = ({color}: HomeProps) => {
    return (
        <>
            <HeroCarousel/>
            <Title title="م اوافا قرعه" color={color}/>
            <CategoryCardList/>
            <Title title="Trending Sandwiches" color={color}/>
            <MyOwlCarousel/>
            <HighlightsBrand/>
        </>
    )
}


export default Home
