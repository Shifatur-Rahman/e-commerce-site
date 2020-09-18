import React from "react";
import "./App.css";
import TopBanner from "./components/topBanner/TopBanner";
import TopNavigation from "./components/topNavigation/TopNavigation";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";

function App() {
  return (
    <div className='App'>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
