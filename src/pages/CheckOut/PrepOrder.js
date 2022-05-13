import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../redux/slices/cartSlice";

export function PrepOrder() {
    const dispatch = useDispatch()
    const order_items = []
    const cartItems = useSelector(selectCartItems)
    console.log(cartItems)
    cartItems.map((item) => {
        let order_item = {}
        if (item.offer) {
            order_item = {
                "quantity": item.quantity,
                "comments": item.comments,
                "offer": item.offer,
                "extras": item.extras,

            };
        } else {
            order_item = {
                "quantity": item.quantity,
                "size": item.size,
                "comments": item.comments,
                "item": item.item,
                "extras": item.extras,
            };
        }
        order_items.push(order_item);
    })

    const order = {
        "placed_order": {
            "delivery": true,
            "delivery_notes": "aaaaaaaaaaaaaaaaaaaaa",
            "delivery_address": 1
        },
        "order_items": order_items
    }

const ordeaar ={
        "placed_order": {"delivery": true,
            "delivery_notes": "aaaaaaaaaaaaaaaaaaaaa",
            "delivery_address": 1
        },
        "order_items": [{"quantity": 5, "size": 1, "comments": "", "item": 1, "extras": []}]
    }
    return order;
}

