
import React from "react";
import ReactDom from "react-dom"
// import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import "./App.css";


function App() {
  return (
    <>
      
      <Router>
       <Header/>
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      
      
    </Router>
    
  </>
  )
=======
import "./App.css";

function App() {
  return <></>;

}

export default App;
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more shkebfjhsbhksrjvf
//       </p>
//     </>
//   );
// }

// export default App;
