import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
// import Product from "./Screen/Product/product.screen";
// import Login from "./Screen/Login/login.screen";
import Register from "./Screen/Register/register.screen";
import Header from "./Component/Header/header.component";
import CartContainer from "./Screen/Cart/cart.container";
import HomeContainer from "./Screen/Home/home.container";
import LoginContainer from "./Screen/Login/login.container";
import ProductContainer from "./Screen/Product/product.container";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/product" component={ProductContainer} />
          <Route path="/login" exact component={LoginContainer} />
          <Route path="/register" exact component={Register} />
        </Switch>
        <CartContainer />
      </div>
    </Router>
  );
}

export default App;
