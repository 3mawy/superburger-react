import {Col, Container, Row} from "react-bootstrap";
import CardItem from "./CardItem";
import Loading from "../Loading/Loading";

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

const CardList = ({items, row_size}) => {
                    return (
                        <Container >
                            {items ? (
                            <Row  className="justify-content-end" lg={row_size} md={3} sm={3} xs={2}>
                                {items.map((item) =>
                                    <CardItem key={item.id} name={item.name} sizes={item.sizes} img={item.image.image}>
                                    </CardItem>)}
                            </Row>):(<Loading/>)}
                        </Container>
                    )
}

export default CardList

