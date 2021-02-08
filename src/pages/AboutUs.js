import HighlightsItems from "../components/Highlightsitems.js/HighlightsItems";
import HighlightsBrand from "../components/HighlightsBrand/HighlightsBrand";
import CardsList from "../components/Cards/CardsList";
import {Container} from "react-bootstrap";
import Title from "../components/CommonComponents/Title/Title";
import Banner from "../components/CommonComponents/Banner/Banner";

const AboutUs = () => {
    return (
        <Container>
            <Title title = "Chicken" desc="Have A Taste Of The Best Fried Chicken Sandwiches!" />
            <Banner title = "Free Delivery for your first 14 days!" desc="Have A Taste Of The Best Fried Chicken Sandwiches!"/>
            <CardsList row_size={5}></CardsList>
              <HighlightsItems />
              <HighlightsBrand />
        </Container>
    )
}

export default AboutUs
