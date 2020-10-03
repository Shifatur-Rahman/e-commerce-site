import React, { Component, Fragment } from "react";
import PageTop from "../components/pageTop/PageTop";
import TopNavigation from "../components/topNavigation/TopNavigation";

export default class KamijPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop title='থ্রি-পিস' />
      </Fragment>
    );
  }
}
