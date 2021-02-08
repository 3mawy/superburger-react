import Pagination from "../components/Pagination/Pagination";
import CardsList from "../components/Cards/CardsList";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import Title from "../components/CommonComponents/Title/Title";
import Banner from "../components/CommonComponents/Banner/Banner";

const ItemsList = () => {
    return (
        <Container>
            <Row>
                <Col lg={3}>
                <Sidebar/>
                </Col>
                <Col lg={9}>
                    <Banner title = "Chicken" desc="Have A Taste Of The Best Fried Chicken Sandwiches!"/>
                    <CardsList row_size={4}></CardsList>
                </Col>
            </Row>
            <Pagination/>
        </Container>
    )
}

export default ItemsList
