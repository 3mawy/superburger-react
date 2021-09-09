import {Container, Row} from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import { useSelector} from "react-redux";
import {selectCategories} from "../../../redux/slices/categoriesSlice";
import Loading from "../../Loading/Loading";


const CategoryCardList = () => {

    const categoriesData = useSelector(selectCategories)
    const categories = categoriesData.categories.results
    return (
        <Container>
            {/*<br/>*/}

            {categories ? (<Row className="pt-3 pr-2 pl-2" lg={4} md={4} sm={4} xs={2}>
                {categories.map((cat) =>
                    <CategoryCard key={cat.id} category={cat}/>
                )}</Row>) : (
                <Loading className={`mt-5`}/>)}

        </Container>
    )
}

export default CategoryCardList


// let base_categories = [
//     {id: 1, name: "beef"},
//     {id: 2, name: "chicken"},
//     {id: 3, name: "snacks"},
//     {id: 4, name: "specials"},
//
// ];
// let res = base_categories.map(cat => cat.name);