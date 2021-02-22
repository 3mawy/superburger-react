import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardItem from "../Cards/CardItem";
import "./style.css"
import PropTypes from "prop-types";
import CardWithText from "../Cards/CardWithText/CardWithText";
const MyOwlCarousel = ({items}) => {
    return (
            <div className="container-fix">
            <OwlCarousel className="owl-theme " center loop autoWidth margin={5} nav>
                    <CardItem />
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
            </OwlCarousel>
            </div>

    )
}
CardWithText.propTypes = {
  items: PropTypes.array,
}
export default MyOwlCarousel