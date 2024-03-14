import React from "react";
// import ReactDom from "react-dom"
import { NavLink } from 'react-router-dom';
import '../styles/header.css';


function Header() {
return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary customNav">
            <div className="container-fluid">
                <a className="navbar-brand "><img src="../src/assets/images/logo4.png" /> InstaGit </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink to="/"end>
                            Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="Contact"end>
                            Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    </>
);
}

export default Header;
