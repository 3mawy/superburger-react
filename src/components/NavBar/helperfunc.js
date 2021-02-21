    // function toggle(state, setToggleState) {
    //     setToggleState(state === "" ? "show" : "");
    // }
    export const cartTotal = (cartItems) => {
        let total = 0;
        cartItems.forEach(function (item) {
            total = total + (parseInt(item.price) * parseInt(item.count))
            console.log(item)
        });
        return total
    };