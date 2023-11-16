import React from "react";
import  PropTypes  from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar bg-body-secondary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 d-inline-flex p-1 fs-3">
          <div className={`${props.mode} rounded p-2 m-2`}>
            <img
              src={require("../logo-white.png")}
              alt="Logo"
              width="34"
              height="34"
              className="d-inline-block align-text-top"
            />
          </div>
          <p className="d-inline-flex align-items-center">
            The <em>"Quote"</em> Machine
          </p>
        </span>
      </div>
    </nav>
  );
}
