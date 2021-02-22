// function toggle(state, setToggleState) {
//     setToggleState(state === "" ? "show" : "");
// }
export const cartTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach(function (item) {
        total = total + (parseInt(item.price) * parseInt(item.count))
    });
    return total
};
export const cartTotalCount = (cartItems) => {
    let totalCount = 0;
    cartItems.forEach(function (item) {
        totalCount = totalCount + parseInt(item.count)
    });
    return totalCount
};