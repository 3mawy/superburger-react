import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardItem from "../Cards/CardItem";
import "./style.css"
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import {useEffect} from "react";
import {getMenuItems} from "../../redux/remotes_thunk/menuItemsThunk";
import {useDispatch, useSelector} from "react-redux";
import {selectMenuItems} from "../../redux/slices/menuItemsSlice";

const MyOwlCarousel = ({className}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMenuItems({orderBy: '-score'}))
    }, [])
    const menuItems = useSelector(selectMenuItems)
    const items = menuItems.menuItems.results
    return (
        <div className={`container-fix ${className}`}>
            {items ? (
                <div className={`container-fix`}>
                    <OwlCarousel className="owl-theme" center loop autoWidth margin={5} nav>
                        {items.map((item) =>
                            <CardItem key={item.id} id={item.id} name={item.name} category={item.category.name}
                                      sizes={item.sizes} img={item.image.image}>
                            </CardItem>)}
                    </OwlCarousel>
                </div>): (<Loading className={`mt-5`}/>)}
        </div>

    )
}
MyOwlCarousel.propTypes =
    {
        items: PropTypes.array,
    }
export default MyOwlCarousel