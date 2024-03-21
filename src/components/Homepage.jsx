import React from "react";
import "../styles/Homepage.css";
import Sidenav from "./Sidenav";
import Timeline from "./Timeline";

function Homepage() {
  return (
    <div className="homepage">
      {/* <div className="homepage__navWraper">
        <Sidenav />
      </div> */}
      <div className="homepage__timeline container">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;