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
            {/*<Row>*/}
            {/*    <nav className="navbar navbar-expand-lg navbar-light bg-light">*/}
            {/*        <div className="d-flex flex-grow-1">*/}
            {/*            <span*/}
            {/*                className="w-100 d-lg-none d-block"></span>*/}
            {/*            <a className="navbar-brand d-none d-lg-inline-block" href="#">*/}
            {/*                Navbar 6*/}
            {/*            </a>*/}
            {/*            <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">*/}
            {/*                <img src="//placehold.it/40?text=LOGO" alt="logo"/>*/}
            {/*            </a>*/}
            {/*            <div className="w-100 text-right">*/}
            {/*                <button className="navbar-toggler" type="button" data-toggle="collapse"*/}
            {/*                        data-target="#myNavbar">*/}
            {/*                    <span className="navbar-toggler-icon"></span>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">*/}
            {/*            <ul className="navbar-nav ml-auto flex-nowrap">*/}
            {/*                <li className="nav-item">*/}
            {/*                    <a href="#" className="nav-link m-2 menu-item nav-active">Our Solution</a>*/}
            {/*                </li>*/}
            {/*                <li className="nav-item">*/}
            {/*                    <a href="#" className="nav-link m-2 menu-item">How We Help</a>*/}
            {/*                </li>*/}
            {/*                <li className="nav-item">*/}
            {/*                    <a href="#" className="nav-link m-2 menu-item">Blog</a>*/}
            {/*                </li>*/}
            {/*                <li className="nav-item">*/}
            {/*                    <a href="#" className="nav-link m-2 menu-item">Contact</a>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </nav>*/}

            {/*</Row>*/}
        </>
    )
}

export default Home
