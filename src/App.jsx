import React from "react";
import ReactDom from "react-dom";
// import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";
import UserCard from "./components/UserCard.jsx";

function App() {
  return (
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>

        <UserCard/>
      </Router>
  );
}

export default App;
