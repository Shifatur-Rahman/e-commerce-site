import React, { Component, Fragment } from "react";
import Footer from "../components/footer/Footer";
import HomePage from "../pages/HomePage";
import ProductDetails from "../pages/ProductDetails";
import ShareePage from "../pages/ShareePage";
import { Route, Switch } from "react-router-dom";
export default class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/productdetails' component={ProductDetails} />
          <Route exact path='/sharee' component={ShareePage} />
        </Switch>
      </Fragment>
    );
  }
}
