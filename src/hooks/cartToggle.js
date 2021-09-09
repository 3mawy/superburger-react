import {useEffect, useState} from "react";
import {useMobileState} from "./mobileScreenHook";


export function CartToggle() {
    const [cartState, setToggleState] = useState("hide");
    let isMobile = (useMobileState() <= 991);

        setToggleState(cartState === "hide" ? "show" : "hide")
        if (isMobile === true) {
            setToggleState("hide")
        }
    return cartState
}