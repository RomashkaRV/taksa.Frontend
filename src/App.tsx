import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Cursor, Footer, Navbar, PawTrail } from "./components";
import { MotionRoutes } from "./components/MotionRoutes";

function App() {
  return (
    <div className="App">
      <Cursor />

      <Router>
        <Navbar />

        <PawTrail />

        <MotionRoutes />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
