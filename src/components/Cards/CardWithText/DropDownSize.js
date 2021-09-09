import {Dropdown} from "react-bootstrap";
import PropTypes from "prop-types";
import "./style.css"

const DropDownSize = ({sizes}) => {

    return (
                <Dropdown className={`dropdown_sizes `}>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        Size
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {sizes.map((item) =>
                            <Dropdown.Item href="#/action-1">{item.price}</Dropdown.Item>
                            )}
                    </Dropdown.Menu>
                </Dropdown>

    )
}
DropDownSize.propTypes = {
    sizes: PropTypes.array
}
export default DropDownSize
