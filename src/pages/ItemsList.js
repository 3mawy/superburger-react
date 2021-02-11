import Pagination from "../components/Pagination/Pagination";
import CardList from "../components/Cards/CardList";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import Title from "../components/CommonComponents/Title/Title";
import Banner from "../components/CommonComponents/Banner/Banner";
import CardWithText from "../components/Cards/CardWithText/CardWithText";
import CardWithTextList from "../components/Cards/CardWithText/CardWithTextList";

const ItemsList = () => {
    return (
        <Container>
            <Row>
                <Col lg={3}>
                <Sidebar/>
                </Col>
                <Col lg={9}>
                    <Banner title = "Chicken" desc="Have A Taste Of The Best Fried Chicken Sandwiches!"/>
                    <CardList row_size={4}></CardList>
                    <CardWithTextList></CardWithTextList>
                </Col>
            </Row>
            <Pagination/>
        </Container>
    )
}

export default ItemsList
