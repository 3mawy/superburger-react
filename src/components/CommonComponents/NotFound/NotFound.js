import "./style.css"
import {useSelector} from "react-redux";
import {selectColorMode} from "../../../redux/slices/nightModeSlice";

const NotFound = ({title, desc}) => {
    const colorMode = useSelector(selectColorMode)
    return (
        <main className={`bg_gray ${colorMode}`}>
            <div id="error_page">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-7 col-lg-9">
                            <figure><img src="/images/404.svg" alt="" className="img-fluid" width="550" height="234"/>
                            </figure>
                            <h2 className={`concert_one_font error_font`}>We're sorry, but the page you were looking for doesn't exist.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>

)
}

export default NotFound


                            // <form method="post" action="grid-listing-filterscol.html">
                            //     <div className="row no-gutters custom-search-input">
                            //         <div className="col-lg-10">
                            //             <div className="form-group">
                            //                 <input className="form-control no_border_r" type="text"
                            //                        placeholder="What are you looking for?"/>
                            //             </div>
                            //         </div>
                            //         <div className="col-lg-2">
                            //             <button className="btn_1 gradient" type="submit">Search</button>
                            //         </div>
                            //     </div>
                            // </form>
