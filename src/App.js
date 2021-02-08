import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import AboutUS from "./pages/AboutUs";
import CheckOut from "./pages/CheckOut";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import ItemsList from "./pages/ItemsList";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ItemsSingle from "./pages/ItemsSingle";

import './css/style.css'
import Title from "./components/CommonComponents/Title/Title";

function App() {
  return (
    <Router>
        <div className='containerfluid'>
          <Header title="aaa"/>
          <Title title="ام سأسأ قرعه"/>
          <main className="bg_gray">
              <Route path="/about-us" component={AboutUS}/>
              <Route path="/checkout" component={CheckOut}/>
              <Route path="/contact-us" component={ContactUs}/>
              <Route path="/error" component={ErrorPage}/>
              <Route path="/items-list" component={ItemsList}/>
              <Route path="/items-single" component={ItemsSingle}/>
              <Route path="/offers" component={Offers}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/register" component={Register}/>
          </main>
          <Footer />
        </div>
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
