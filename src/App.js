import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LandingPage from "./pages/landingPage";
import TicketData from "./component/TicketData";
import TripData from "./pages/tripData";
import Trips from "./pages/trips";
import Layout from "./Router/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/trips" element={<Trips />} />
          <Route exact path="/tripData" element={<TripData />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
