import {
    Route,
    BrowserRouter as Router
} from "react-router-dom";

import {useSelector} from "react-redux";
// models
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";
import AboutUS from "./pages/AboutUs";
import CheckOut from "./pages/CheckOut";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import ItemsList from "./pages/ItemsList";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import ItemsSingle from "./pages/ItemsSingle";
import ConfirmedOrder from "./pages/ConfirmedOrder/ConfirmedOrder";
import Home from "./pages/Home";
// style
import './css/style.css'
import './css/home.css'
import './App.css';


function App() {
    const colorMode = useSelector(state => state.nightMode.mode)
    return (
        <Router>
            <NavBar title="aaa" color={colorMode}/>
            <main className={`bg_gray ${colorMode} header-fix-padding`}>
                <Route exact path="/" component={Home}/>
                <Route path="/about-us" component={AboutUS}/>
                <Route path="/checkout" component={CheckOut}/>
                <Route path="/contact-us" component={ContactUs}/>
                <Route path="/error" component={ErrorPage}/>
                <Route exact path="/menu" component={ItemsList}/>
                <Route exact path="/menu/beef" component={ItemsList}/>
                <Route exact path="/menu/chicken" component={ItemsList}/>
                <Route exact path="/menu/appetizers" component={ItemsList}/>
                <Route exact path="/menu/drinks" component={ItemsList}/>
                <Route path="/items-single" component={ItemsSingle}/>
                <Route path="/offers" component={Offers}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/register" component={SignIn}/>
                <Route path="/confirm" component={ConfirmedOrder}/>
            </main>
            <Footer color={colorMode}/>
        </Router>

    )
}

export default App


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
//
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