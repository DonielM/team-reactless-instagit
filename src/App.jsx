import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";
import UserCard from "./components/UserCard.jsx";
import Timeline from "./components/Timeline.jsx";
import Homepage from "./components/HomePage.jsx";


function App() {
  return (
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <Homepage/>

        <UserCard/>
      </Router>
  );
}

export default App;
