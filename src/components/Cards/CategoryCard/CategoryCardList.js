import {Col, Container, Row} from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import PropTypes from "prop-types";

let categories = [
    { id: 1, name: "beef" },
    { id: 2, name: "chicken" },
    { id: 3, name: "snacks" },
    { id: 4, name: "drinks" },

  ];
let res = categories.map(cat => cat.name);
const CategoryCardList = ({categories}) => {
                    return (
                        <Container >
                            {/*<br/>*/}
                            <Row className="pt-3 pr-2 pl-2" lg={4} md={4} sm={4} xs={2}>
                               {res.map((cat, index) => <CategoryCard key={cat.id} category={cat}/>)}
                            </Row>
                        </Container>
                    )
}
CategoryCardList.propTypes = {
  categories: PropTypes.array,
}
export default CategoryCardList

