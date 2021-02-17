import SingleItemDetails from "../components/SingleItemDetails/SingleItemDetails";

const ItemsSingle = ({color}) => {
    return (
        <div className={`container pt-5`}>
            <SingleItemDetails color={color}/>
        </div>
    )
}

export default ItemsSingle
