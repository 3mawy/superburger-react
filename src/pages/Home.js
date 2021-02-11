import {Col, Container, Row} from "react-bootstrap";
import HeroCarousel from "../components/HeroCarosuel/HeroCarousel";

import sample from '../components/Cards/CardWithText/sample.jpeg'
import Title from "../components/CommonComponents/Title/Title";
import CategoryCard from "../components/Cards/CategoryCard/CategoryCard";
import CardItem from "../components/Cards/CardItem";
import CategoryCardList from "../components/Cards/CategoryCard/CategoryCardList";
import MyOwlCarousel from "../components/OwlCarousel/MyOwlCarousel";
import HighlightsBrand from "../components/HighlightsBrand/HighlightsBrand";

const Home = () => {
    return (
        <>
            <HeroCarousel/>
            <Title title="ام اوفا قرعه"/>
            <CategoryCardList/>
            <Title title="Trending Sandwiches"/>
            <MyOwlCarousel />
            <HighlightsBrand />
        </>
    )
}

export default Home
