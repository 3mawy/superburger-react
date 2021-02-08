
const Title = (props) => {
    return (
        <div className="main_title mb-1 mt-4 center">
            <h2 style={{color: props.color}}>{props.title}</h2>
            <p style={{color: props.descColor}}>{props.desc}</p>
            <span><em></em></span>
        </div>
    )
}

export default Title
