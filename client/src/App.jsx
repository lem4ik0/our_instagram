import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./pages/Menu.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route
          path="/auth"
          element={
            <div className="wrapper">
              <Header />
              <Footer />
            </div>
          }
        />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
