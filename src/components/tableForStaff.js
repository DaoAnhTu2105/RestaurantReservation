import React from "react";
import Staff from "./staff";
import "../CSS/tableForStaff.css";
import { Tables_Staff } from "../data/ListOfTables";

export default function tableForStaff() {
  const table1 = Tables_Staff.filter(
    (table1) => (table1.tableCapacity < 3) & (table1.tableCapacity > 0)
  );
  const table2 = Tables_Staff.filter(
    (table2) => (table2.tableCapacity < 7) & (table2.tableCapacity > 2)
  );
  const table3 = Tables_Staff.filter(
    (table3) => (table3.tableCapacity < 13) & (table3.tableCapacity > 6)
  );

  return (
    <>
      {/*2 - https://cdn0.iconfinder.com/data/icons/office-set-6/512/4-512.png

    10 - https://th.bing.com/th/id/OIP.pgzSTMKeo25htlim4jWitQHaHa?pid=ImgDet&rs=1
    
    4 - https://th.bing.com/th/id/R.684abd5e622a355ead669d5c79c7b97c?rik=NgIW22q67tL42A&pid=ImgRaw&r=0 */}

      <Staff />

      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-4">
              <div className="col-md-12 title-block">
                <h1 className="main-title">Manage Table</h1>
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
                        <div className="col-md-12"></div>
                      </div>
                    </form>
                  </div>
                  <div className="card-body table-responsive">
                    <div className="tables_list">
                      <div className="table_section">
                        <div className="title">Square Table</div>
                        <div className="tables">
                          {table1.map((table) => (
                            <div className="table">
                              <img src="https://cdn0.iconfinder.com/data/icons/office-set-6/512/4-512.png"></img>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="table_section">
                        <div className="title">Rectangle Table</div>
                        <div className="tables">
                          {table2.map((table) => (
                            <div className="table">
                              <img src="https://th.bing.com/th/id/R.684abd5e622a355ead669d5c79c7b97c?rik=NgIW22q67tL42A&pid=ImgRaw&r=0"></img>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="table_section">
                        <div className="title">Group Table</div>
                        <div className="tables">
                          {table3.map((table) => (
                            <div className="table">
                              <img src="https://th.bing.com/th/id/OIP.pgzSTMKeo25htlim4jWitQHaHa?pid=ImgDet&rs=1"></img>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
