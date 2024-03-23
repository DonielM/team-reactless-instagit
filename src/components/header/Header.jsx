import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logoImg from "/src/assets/images/InstaGitLogobyDesigner.png";
import "./Header.css";


function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img
            src={logoImg}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />{" "}
          InstaGit
        </a>
        <button
          className=" navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/#git-repositories-section">
                Git Repositories
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
