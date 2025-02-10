import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Cursor, Footer, Navbar } from "./components";
import { MotionRoutes } from "./components/MotionRoutes";

function App() {
  return (
    <div className="App">
      <Cursor />

      <Router>
        <Navbar />

        <MotionRoutes />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
