import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/selectedusers">Selected Users</Link>
        </div>
      </nav>
    </div>
  );
}
