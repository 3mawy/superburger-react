import {useDispatch} from "react-redux";
import {arLanguage, enLanguage} from "../../redux/slices/languageSlice";


const NavLanguage = () => {
    const dispatch = useDispatch()
    const arTrigger = () => dispatch(arLanguage())
    const enTrigger = () => dispatch(enLanguage())
    return (
        //temp
        <div style={{position: "absolute", zIndex: "5000", left:"3rem", top: ".85rem"}}>
            <div className="styled-select lang-selector">
                <select>
                    <option onClick={arTrigger}
                            value="Arabic" selected>Ar
                    </option>
                    <option onClick={enTrigger}
                            value="English">Eng
                    </option>
                </select>
            </div>
        </div>


    )
}

export default NavLanguage
