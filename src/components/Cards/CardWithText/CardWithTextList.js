import {Container, Row} from "react-bootstrap";
import CardWithText from "./CardWithText";
import PropTypes from "prop-types";

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

const CardWithTextList = ({items}) => {
    return (
        <Container fluid className="p-0">
            <br/>
            <Row  className="justify-content-end" xs={1} sm={2} md={2} lg={2} xl={2} >
            {res.map((item, index) => <CardWithText key={item.id} name={"Cheesy Cheesy"} price={45} img={"link"}>{item}</CardWithText>)}
            </Row>
        </Container>
)
}
CardWithTextList.propTypes = {
  items: PropTypes.array
}
export default CardWithTextList
