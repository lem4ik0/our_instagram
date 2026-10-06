import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./pages/Menu.jsx";
import Profile from "./pages/Profile.jsx";
import './pages/pages.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
  const userId = localStorage.getItem('userId')
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
        <Route path="/auth/menu" element={<Menu />} />
        <Route path={`/auth/menu/profile/${userId}`} element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
