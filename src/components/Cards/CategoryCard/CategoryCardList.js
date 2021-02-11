import {Col, Container, Row} from "react-bootstrap";
import CategoryCard from "./CategoryCard";

let items = [
    { id: 1, item: "Dog" },
    { id: 2, item: "Bird" },
    { id: 3, item: "Cat" },
    { id: 4, item: "Mouse" },

  ];
let res = items.map(o => o.item);

const CategoryCardList = (props) => {
                    return (
                        <Container >
                            {/*<br/>*/}
                            <Row className="pt-3 pr-2 pl-2" lg={4} md={4} sm={4} xs={2}>
                               {res.map((item, index) => <CategoryCard key={item.id}>{item}</CategoryCard>)}
                            </Row>
                        </Container>
                    )
}

export default CategoryCardList

