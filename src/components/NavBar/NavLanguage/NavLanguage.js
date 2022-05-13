import "./style.css"

import {useDispatch, useSelector} from "react-redux";
import {selectLanguage, toggle} from "../../../redux/slices/languageSlice";


const NavLanguage = () => {
    const dispatch = useDispatch()
    const lang = useSelector(selectLanguage)

    const langToggle = () => dispatch(toggle())

    return (
        //temp
        <a className={`language-icon ${lang}`}
           onClick={langToggle}>
            <strong>{lang === "ar" ? 'عربي' : 'EN'}</strong>
        </a>


    )
}

export default NavLanguage


        // <div style={{position: "absolute", zIndex: "5000", left:"3rem", top: ".85rem"}}>
        //     <div className="styled-select lang-selector mt-lg-2">
        //         <select>
        //             <option onClick={arTrigger}
        //                     value="Arabic" selected>Ar
        //             </option>
        //             <option onClick={enTrigger}
        //                     value="English">Eng
        //             </option>
        //         </select>
        //     </div>
        // </div>