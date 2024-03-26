import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand">Purvi Porwal</a>
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="" className="nav-link active" aria-current="page">
                  Project.
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About.
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/resume" className="nav-link">
                  Resume.
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="https://www.linkedin.com/in/purvi-porwal/"
                  className="nav-link"
                  target="_blank"
                >
                  LinkedIn.
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
