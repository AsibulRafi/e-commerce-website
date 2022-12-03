import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Banner,
  Dishes,
  Footer,
  Info,
  Navbar,
  Reservation,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Dishes />
      <About />
      <Info />
      <Reservation />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
