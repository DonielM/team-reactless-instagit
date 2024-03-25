import React from "react";
import "../styles/Homepage.css";
import Sidenav from "./Sidenav";
import Timeline from "./Timeline";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Homepage() {
  return (
    <div className="homepage">
      {/* <div className="homepage__navWraper">
        <Sidenav />
      </div> */}
      
      <div className="homepage__timeline container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Timeline />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Homepage;