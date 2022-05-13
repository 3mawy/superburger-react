import "./style.css"
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {number, string} from "prop-types";
import {selectLanguage} from "../../../redux/slices/languageSlice";


const SmallCardWithText = ({id, name, sizes, desc, img, offerPrice}) => {
    const dispatch = useDispatch()
    const lang = useSelector(selectLanguage)

    let product = {item: id, name: name, img: img}

    useEffect(() => {

    }, )

    return (
<></>
    )
}
SmallCardWithText.propTypes = {
    id: number,
    name: string,
    img: string,
}
SmallCardWithText.defaultProps = {
    name: "",
    price: "",
    img: "https://via.placeholder.com/150",
}
export default SmallCardWithText
