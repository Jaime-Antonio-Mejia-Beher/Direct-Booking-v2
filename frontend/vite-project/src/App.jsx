import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Basement from "./pages/BasementPage";
import Upstairs from "./pages/UpstairsPage";
import Cupertino from "./pages/CupertinoPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basement" element={<Basement />} />
          <Route path="/upstairs" element={<Upstairs />} />
          <Route path="/cupertino" element={<Cupertino />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
