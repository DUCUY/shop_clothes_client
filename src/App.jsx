import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect, 
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
// import { useSelector } from "react-redux";
import { Toaster } from 'react-hot-toast';
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";


function App() {
  // const user = useSelector((state) => state.user.currentUser);

  return (
    <>
    <Toaster position="top-center"/>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/about">
          <About />
        </Route>
        <Route  path="/contact">
          <Contact/>
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/my-profile">
          <Profile />
        </Route>
        <Route path="/my-orders">
          <MyOrders />
        </Route>
      </Switch>
    </Router>
    </>
    
  );
};


export default App;
