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

import Title from "./components/CommonComponents/Title/Title";
import ConfirmedOrder from "./pages/ConfirmedOrder/ConfirmedOrder";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <NavBar title="aaa"/>
          <main className="bg_gray">
              <Route exact path="/" component={Home}/>
              <Route path="/about-us" component={AboutUS}/>
              <Route path="/checkout" component={CheckOut}/>
              <Route path="/contact-us" component={ContactUs}/>
              <Route path="/error" component={ErrorPage}/>
              <Route path="/items-list" component={ItemsList}/>
              <Route path="/items-single" component={ItemsSingle}/>
              <Route path="/offers" component={Offers}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/register" component={SignIn}/>
              <Route path="/confirm" component={ConfirmedOrder}/>
          </main>
        <Footer />
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
