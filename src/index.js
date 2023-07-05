import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserManagement from "./components/user";
import Menu from "./components/menu.js";
import TableReservation from "./components/tableReservation";
import LoginAdmin from "./components/loginAdmin";
import Restaurant from "./components/restaurant";
import Table from "./components/table";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAdmin />}></Route>
        <Route path="/home" element={<App />}></Route>
        <Route
          path="/home/tableReservation"
          element={<TableReservation />}
        ></Route>
        <Route path="/home/users" element={<UserManagement />}></Route>
        <Route path="/home/menu" element={<Menu />}></Route>
        <Route path="/home/restaurant" element={<Restaurant />}></Route>
        <Route path="/home/restaurant/table/:id" element={<Table />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
