import {useState} from "react";
import {useSelector} from "react-redux";
import {selectExtras} from "../../redux/slices/extrasSlice";
import _ from "underscore";
import {Col, Row} from "react-bootstrap";

const Extras = ({itemsCount, extrasCallback}) => {
    const [extrasToggleState, setExtrasToggleState] = useState("");
    const extras = useSelector(selectExtras) || []
    console.log(extras)

    function extrasToggle() {
        setExtrasToggleState(extrasToggleState === "" ? "show" : "");
    }

    let [offerExtras, setOfferExtras] = useState([]);

    function addOrRemoveExtra(extraId) {
        if (_.indexOf(offerExtras, extraId) === -1) {
            addExtra(extraId)
        } else {
            removeExtra(extraId)
        }
    }

    function addExtra(extraId) {
        const arr = [...offerExtras, extraId];
        setOfferExtras(arr)
        document.getElementById('extra' + extraId).checked = true;
    }

    function removeExtra(extraId) {
        setOfferExtras(_.without(offerExtras, extraId))
        document.getElementById('extra' + extraId).checked = false;
    }

    console.log(offerExtras)
    extrasCallback(offerExtras)
    return (
        <div className="card pt-2">
            <div className="card-header  pb-1 pt-1" role="tab">
                <h5>
                    <a className="collapsed pt-2 pb-2" data-toggle="collapse"
                       onClick={extrasToggle}
                       aria-expanded="false">
                        <i className="indicator icon_plus"/>Extras
                    </a>
                </h5>
            </div>
            <div id="collapseTwo" className={`collapse ${extrasToggleState}`}
                 role="tabpanel"
                 data-parent="#accordion_group">
                <div className="card-body">
                    <Row>
                        {extras.map((item) =>

                            <Col xs={12} md={6} className={`pb-1 extras-layout`}
                                 onClick={() => addOrRemoveExtra(item.id)}>
                                <div className="checkboxes float-left">
                                    <div className={`padding-fix-extras`}>
                                        <span className={`extras_font`}> {item.name}</span>
                                        <span className={`extras_font`}> - {item.price}
                                            <small>LE</small>
                                                <small style={{color: "#e34b53"}}> x{itemsCount}</small></span>
                                    </div>
                                </div>
                                <label className="container_check">
                                    <input name="extras" type="checkbox"
                                           id={`extra${item.id}`}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </Col>
                        )}
                    </Row>
                </div>
            </div>
        </div>

    )
}

export default Extras
