import Pagination from "../components/Pagination/Pagination";
import CardList from "../components/Cards/CardList";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import Title from "../components/CommonComponents/Title/Title";
import Banner from "../components/CommonComponents/Banner/Banner";
import CardWithText from "../components/Cards/CardWithText/CardWithText";
import CardWithTextList from "../components/Cards/CardWithText/CardWithTextList";
import {useSelector} from "react-redux";

const ItemsList = () => {
    const colorMode = useSelector(state => state.nightMode.mode)
    return (
        <Container className={`pt-5`}>
            <Row >
                <Col lg={3}>
                <Sidebar color={colorMode}/>
                </Col>
                <Col lg={9}>
                    <Banner title = "Chicken" desc="Have A Taste Of The Best Fried Chicken Sandwiches!" color={colorMode}/>
                    {/*<CardList row_size={4}></CardList>*/}
                    <CardWithTextList color={colorMode}></CardWithTextList>
                </Col>
            </Row>
            <Pagination/>
        </Container>
    )
}

export default ItemsList
