import Pagination from "../components/Pagination/Pagination";
import CardsList from "../components/Cards/CardsList";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";

const ItemsList = () => {
    return (
        <Container>
            <Row>
                <Col lg={3}>
                <Sidebar/>
                </Col>
                <Col lg={9}>
                    <CardsList row_size={4}></CardsList>
                </Col>
            </Row>
            <Pagination/>
        </Container>
    )
}

export default ItemsList
