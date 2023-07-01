import React from "react";
import "../CSS/adminlte/adminlte.min.css";
import "../CSS/select2/select2.min.css";
import "../CSS/admin-custom.css";
import { Link } from "react-router-dom";

import user from "./user.js";
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
          <a
            className="nav-link menu-btn"
            data-widget="pushmenu"
            href="/#!"
            role="button"
          >
            <i className="fa-solid fa-bar"></i>
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="/#">
                <i className="fas fa-user-cog"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="/#" className="dropdown-item">
                  <div className="media">
                    {/* <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle">  */}
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
                <div className="dropdown-divider"></div>
                <a href="/#" className="dropdown-item">
                  <div className="media">
                    {/* <!-- <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"> --> */}
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-right text-sm text-warning">
                          <i className="fas fa-star"></i>
                        </span>
                      </h3>
                      <p className="text-sm">The subject goes here</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="/#" className="dropdown-item dropdown-footer">
                  See All Messages
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="//#">
                Dao Anh Tu <i className="fas fa-caret-down pl-2"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">
                  15 Notifications
                </span>
                <div className="dropdown-divider"></div>
                <a href="/#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2"></i> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="/#" className="dropdown-item">
                  <i className="fas fa-users mr-2"></i> 8 friend requests
                  <span className="float-right text-muted text-sm">
                    12 hours
                  </span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="/#" className="dropdown-item">
                  <i className="fas fa-file mr-2"></i> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="/#" className="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div>
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
        {/* <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-4">
                <div className="col-md-12 title-block">
                  <h1 className="main-title">Manage Table Reservation</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <form className="col-md-12 form-inline job-seeker-frm">
                        <div className="form-group row col-md- search-input">
                          <div className="col-md-12">
                            <div
                              className="input-group"
                              style={{ width: "100%" }}
                            >
                              <input
                                type="text"
                                name="table_search"
                                className="form-control float-right"
                                placeholder="Search"
                              />

                              <div className="input-group-append">
                                <button
                                  type="submit"
                                  className="btn btn-default"
                                  style={{ minWidth: "50px" }}
                                >
                                  <i className="fas fa-search"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="card-body table-responsive">
                      <table className="table table-hover text-nowrap job-seeker-tbl">
                        <thead>
                          <tr>
                            <th>Reservation ID</th>
                            <th>Customer ID</th>
                            <th>Restaurant ID</th>
                            <th>Time</th>
                            <th>Note</th>
                            <th>Guest Size</th>
                            <th>Edit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>yyyy/mm/dd</td>
                            <td>3 persons, 2 kids,...</td>
                            <td>Guest</td>
                            <td>
                              <button className="active-btn">
                                <i className="fas fa-pencil-alt"></i>
                              </button>
                              <button className="active-btn">
                                <i className="far fa-file-alt"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>yyyy/mm/dd</td>
                            <td>3 persons, 2 kids,...</td>
                            <td>Guest</td>
                            <td>
                              <button className="active-btn">
                                <i className="fas fa-pencil-alt"></i>
                              </button>
                              <button className="active-btn">
                                <i className="far fa-file-alt"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="card-footer">
                      <div className="pagination-block">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="/#!">
                              <i className="fas fa-fast-backward"></i>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="/#!">
                              <i className="fas fa-angle-double-left"></i>
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="/#!">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="/#!">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="/#!">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="/#!">
                              ...
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="/#!">
                              25
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="/#!">
                              <i className="fas fa-angle-double-right"></i>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="/#!">
                              <i className="fas fa-fast-forward"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}

        {/* <footer className="main-footer">
          <div className="float-right d-sm-block">
            &copy; Copyright 2020
            <a href="/" title="Primegroup" target="_blank">
              Primegroup
            </a>
            . All Rights Reserved
          </div>
        </footer> */}
      </div>
    </>
  );
}

export default AdminReservation;
