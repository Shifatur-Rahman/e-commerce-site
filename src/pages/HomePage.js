import React, { Component, Fragment } from "react";
import TopNavigation from "../components/topNavigation/TopNavigation";
import TopBanner from "../components/topBanner/TopBanner";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";
export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopBanner />
        <Services />
        <Footer />
      </Fragment>
    );
  }
}
