import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// models
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";
import AboutUS from "./pages/AboutUs";
import CartDetails from "./pages/CartDetails/CartDetails";
import CheckOut from "./pages/CheckOut/CheckOut";
import ContactUs from "./pages/ContactUs/ContactUs";
import ItemsList from "./pages/ItemsList";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn";
import ItemsSingle from "./pages/ItemsSingle";
import ConfirmedOrder from "./pages/ConfirmedOrder/ConfirmedOrder";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {selectColorMode} from "./redux/slices/nightModeSlice";
import {useTranslation} from "react-i18next";
import {selectLanguage} from "./redux/slices/languageSlice";
import {useEffect, useState} from "react";
import OffersSingle from "./pages/OffersSingle";
import NotFound from "./components/CommonComponents/NotFound/NotFound";
import {Switch} from "react-router";
import {useAlertState} from "./hooks/alertHook";
import {isAuthSelector} from "./redux/slices/userSlice";
import {getCurrentUserData} from "./redux/remotes_thunk/userThunk";
import {getCurrentUserOrders} from "./redux/remotes_thunk/orderThunk";

function App() {
    const dispatch = useDispatch();

    const colorMode = useSelector(selectColorMode)
    const lang = useSelector(selectLanguage)
    const [t, i18n] = useTranslation('common');
    useEffect(() => {
        i18n.changeLanguage(lang)
        console.log('aaaaaaaaaaaaaaa')
    }, [lang])
    const [isAuth, setIsAuth] = useState(useSelector(isAuthSelector));

    useEffect(() => {
            dispatch(getCurrentUserData())
            dispatch(getCurrentUserOrders())
    }, [isAuth])
    // useRefreshToken();

    //Alert
    useAlertState()

    return (
        <Router>
            <NavBar className={`bg_gray ${lang}`}/>
            <main className={`bg_gray ${colorMode} ${lang} header-fix-padding`}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/about-us" component={AboutUS}/>
                    <Route exact path="/cart" component={CartDetails}/>
                    <Route exact path="/checkout" component={CheckOut}/>
                    <Route exact path="/contact-us" component={ContactUs}/>
                    <Route exact path="/success" component={ConfirmedOrder}/>

                    <Route exact path="/menu" component={ItemsList}/>
                    // TODO:REFACTOR

                    <Route exact path="/menu/:cat" component={ItemsList}/>

                    <Route exact path="/menu-items/:id" component={ItemsSingle}/>
                    <Route exact path="/offers" component={Offers}/>
                    <Route exact path="/offers/:id" component={OffersSingle}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/register" component={SignIn}/>
                    <Route exact path="/confirm" component={ConfirmedOrder}/>
                    <Route path="*" component={NotFound}/>
                </Switch>

            </main>
            <Footer/>
        </Router>

    )
}

export default App


// <Route exact path="/menu/chicken" render={(props) => (
//     <ItemsList {...props} cat={1}/>
// )}/>
// <Route exact path="/menu/beef" render={(props) => (
//     <ItemsList {...props} cat={2}/>
// )}/>
// <Route exact path="/menu/:name" render={(props) => (
//     <ItemsList {...props} cat={3}/>
// )}/>
// <Route exact path="/menu/specials" render={(props) => (
//     <ItemsList {...props} cat={4}/>
// )}/>
//
// class App extends Component {
//   state = {
//     todos: []
//   };
//
//   async componentDidMount() {
//     try {
//       const res = await fetch('http://127.0.0.1:8000/sizes/');
//       const todos_pre = await res.json();
//       const todos = todos_pre.results
//       this.setState({
//         todos
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         {this.state.todos.map(item => (
//           <div key={item.id}>
//             <h1>{item.name}</h1>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }
//         {/*      <Route exact path="/" render={(props) => (*/}
//         {/*        <Home  color={colorMode} />*/}
//         {/*        )}/>*/}
//
//         {/*      <Route path="/about-us" render={(props) => (*/}
//         {/*        <AboutUS {...props} color={colorMode} />*/}
//         {/*        )}/>*/}
//
//         {/*      <Route path="/checkout" render={(props) => (*/}
//         {/*        <CheckOut {...props} color={colorMode} />*/}
//         {/*        )}/>*/}

//         {/*      <Route path="/contact-us" render={(props) => (*/}
//         {/*        <ContactUs {...props} color={colorMode} />*/}
//         {/*        )}/>*/}
//
//         {/*      <Route path="/error" render={(props) => (*/}
//         {/*        <ErrorPage {...props} color={colorMode} />*/}
//         {/*        )}/>*/}
//
//         {/*/*Menu routes*/*/}
//         {/*      <Route exact path="/menu" render={(props) => (*/}
//         {/*        <ItemsList {...props} color={colorMode} />*/}
//         {/*        )}/>*/}
//
//         {/*      <Route path="/menu/beef" render={(props) => (*/}
//         {/*        <ItemsList {...props} color={colorMode} />*/}
//         {/*        )}/>*/}
//
//         {/*      <Route path="/menu/chicken" render={(props) => (*/}
//         {/*        <ItemsList {...props} color={colorMode} />*/}
//         {/*        )}/>*/}
//
//         {/*      <Route path="/menu/appetizers" render={(props) => (*/}
//         {/*        <ItemsList {...props} color={colorMode} />*/}
//         {/*        )}/>*/}
//         {/*/*Menu routes end*/*/}
//
//         {/*      <Route path="/items-single" render={(props) => (*/}
//         {/*        <ItemsSingle {...props} color={colorMode} />*/}
//         {/*        )}/>*/}
//
//         {/*      <Route path="/offers" render={(props) => (*/}
//         {/*        <Offers {...props} color={colorMode} />*/}
//         {/*        )}/>*/}
//
//         {/*      <Route path="/profile" render={(props) => (*/}
//         {/*        <Profile {...props} color={colorMode} />*/}
//         {/*        )}/>*/}
//
//         {/*      <Route path="/register" render={(props) => (*/}
//         {/*        <SignIn {...props} color={colorMode} />*/}
//         {/*        )}/>*/}
//
//         {/*      <Route path="/confirm" render={(props) => (*/}
//         {/*        <ConfirmedOrder {...props} color={colorMode} />*/}
//         {/*        )}/>*/}

// const [colorMode, setcolorModeState] = useState("");
// function colorModeToggle() {
//     setcolorModeState(colorMode === "" ? "dark" : "");
// }