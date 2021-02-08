import "./style.css"

const Banner = (props) => {
    return (
        <div className="promo">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <i className="icon-food_icon_delivery"></i>
        </div>
    )
}

export default Banner
