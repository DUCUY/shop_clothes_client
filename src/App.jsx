import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, 
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import { useSelector } from "react-redux";



function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/about">
          <Aboutus />
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
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/login" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};


export default App;
