import error from "../../css/img/404.svg"
import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";
import {selectColorMode} from "../../../src/redux/slices/nightModeSlice";

const ErrorPage = () => {
    const colorMode = useSelector(selectColorMode)
    return (
        <Container>
            <div id="error_page">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-7 col-lg-9">
                            <figure><img src={error} alt="" className="img-fluid" width="550" height="234"/>
                            </figure>
                            <p>We're sorry, but the page you were looking for doesn't exist.</p>
                            <form method="post" action="grid-listing-filterscol.html">
                                <div className="row no-gutters custom-search-input">
                                    <div className="col-lg-10">
                                        <div className="form-group">
                                            <input className="form-control no_border_r" type="text"
                                                   placeholder="What are you looking for?"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <button className="btn_1 gradient" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default ErrorPage
