import "../../css/listing.css"

const Sidebar = (props) => {
    return (
        <aside id="sidebar_fixed">
            <br/>
            <br/>
            <div className="type_delivery">
                <ul className="clearfix">
                    <li>
                        <label className="container_radio">Delivery
                            <input type="radio" name="type_d" checked="checked"/>
                                <span className="checkmark"></span>
                        </label>
                    </li>
                    <li>
                        <label className="container_radio">Take away
                            <input type="radio" name="type_d"/>
                                <span className="checkmark"></span>
                        </label>
                    </li>
                </ul>
            </div>

            <a href="#0" className="open_filters btn_filters"><i
                className="icon_adjust-vert"></i><span>Filters</span></a>

            <div className={`filter_col ${props.color}`}>
                <div className="inner_bt clearfix">Filters<a href="#" className="open_filters"><i
                    className="icon_close"></i></a></div>
                <div className="filter_type " >
                    <h4><a href="#filter_1" data-toggle="collapse" className="opened">Sort</a></h4>
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
                    <h4><a href="#filter_2" data-toggle="collapse" className="closed">Categories</a></h4>
                    <div className="collapse" id="filter_2">
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
                <div className="filter_type">
                    <h4><a href="#filter_3" data-toggle="collapse" className="closed">Distance</a></h4>
                    <div className="collapse" id="filter_3">
                        <div className="distance">Radius around selected destination <span></span> km</div>
                        <div className="add_bottom_25"><input type="range" min="10" max="50" step="5" value="20"
                                                              data-orientation="horizontal"/></div>
                    </div>
                </div>
                <div className="filter_type last">
                    <h4><a href="#filter_4" data-toggle="collapse" className="closed">Rating</a></h4>
                    <div className="collapse" id="filter_4">
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
                <p><a href="#0" className="btn_1 outline full-width">Filter</a></p>
            </div>
        </aside>

)
}

export default Sidebar
