import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

import './App.css';
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

import './css/style.css'
import './css/home.css'

import ConfirmedOrder from "./pages/ConfirmedOrder/ConfirmedOrder";
import Home from "./pages/Home";
import {useState} from "react";
import Button from "react-bootstrap/Button";


function App() {

        const [colorMode, setcolorModeState] = useState("");
        function colorModeToggle() {
            setcolorModeState(colorMode === "" ? "dark" : "");
        }

    return (
    <Router>
        <Button className={`offers_btn btn_1 pulse_bt m-3 pt-2  pl-4 `}
                style={{position: "absolute", zIndex: "99999999"}}
                onClick={colorModeToggle}>دوس عليا يا مادا
        </Button>

        <NavBar title="aaa">

        </NavBar>
          <main className={`bg_gray ${colorMode} header-fix-padding`} >
              <Route exact path="/" render={(props) => (
                <Home {...props} color={colorMode} />
                )}/>

              <Route path="/about-us" render={(props) => (
                <AboutUS {...props} color={colorMode} />
                )}/>

              <Route path="/checkout" render={(props) => (
                <CheckOut {...props} color={colorMode} />
                )}/>

              <Route path="/contact-us" render={(props) => (
                <ContactUs {...props} color={colorMode} />
                )}/>

              <Route path="/error" render={(props) => (
                <ErrorPage {...props} color={colorMode} />
                )}/>

              <Route path="/items-list" render={(props) => (
                <ItemsList {...props} color={colorMode} />
                )}/>

              <Route path="/items-single" render={(props) => (
                <ItemsSingle {...props} color={colorMode} />
                )}/>

              <Route path="/offers" render={(props) => (
                <Offers {...props} color={colorMode} />
                )}/>

              <Route path="/profile" render={(props) => (
                <Profile {...props} color={colorMode} />
                )}/>

              <Route path="/register" render={(props) => (
                <SignIn {...props} color={colorMode} />
                )}/>

              <Route path="/confirm" render={(props) => (
                <ConfirmedOrder {...props} color={colorMode} />
                )}/>

          </main>
        <Footer />
    </Router>

  )
}

export default App

              {/*<Route path="/about-us" component={AboutUS}/>*/}
              {/*<Route path="/checkout" component={CheckOut}/>*/}
              {/*<Route path="/contact-us" component={ContactUs}/>*/}
              {/*<Route path="/error" component={ErrorPage}/>*/}
              {/*<Route path="/items-list" component={ItemsList}/>*/}
              {/*<Route path="/items-single" component={ItemsSingle}/>*/}
              {/*<Route path="/offers" component={Offers}/>*/}
              {/*<Route path="/profile" component={Profile}/>*/}
              {/*<Route path="/register" component={SignIn}/>*/}
              {/*<Route path="/confirm" component={ConfirmedOrder}/>*/}

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
