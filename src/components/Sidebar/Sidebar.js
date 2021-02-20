import "../../css/listing.css"
import {useSelector} from "react-redux";
import {useState} from "react";

const Sidebar = () => {
    const colorMode = useSelector(state => state.nightMode.mode)
    const [sideMenuCategories, setSideMenuCategories] = useState("");
    function setSideCategories() {
        setSideMenuCategories(sideMenuCategories === "" ? "show" : "");
    }

    const [sideMenuRating, setSideMenuRating] = useState("");
    function setSideRating() {
        setSideMenuRating(sideMenuRating === "" ? "show" : "");
    }

    const [filtersToggleState, setFiltersState] = useState("");
    function toggleFilters() {
        setFiltersState(filtersToggleState === "" ? "show" : "");
    }
    return (
        <aside id="sidebar_fixed">

            <a onClick={toggleFilters} className={`open_filters btn_filters ${colorMode}`}><i
                className="icon_adjust-vert"></i><span>Filters</span></a>

            <div className={`filter_col ${colorMode} ${filtersToggleState}`}>
                <div className="inner_bt clearfix">Filters<a onClick={toggleFilters} className="open_filters"><i
                    className="icon_close"></i></a></div>
                <div className="filter_type ">
                    <h4><a href="#filter_1" data-toggle="collapse" className={`opened ${colorMode}`}>Sort</a></h4>
                    <div className="collapse show" id="filter_1">
                        <ul>
                            <li>
                                <label className="container_radio">Top Rated
                                    <input type="radio" name="filter_sort" checked=""/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_radio">Reccomended
                                    <input type="radio" name="filter_sort"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_radio">Price: low to high
                                    <input type="radio" name="filter_sort"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_radio">Up to 15% off
                                    <input type="radio" name="filter_sort"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_radio">All Offers
                                    <input type="radio" name="filter_sort"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_radio">Distance
                                    <input type="radio" name="filter_sort"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="filter_type">
                    <h4><a href="#filter_2" onClick={setSideCategories} data-toggle="collapse" className={`closed ${colorMode}`}>Categories</a></h4>
                    <div className={`collapse ${sideMenuCategories}`} id="filter_2">
                        <ul>
                            <li>
                                <label className="container_check">Pizza - Italian <small>12</small>
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">Japanese - Sushi <small>24</small>
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">Burghers <small>23</small>
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">Vegetarian <small>11</small>
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">Bakery <small>18</small>
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">Chinese <small>12</small>
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">Mexican <small>15</small>
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="filter_type last">
                    <h4><a href="#filter_4" onClick={setSideRating} data-toggle="collapse" className={`closed ${colorMode}`}>Rating</a></h4>
                    <div className={`collapse ${sideMenuRating}`} id="filter_4">
                        <ul>
                            <li>
                                <label className="container_check">Superb 9+ <small>06</small>
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">Very Good 8+ <small>12</small>
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">Good 7+ <small>17</small>
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="container_check">Pleasant 6+ <small>43</small>
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <p><a href="#0" className="btn_1  full-width">Filter</a></p>
            </div>
        </aside>

    )
}

export default Sidebar
