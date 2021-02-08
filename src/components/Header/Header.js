import {
  NavLink,
} from "react-router-dom";


import logo from '../img/logo_sticky.svg'

const Header = (props) => {
    return (
            <header className=" header_in clearfix">
                <div className="container">
                    <div id="logo">
                        <NavLink to="/">
                            <img src={logo} width="162" height="35" alt=""></img>
                        </NavLink>
                    </div>
                    <div className="layer"></div>
                    <ul id="top_menu">
                        <li><a href="#sign-in-dialog" id="sign-in" className="login">Sign In</a></li>
                        <li>
                            <div className="dropdown dropdown-cart">
                                <a href="cart.html" className="cart_bt"><strong>2</strong></a>
                                <div className="dropdown-menu">
                                    <ul>
                                        <li>
                                            <figure><img src={require("../img/menu-thumb-placeholder.jpg")}
                                                         data-src="img/menu-thumb-1.jpg" alt="" width="50" height="50"
                                                         className="lazy"></img></figure>
                                            <strong><span>1x Pizza Napoli</span>$12.00</strong>
                                            <a href="#0" className="action"><i className="icon_trash_alt"></i></a>
                                        </li>
                                        <li>
                                            <figure><img src="../img/menu-thumb-placeholder.jpg"
                                                         data-src="img/menu-thumb-2.jpg" alt="" width="50" height="50"
                                                         className="lazy"></img></figure>
                                            <strong><span>1x Hamburger Maxi</span>$10.00</strong>
                                            <a href="#0" className="action"><i className="icon_trash_alt"></i></a>
                                        </li>
                                        <li>
                                            <figure><img src="../img/menu-thumb-placeholder.jpg"
                                                         data-src="img/menu-thumb-3.jpg" alt="" width="50" height="50"
                                                         className="lazy"></img></figure>
                                            <strong><span>1x Red Wine Bottle</span>$20.00</strong>
                                            <a href="#0" className="action"><i className="icon_trash_alt"></i></a>
                                        </li>
                                    </ul>
                                    <div className="total_drop">
                                        <div className="clearfix add_bottom_15"><strong>Total</strong><span>$32.00</span>
                                        </div>
                                        <a href="order.html" className="btn_1 outline">View Cart</a><a href="order.html"
                                                                                                       className="btn_1">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a href="#0" className="open_close">
                        <i className="icon_menu"></i><span>Menu</span>
                    </a>
                    <nav className="main-menu">
                        <div id="header_menu">
                            <a href="#0" className="open_close">
                                <i className="icon_close"></i><span>Menu</span>
                            </a>
                            <a href="index.html"><img src="../img/logo.svg" width="162" height="35" alt=""></img></a>
                        </div>
                        <ul>
                            <li className="submenu">
                                <a href="#0" className="show-submenu">Home</a>
                                <ul>
                                    <li><NavLink to="/about-us">About Us</NavLink></li>
                                    <li><NavLink to="/checkout">Checkout</NavLink></li>
                                    <li><NavLink to="/items-list">Items List</NavLink></li>
                                    <li><a href="index-4.html">Video Background</a></li>
                                    <li><a href="index-5.html">GDPR Cookie Bar EU Law</a></li>
                                    <li><a href="header-user-logged.html">Header User Logged</a></li>
                                    <li><a href="header-cart-top.html">Header Cart Top</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#0" className="show-submenu">Listing</a>
                                <ul>
                                    <li className="third-level"><a href="#0">List pages</a>
                                        <ul>
                                            <li><a href="grid-listing-filterscol.html">List default</a></li>
                                            <li><a href="grid-listing-filterscol-map.html">List with map</a></li>
                                            <li><a href="listing-map.html">List side map</a></li>
                                            <li><a href="grid-listing-masonry.html">List Masonry Filter</a></li>
                                        </ul>
                                    </li>
                                    <li className="third-level"><a href="#0">Detail pages</a>
                                        <ul>
                                            <li><a href="detail-restaurant.html">Detail page 1</a></li>
                                            <li><a href="detail-restaurant-2.html">Detail page 2</a></li>
                                            <li><a href="detail-restaurant-3.html">Detail page 3</a></li>
                                        </ul>
                                    </li>
                                    <li className="third-level"><a href="#0">OpenStreetMap</a>
                                        <ul>
                                            <li><a href="grid-listing-filterscol-openstreetmap.html">List with map</a></li>
                                            <li><a href="listing-map-openstreetmap.html">List side map</a></li>
                                            <li><a href="grid-listing-masonry-openstreetmap.html">List Masonry Filter</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="submit-restaurant.html">Submit Restaurant</a></li>
                                    <li><a href="submit-rider.html">Submit Rider</a></li>
                                    <li><a href="order.html">Order</a></li>
                                    <li><a href="confirm.html">Confirm Order</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="#0" className="show-submenu">Other Pages</a>
                                <ul>
                                    <li><a href="404.html">404 Error</a></li>
                                    <li><a href="help.html">Help and Faq</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="leave-review.html">Leave a review</a></li>
                                    <li><a href="contacts.html">Contacts</a></li>
                                    <li><a href="coming_soon/index.html">Coming Soon</a></li>
                                    <li><a href="register.html">Sign Up</a></li>
                                    <li><a href="icon-pack-1.html">Icon Pack 1</a></li>
                                    <li><a href="icon-pack-2.html">Icon Pack 2</a></li>
                                    <li><a href="shortcodes.html">Shortcodes</a></li>
                                </ul>
                            </li>
                            <li><a href="#0">Buy this template</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

)
}

export default Header
