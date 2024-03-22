import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Contact from "./pages/contact/Contact.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
