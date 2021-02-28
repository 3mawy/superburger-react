import "./style.css"

const Loading = ({className}) => {
return (
    <div className={`square ${className}`} >
        <div></div>
        <div></div>
    </div>
)
}

export default Loading
