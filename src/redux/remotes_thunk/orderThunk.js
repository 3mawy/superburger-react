import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTokenFromStore} from "./helper";

const requestOptions = {
    headers: {'Authorization': getTokenFromStore()},
};
export const getOrder = createAsyncThunk(
    'order/getOrder',
    async (orderId) => {

        const response = await fetch(`http://127.0.0.1:8000/placed-orders/${orderId}`, requestOptions).then((res) =>
            res.json()
        )
        return response
    }
)

export const getCurrentUserOrders = createAsyncThunk(
    'order/getUserOrders ',
    async () => {
        const response = await fetch(`http://127.0.0.1:8000/placed-orders`, requestOptions)
            .then((res) => res.json()
            )
        return response
    }
)

export const postOrder = createAsyncThunk(
    'order/postOrder',
    async ({order = {}}) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getTokenFromStore()
            },
            body: JSON.stringify(order)
        };
        console.log(order)
        const response = await fetch(`http://localhost:8000/order-create`, requestOptions)
            .then((res) => res.json()
            )
        return response
    }
)
