import {Col, Container, Row} from "react-bootstrap";
import CategoryCard from "./CategoryCard";

let categories = [
    { id: 1, name: "BEEF" },
    { id: 2, name: "CHICKEN" },
    { id: 3, name: "SNACKS" },
    { id: 4, name: "DRINKS" },

  ];
let res = categories.map(cat => cat.name);
const CategoryCardList = (props) => {
                    return (
                        <Container >
                            {/*<br/>*/}
                            <Row className="pt-3 pr-2 pl-2" lg={4} md={4} sm={4} xs={2}>
                               {res.map((cat, index) => <CategoryCard key={cat.id} category={cat}/>)}
                            </Row>
                        </Container>
                    )
}

export default CategoryCardList

