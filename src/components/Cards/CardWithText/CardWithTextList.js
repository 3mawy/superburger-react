import {Container, Row} from "react-bootstrap";
import CardWithText from "./CardWithText";
import PropTypes from "prop-types";
import {getMenuItems} from "../../../redux/remotes_thunk/menuItemsThunk";
import {useDispatch, useSelector} from "react-redux";
import {selectMenuItems} from "../../../redux/slices/menuItemsSlice";


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
    console.log(res)

const CardWithTextList = ({items}) => {
    const dispatch = useDispatch()
    const getMenuItemsData = () =>  dispatch(getMenuItems())

    const menuItems = useSelector(selectMenuItems)
    console.log(menuItems.results)
    return (
        <Container fluid className="p-0">
            <br/>
            <button onClick={getMenuItemsData}> 555</button>
            <Row  className="justify-content-end" xs={1} sm={2} md={2} lg={2} xl={2} >
            {res.map((item) => <CardWithText key={item.id} name={"Cheesy Cheesy"} price={45} img={"link"}>{item}</CardWithText>)}
            </Row>
        </Container>
)
}
CardWithTextList.propTypes = {
  items: PropTypes.array
}
export default CardWithTextList
