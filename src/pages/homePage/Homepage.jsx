// Styles
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Components
import Timeline from "../../components/timeline/Timeline.jsx";

function Homepage() {
  return (
    <div className="homepage">
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
