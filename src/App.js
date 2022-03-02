import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Home from "./Screen/Home/home.screen";
import Product from "./Screen/Product/product.screen";
import Login from "./Screen/Login/login.screen";
import Register from "./Screen/Register/register.screen";
import Header from "./Component/Header/header.component";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
