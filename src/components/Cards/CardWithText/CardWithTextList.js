import {Container, Row} from "react-bootstrap";
import CardWithText from "./CardWithText";
import PropTypes from "prop-types";
import {getMenuItems, getSingleMenuItem} from "../../../redux/remotes_thunk/menuItemsThunk";
import {useDispatch, useSelector} from "react-redux";
import {selectMenuItems} from "../../../redux/slices/menuItemsSlice";
import {useEffect} from "react";
import Loading from "../../Loading/Loading";


let res = [
    {id: 1, name: "Dog"},
    {id: 2, name: "Bird"},
    {id: 3, name: "Cat"},
    {id: 4, name: "Mouse"},
    {id: 5, name: "Horse"},
    {id: 6, name: "Horse"},
    {id: 7, name: "Horse"},
    {id: 8, name: "Horse"},
    {id: 9, name: "Horse"},
];
console.log(res)

const CardWithTextList = () => {
    const dispatch = useDispatch()

    const menuItems = useSelector(selectMenuItems)
    const items = menuItems.menuItems.results
    const loaded = menuItems.status === 'success'
    useEffect(() => {
        dispatch(getMenuItems())
    }, [])

    return (
        <Container fluid className="p-0">
            <br/>
            <Row className="justify-content-end" xs={1} sm={2} md={2} lg={2} xl={2}>
                {loaded ? (items.map((item) =>
                        <CardWithText key={item.id} id={item.id}
                                      name={item.name} price={item.price}
                                      desc={item.desc} img={item.img}>
                            {item}
                        </CardWithText>))
                    : (<Loading/>)
                }
            </Row>
        </Container>
    )
}
CardWithTextList.propTypes = {
    items: PropTypes.array
}
export default CardWithTextList
