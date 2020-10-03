

import React from "react";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.js";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
