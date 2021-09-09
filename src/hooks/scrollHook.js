import {useEffect, useState} from "react";

export function useScrollState() {
        const [scrollState, setScrollState] = useState(false)
        useEffect(() => {
            document.addEventListener("scroll", e => {
                let position = document.scrollingElement.scrollTop;
                if (position >= 5) {
                    setScrollState(true)
                } else {
                    setScrollState(false)
                }
            })
        }, [])
        return scrollState ? 'scrolled' : '';
    }