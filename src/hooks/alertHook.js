import {useEffect, useState} from "react";
import {useAlert} from 'react-alert'
import {useDispatch, useSelector} from "react-redux";
import {resetStatus, selectStatus} from "../redux/slices/cartSlice";

export function useAlertState() {
    const dispatch = useDispatch()
    const alertStatus = useSelector(selectStatus)

    const alert = useAlert()
    useEffect(() => {
        if (alertStatus === 'successful') {
            alert.success(`Item Added Successfully!`)
        } else if (alertStatus === 'removed') {
            alert.success(`Item Removed Successfully!`)
        }
        dispatch(resetStatus())
    }, [alert, alertStatus])
}