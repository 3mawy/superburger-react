import Button from "react-bootstrap/Button";
import sample from '../sample.jpeg'
import {Col, Container, Row} from "react-bootstrap";
import CardItem from "../CardItem";
import CardWithText from "./CardWithText";

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

const CardWithTextList = (props) => {
    return (
        <Container fluid className="p-0">
            <br/>
            <Row  className="justify-content-end" xs={1} sm={2} md={2} lg={2} xl={2} >
            {res.map((item, index) => <CardWithText key={item.id} name={"Cheesy Cheesy"} price={"45"} color={props.color}>{item}</CardWithText>)}
            </Row>
        </Container>
)
}

export default CardWithTextList
