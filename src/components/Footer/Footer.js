import "./style.css"
const Footer = ({color}) => {
    return (
        <>
            <footer className={color}>
                {/*<div className={`wave gray footer `}></div>*/}
                <div className="container margin_60_40 fix_mobile">

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <h3 className={color} data-target="#collapse_1">Quick Links</h3>
                            <div className="collapse dont-collapse-sm links" id="collapse_1">
                                <ul>
                                    <li><a href="about.html">About us</a></li>
                                    <li><a href="submit-restaurant.html">Add your restaurant</a></li>
                                    <li><a href="help.html">Help</a></li>
                                    <li><a href="account.html">My account</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contacts.html">Contacts</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className={color} data-target="#collapse_2">Categories</h3>
                            <div className="collapse dont-collapse-sm links" id="collapse_2">
                                <ul>
                                    <li><a href="grid-listing-filterscol.html">Top Categories</a></li>
                                    <li><a href="grid-listing-filterscol-full-masonry.html">Best Rated</a></li>
                                    <li><a href="grid-listing-filterscol-full-width.html">Best Price</a></li>
                                    <li><a href="grid-listing-filterscol-full-masonry.html">Latest Submissions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className={color} data-target="#collapse_3">Contacts</h3>
                            <div className="collapse dont-collapse-sm contacts" id="collapse_3">
                                <ul>
                                    <li><i className="icon_house_alt"></i>97845 Baker st. 567<br></br>Los Angeles - US</li>
                                    <li><i className="icon_mobile"></i>+94 423-23-221</li>
                                    <li><i className="icon_mail_alt"></i><a href="#0">info@domain.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className={color} data-target="#collapse_4">Keep in touch</h3>
                            <div className="collapse dont-collapse-sm" id="collapse_4">
                                <div id="newsletter">
                                    <div id="message-newsletter"></div>
                                    <form method="post" action="assets/newsletter.php" name="newsletter_form"
                                          id="newsletter_form">
                                        <div className="form-group">
                                            <input type="email" name="email_newsletter" id="email_newsletter"
                                                   className="form-control" placeholder="Your email"/>
                                                <button type="submit" id="submit-newsletter"><i
                                                    className="arrow_carrot-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="follow_us">
                                    <h5>Follow Us</h5>
                                    <ul>
                                        <li><a href="#0"><img
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                            data-src="img/twitter_icon.svg" alt="" className="lazy"></img></a></li>
                                        <li><a href="#0"><img
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                            data-src="img/facebook_icon.svg" alt="" className="lazy"></img></a></li>
                                        <li><a href="#0"><img
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                            data-src="img/instagram_icon.svg" alt="" className="lazy"></img></a></li>
                                        <li><a href="#0"><img
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                            data-src="img/youtube_icon.svg" alt="" className="lazy"></img></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                        <div className="row add_bottom_25">
                            <div className="col-lg-6">
                                <ul className="footer-selector clearfix">
                                    <li>
                                        <div className="styled-select lang-selector">
                                            <select>
                                                <option value="Arabic" selected>Arabic</option>
                                                <option value="English" >English</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="styled-select currency-selector">
                                            <select>
                                                <option value="Egyptian Pounds" selected>EGP</option>
                                                <option value="Euro">Euro</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li><img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                        data-src="img/cards_all.svg" alt="" width="230" height="35" className="lazy"></img>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="additional_links">
                                    <li><a href="#0">Terms and conditions</a></li>
                                    <li><a href="#0">Privacy</a></li>
                                    <li><span>© SuperBurger</span></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </footer>

            <div id="toTop"></div>
        </>
    )
}

export default Footer
