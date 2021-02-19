import "./style.css"

const Banner = ({color, title, desc}) => {
    return (
        <div className={`promo ${color}`}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <i className="icon-food_icon_delivery"></i>
        </div>
    )
}

export default Banner
