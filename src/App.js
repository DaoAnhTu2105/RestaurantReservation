import "./App.css";
import AdminReservation from "./components/admin";
import Restaurant from "./components/restaurant";
import UserManagement from "./components/user";
import Menu from "./components/menu";
import Table from "./components/table.js";
import TableReservation from "./components/tableReservation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <AdminReservation />
      <Routes>
        <Route path="/" element={<TableReservation />}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        <Route path="/users" element={<UserManagement />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/restaurant/table/:id" element={<Table />}></Route>
      </Routes>
    </div>
  );
}

export default App;
