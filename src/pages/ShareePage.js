import React, { Component, Fragment } from "react";
import TopNavigation from "../components/topNavigation/TopNavigation";
import PageTop from "../components/pageTop/PageTop";
import AllSharee from "../components/allSharee.js/AllSharee";
import Footer from "../components/footer/Footer";

export default class ShareePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop title='শাড়ি' />
        <AllSharee />
        <Footer />
      </Fragment>
    );
  }
}
