import React from "react";
import { useParams } from "react-router-dom";
import AdminReservation from "./admin";
import { Tables } from "../data/Tables";
import { useState } from "react";
import PopUpTable, { PopUpEditTable } from "./popUp";

export default function Table() {
  const { id } = useParams();
  const [modalTable, setModalTable] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [idEdit, setIdEdit] = useState(null);
  const obj = Tables.filter((table) => table.restaurantID == id);

  const handleTable = () => {
    setModalTable(true);
  };
  const handleClose = () => {
    setModalTable(false);
  };
  const handleEditTable = (id) => {
    setEditModal(true);
    setIdEdit(id);
  };
  const handleEditClose = () => {
    setEditModal(false);
    setIdEdit("");
  };

  return (
    <div>
      <AdminReservation />
      {modalTable && <PopUpTable close={handleClose} open={modalTable} />}
      {idEdit && (
        <PopUpEditTable close={handleEditClose} open={editModal} id={idEdit} />
      )}

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
                  <button className="tableAdd" onClick={handleTable}>
                    Add Table
                  </button>
                  <div className="card-body table-responsive">
                    <table className="table table-hover text-nowrap job-seeker-tbl">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Table Capacity</th>
                          <th>Status</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {obj.map((table) => (
                          <tr>
                            <td>{table.id}</td>
                            <td>{table.tableCapacity} persons</td>
                            <td>{table.status}</td>
                            <td>
                              <button className="active-btn">
                                <i
                                  className="fas fa-pencil-alt"
                                  onClick={() => handleEditTable(table.id)}
                                ></i>
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
