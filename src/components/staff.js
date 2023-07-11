import React from "react";
import "../CSS/adminlte/adminlte.min.css";
import "../CSS/select2/select2.min.css";
import "../CSS/admin-custom.css";
import { Link } from "react-router-dom";

function Staff() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        rel="stylesheet"
      />
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="/#">
                <i className="fas fa-user-cog"></i>
                &nbsp; Logout
              </a>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/home/users"
                className="nav-link"
                data-toggle="dropdown"
              >
                Dao Anh Tu
              </Link>
            </li>
          </ul>
        </nav>
        <div className="main-sidebar sidebar-dark-primary">
          <div className="sidebar">
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item has-treeview">
                  <Link to={`/staff/tableReservation`} className="nav-link">
                    <i className="nav-icon fas fa-list-ul"></i>
                    <p>Reservation</p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to={`/staff/menu`} className="nav-link">
                    <i className="nav-icon fas fa-edit"></i>
                    <p>Menu</p>
                  </Link>
                </li>

                <li className="nav-item has-treeview">
                  <Link to={`/staff/table`} className="nav-link">
                    <i className="nav-icon fas fa-edit"></i>
                    <p>Table</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Staff;
