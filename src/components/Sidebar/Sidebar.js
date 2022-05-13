import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {selectColorMode} from "../../redux/slices/nightModeSlice";
import {selectCategories} from "../../redux/slices/categoriesSlice";
import {getMenuItems} from "../../redux/remotes_thunk/menuItemsThunk";
import {selectLanguage} from "../../redux/slices/languageSlice";
import {useScrollState} from "../../hooks/scrollHook";

const Sidebar = ({orderBySearch, FilterBySearch}) => {
    const colorMode = useSelector(selectColorMode)
    const lang = useSelector(selectLanguage)
    const isScrolled = useScrollState();

    const [sideMenuCategories, setSideMenuCategories] = useState("");
    const dispatch = useDispatch()

    const categoriesData = useSelector(selectCategories)
    const categories = categoriesData.categories.results

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

    const [orderBy, setOrderBy] = useState('');
    const [filterBy, setFilterBy] = useState('');

    // useEffect(() => {
    //     dispatch(getMenuItems({cat: filterBy}))
    // }, [filterBy])

    function OrderBy(ordering) {
        setOrderBy(ordering)
        orderBySearch(ordering);
    }

    function FilterBy(filter) {
        setFilterBy(filter)
        orderBySearch(filter);
    }

    return (
        <aside id="sidebar_fixed" className={`${lang === 'ar' ? ('text-right') : null} ${isScrolled}`}>

            <a onClick={toggleFilters} className={`open_filters btn_filters ${colorMode} ${filtersToggleState}`}><i
                className="icon_adjust-vert"/><span>Filters</span></a>

            <div className={`filter_col ${colorMode} ${filtersToggleState}`}>
                <div className="inner_bt clearfix">Filters<a onClick={toggleFilters} className="open_filters"><i
                    className="icon_close"/></a></div>
                <div className="filter_type last">
                    <h4><a data-toggle="collapse" className={`opened ${colorMode} text-uppercase concert-one`}>Sort</a></h4>
                    <div className="collapse show pl-3" id="filter_1">
                        <ul>
                            <li>
                                <label className="container_radio">Top Rated
                                    <input type="radio" name="filter_sort" onClick={() => OrderBy('-score')}/>
                                    <span className="checkmark"/>
                                </label>
                            </li>

                            <li>
                                <label className="container_radio" onClick={() => OrderBy('score')}>Price: Low To
                                    High
                                    <input type="radio" name="filter_sort"/>
                                    <span className="checkmark"/>
                                </label>
                            </li>
                            <li>
                                <label className="container_radio" onClick={() => OrderBy('-score')}>Price: High
                                    To Low
                                    <input type="radio" name="filter_sort"/>
                                    <span className="checkmark"/>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="filter_type">
                    <h4><a onClick={setSideCategories} data-toggle="collapse"
                           className={`closed ${colorMode} text-uppercase concert-one`}>Categories</a></h4>
                    <div className={`collapse show pl-3 text-capitalize ${sideMenuCategories}`} id="filter_2">
                        <ul>
                            <li>
                                <label className="container_radio">All
                                    <input type="radio" name="category_sort" onClick={() => setFilterBy('')}
                                           checked={filterBy === ''}/>
                                    <span className="checkmark"/>
                                </label>
                            </li>
                            {categories ? (
                                categories.map((cat) =>
                                    <li>

                                        <label className="container_radio">{cat.name}
                                            <input type="radio" name="category_sort" onClick={() => setFilterBy(cat.id)}
                                                   checked={cat.id === filterBy}/>
                                            <span className="checkmark"/>
                                        </label>

                                    </li>
                                )) : null}
                        </ul>
                    </div>
                </div>
            </div>
        </aside>

    )
}

export default Sidebar


