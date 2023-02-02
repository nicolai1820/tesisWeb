import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.css";
import { startLogout } from "../actions/auth";

export const Navbar = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(startLogout());
    history.push("/");
    window.location.reload();
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light headerzindex">
      {/* Left navbar links   */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link buttonhref " data-widget="pushmenu">
            <i className="fas fa-bars" />
          </button>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <button className="btn" type="submit" onClick={logout}>
            Cerrar sesión
          </button>
        </li>

        <li className="nav-item">
          <button className="nav-link buttonhref" data-widget="fullscreen">
            <i className="fas fa-expand-arrows-alt" />
          </button>
        </li>
      </ul>
    </nav>
  );
};