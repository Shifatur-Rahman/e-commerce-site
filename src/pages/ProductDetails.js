import React, { Component, Fragment } from "react";
import Footer from "../components/footer/Footer";
import ProductDetailsPage from "../components/ProductDetailsPage/ProductDetailsPage";
import TopNavigation from "../components/topNavigation/TopNavigation";

export default class ProductDetails extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <ProductDetailsPage />
        <Footer />
      </Fragment>
    );
  }
}
