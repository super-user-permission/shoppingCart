import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Component/Header/header.component";
import CartContainer from "./Screen/Cart/cart.container";
import HomeContainer from "./Screen/Home/home.container";
import LoginContainer from "./Screen/Login/login.container";
import ProductContainer from "./Screen/Product/product.container";
import RegisterContainer from "./Screen/Register/register.conatiner";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/product" component={ProductContainer} />
          <Route path="/login" exact component={LoginContainer} />
          <Route path="/register" exact component={RegisterContainer} />
        </Switch>
        <CartContainer />
      </div>
    </Router>
  );
}

export default App;
