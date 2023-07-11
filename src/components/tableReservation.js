import React from "react";
import { Reservations } from "../data/Reservations";
import Staff from "./staff";
export default function tableReservation() {
  return (
    <div>
      <Staff />
      <div className="content-wrapper">
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
                      <div className="form-group row col-md-12 search-input">
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
                          <th>Customer ID</th>
                          <th>Restaurant ID</th>
                          <th>Guest Size</th>
                          <th>Time</th>
                          <th>Note</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Reservations.map((res) => (
                          <tr>
                            <td>{res.customerID}</td>
                            <td>{res.restaurantID}</td>
                            <td>{res.guestSize}</td>
                            <td>{res.time}</td>
                            <td>{res.note}</td>
                            <td>
                              <button className="active-btn">
                                <i className="fas fa-pencil-alt"></i>
                              </button>
                              &nbsp;
                              <button className="active-btn">
                                <i class="fa-regular fa-trash-can"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
