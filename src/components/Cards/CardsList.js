import {Col, Container, Row} from "react-bootstrap";
import CardItem from "./CardItem";

let items = [
    { id: 1, item: "Dog" },
    { id: 2, item: "Bird" },
    { id: 3, item: "Cat" },
    { id: 4, item: "Mouse" },
    { id: 5, item: "Horse" },
    { id: 6, item: "Horse" },
    { id: 7, item: "Horse" },
    { id: 8, item: "Horse" },
    { id: 9, item: "Horse" },
  ];
let res = items.map(o => o.item);

const CardsList = (props) => {
                    // let arrays = SpliceItemsIntoArrays(items, props.row_size)
                    return (
                        <Container >
                            {/*<br/>*/}
                            <Row  className="justify-content-end" lg={props.row_size} md={3} sm={3} xs={2}>
                                {res.map((item, index) => <Col ><CardItem key={item.id}>{item}</CardItem></Col>)}
                            </Row>
                        </Container>
                    )
}

export default CardsList

