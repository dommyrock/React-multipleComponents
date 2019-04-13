import React from "react";
//Stateless functional component

const NavBar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar -Active Counters:
        <span className="badge badge-pill badge-secoundary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
