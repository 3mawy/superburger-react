import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

export function useCloseCart(ref, cartState) {
    const dispatch = useDispatch()
    useEffect(() => {

        function handleClickOutside(event) {
            const baseClassName = ref.current.className
            if (ref.current && !ref.current.contains(event.target)) {
                if(cartState === 'show'){
                    ref.current.className = "dropdown-menu hide"
                }
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

