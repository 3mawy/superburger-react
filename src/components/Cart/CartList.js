import {Container, Row} from "react-bootstrap";
import CartItem from "./CartItem";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, selectCartItems, selectItemCount, selectTotal} from "../../redux/slices/cartSlice";
import {selectColorMode} from "../../redux/slices/nightModeSlice";


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

const CartList = () => {
    const dispatch = useDispatch()
    const colorMode = useSelector(selectColorMode)

    const items = useSelector(selectCartItems)


    const removeItemFromCart = ({item}) => dispatch(removeFromCart({item: item}))

    return (
        <>
            <Container fluid className="p-0">

                <br />
                <Row className="justify-content-end" xs={1}>
                    {items.map((item) =>
                        <CartItem key={item.item} id={item.item}
                                      name={item.name} size={item.size}
                                      price={item.price} img={item.img} quantity={item.quantity}>
                        </CartItem>)
                    }
                </Row>
            </Container>
        </>

    )
}
CartList.propTypes = {
    items: PropTypes.array
}
export default CartList
