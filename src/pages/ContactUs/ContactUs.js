import './style.css'
import {useSelector} from "react-redux";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import SocialIcons from "../../components/CommonComponents/SocialIcons/SocialIcons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faPhone, faShareAlt} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
    const colorMode = useSelector(selectColorMode)

    return (
        <div>
            <div>
                <div className="container margin_60_40">
                    <div className="row justify-content-center">

                        <div className="col-lg-4">
                            <div className="box_contacts">
                                <FontAwesomeIcon size="lg" icon={faPhone} style={{fontSize: "2.5rem"}}/>
                                <h2>Call US!</h2>
                                <a href="tel:01095671171">0109 567 1171</a> - <a>contact@superburger.com</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box_contacts">
                                <FontAwesomeIcon size="lg" icon={faMapMarkerAlt} style={{fontSize: "2.5rem"}}/>
                                <h2>Addresses</h2>
                                <div>Hod El-Ders, SUEZ - EGYPT</div>
                                <small>MON to FRI 2pm-2am SAT 9am-2pm</small>
                                <div className={`pt-2`}>Station, SUEZ - EGYPT</div>
                                <small>MON to FRI 4pm-2am SAT 9am-2pm</small>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box_contacts">
                                <FontAwesomeIcon size="lg" icon={faShareAlt} style={{fontSize: "2.5rem"}}/>
                                <h2>Social Media</h2>
                                <SocialIcons/>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="box_general write_review">
                            <h1 className="add_bottom_15">Write A Review!</h1>
                            <div className="form-group">
                                <label>Title of your review</label>
                                <input className="form-control" type="text"
                                       placeholder="If you could say it in one sentence, what would you say?"/>
                            </div>
                            <div className="form-group">
                                <label>Your review</label>
                                <textarea className="form-control"
                                          placeholder="Write your review "/>
                            </div>

                            <a href="confirm.html" className="offers_btn order_button btn_1">Thank you!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ContactUs
