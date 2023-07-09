import React from "react";
import "../CSS/adminlte/adminlte.min.css";
import "../CSS/select2/select2.min.css";
import "../CSS/admin-custom.css";
import { Link } from "react-router-dom";

function AdminReservation() {
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
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="/#" className="dropdown-item">
                  <div className="media">
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger">
                          <i className="fas fa-star"></i>
                        </span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="/#" className="dropdown-item">
                  <div className="media">
                    {/* <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"> */}
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-right text-sm text-muted">
                          <i className="fas fa-star"></i>
                        </span>
                      </h3>
                      <p className="text-sm">I got your message bro</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
              </div>
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
                  <Link to={`/home/users`} className="nav-link">
                    <i className="nav-icon fas fa-users"></i>
                    <p>Users</p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to={`/home/restaurant`} className="nav-link">
                    <i className="nav-icon fas fa-building"></i>
                    <p>Restaurant</p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to={`/home/tableReservation`} className="nav-link">
                    <i className="nav-icon fas fa-list-ul"></i>
                    <p>Reservation</p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to={`/home/menu`} className="nav-link">
                    <i className="nav-icon fas fa-edit"></i>
                    <p>Menu</p>
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

export default AdminReservation;
