import HighlightsBrand from "../components/HighlightsBrand/HighlightsBrand";
import CardList from "../components/Cards/CardList";
import {Container} from "react-bootstrap";
import Title from "../components/CommonComponents/Title/Title";
import Banner from "../components/CommonComponents/Banner/Banner";
import {useSelector} from "react-redux";

const AboutUs = () => {
    const colorMode = useSelector(state => state.nightMode.mode)
    return (
        <Container>
            <Title title = "Chicken" desc="Have A Taste Of The Best Fried Chicken Sandwiches!" />
            <Banner title = "Free Delivery for your first 14 days!" desc="Have A Taste Of The Best Fried Chicken Sandwiches!"/>
            <CardList row_size={5}></CardList>
              <HighlightsBrand />
        </Container>
    )
}

export default AboutUs
